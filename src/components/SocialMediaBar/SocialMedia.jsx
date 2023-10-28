import PropTypes from "prop-types";

export default function SocialMedia(props) {
  return (
    <a className="group -m-1 p-1" aria-label={props.ariaLabel} href={props.url}>
      {props.children}
    </a>
  );
}

SocialMedia.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.element
};
