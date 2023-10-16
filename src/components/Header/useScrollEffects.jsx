import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router";

function addProperty(e, r) {
  document.documentElement.style.setProperty(e, r);
}
function removeProperty(e) {
  document.documentElement.style.removeProperty(e);
}
function clamp(e, r, t) {
  return Math.min(Math.max(e, Math.min(r, t)), Math.max(r, t));
}

function profilePicScaleHandler(isIndexPath, contentOffset) {
  if (!isIndexPath) return;

  // Ratio for image scale
  const imageScaleRatio = 36 / 64;

  // Ratio for border scale
  const borderScaleRatio = 2 / 16;

  // Scroll offset
  const scrollOffset = contentOffset - window.scrollY;

  // Calculate image scale based on scroll
  let imageScale =
    (scrollOffset * (1 - imageScaleRatio)) / contentOffset + imageScaleRatio;

  // Clamp image scale
  imageScale = clamp(imageScale, 1, imageScaleRatio);

  // Calculate image offset
  let imageOffset =
    (scrollOffset * (0 - borderScaleRatio)) / contentOffset + borderScaleRatio;

  // Clamp image offset
  imageOffset = clamp(imageOffset, 0, borderScaleRatio);

  // Set CSS variable for image transform
  addProperty(
    "--avatar-image-transform",
    `translate3d(${imageOffset}rem, 0, 0) scale(${imageScale})`
  );

  // Calculate border scale ratio
  const borderScale = 1 / (imageScaleRatio / imageScale);

  // Calculate border offset
  const borderOffset = (-borderScaleRatio + imageOffset) * borderScale;

  // Set CSS variable for border transform
  addProperty(
    "--avatar-border-transform",
    `translate3d(${borderOffset}rem, 0, 0) scale(${borderScale})`
  );

  // Set opacity based on image scale
  addProperty(
    "--avatar-border-opacity",
    imageScale === imageScaleRatio ? "1" : "0"
  );
}

function headerVisibilityHandler(headerRef, isHeaderVisible, contentOffset) {
  if (!headerRef.current) return;
  let { top: headerTopPosition, height: headerHeight } =
    headerRef.current.getBoundingClientRect();
  let visibleArea = window.innerHeight;
  // Scrolled Area = X
  // Visible Area = Y
  // Invisible Area = Scrolled Area(X) + Unscrolled Area under Visible Area
  let scrollOffset = clamp(
    window.scrollY,
    0,
    document.body.scrollHeight - visibleArea // invisible area
  );
  if (isHeaderVisible.current) {
    addProperty("--header-position", "sticky");
  }
  addProperty("--content-offset", `${contentOffset}px`);
  if (isHeaderVisible.current || scrollOffset < contentOffset) {
    addProperty("--header-height", `${contentOffset + headerHeight}px`);
    addProperty("--header-mb", `${-contentOffset}px`);
  } else if (headerTopPosition + headerHeight < -64) {
    let headerTopPosition = Math.max(headerHeight, scrollOffset - 64);
    addProperty("--header-height", `${headerTopPosition}px`);
    addProperty("--header-mb", `${headerHeight - headerTopPosition}px`);
  } else if (headerTopPosition === 0) {
    addProperty("--header-height", `${scrollOffset + headerHeight}px`);
    addProperty("--header-mb", `${-scrollOffset}px`);
  }

  if (
    headerTopPosition === 0 &&
    scrollOffset > 0 &&
    scrollOffset >= contentOffset
  ) {
    addProperty("--header-inner-position", "fixed");
    removeProperty("--header-top");
    removeProperty("--avatar-top");
  } else {
    removeProperty("--header-inner-position");
    addProperty("--header-top", "0px");
    addProperty("--avatar-top", "0px");
  }
}

const useScrollEffects = function () {
  let location = useLocation();
  let isIndexPath = "/" === location.pathname;
  let headerRef = useRef(null);
  let contentOffsetRef = useRef(null);
  let isHeaderVisible = useRef(true);
  useLayoutEffect(() => {
    let contentOffset =
      contentOffsetRef.current !== null
        ? (contentOffsetRef.current != undefined && contentOffsetRef.current.offsetTop)
        : 0;
    console.log(contentOffset);
    function handleHeaderScrollEffects() {
      headerVisibilityHandler(headerRef, isHeaderVisible, contentOffset);
      profilePicScaleHandler(isIndexPath, contentOffset);
      isHeaderVisible.current = false;
    }
    handleHeaderScrollEffects();
    window.addEventListener("scroll", handleHeaderScrollEffects, {
      passive: true
    });
    window.addEventListener("resize", handleHeaderScrollEffects);
    return () => {
      window.removeEventListener("scroll", handleHeaderScrollEffects),
        window.removeEventListener("resize", handleHeaderScrollEffects);
    };
  }, [isIndexPath]);

  return [headerRef, contentOffsetRef];
};

export default useScrollEffects;
