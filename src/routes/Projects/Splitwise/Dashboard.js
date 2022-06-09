import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import localStore from "../../../utils/localStore";
import { useAuth } from "../AuthContext";
import {
  getCurrentUser,
  getCurrentUserGroups,
  getExpensesWithFriendId
} from "./services";
import { useSplitwise } from "./SplitwiseContext";
const callGetCurrentUser = function (auth) {
  useEffect(() => {
    let response;
    if (!localStore.getData("user")) {
      (async function () {
        response = await getCurrentUser();
        localStore.setData("user", response.data.user);
        auth.setUser(localStore.getData("user"));
      })();
    } else {
      auth.setUser(localStore.getData("user"));
    }
  }, []);
};
const callGetCurrentUserGroups = function (splitwise) {
  useEffect(() => {
    let response;
    if (!localStore.getData("groups")) {
      (async function () {
        response = await getCurrentUserGroups();
        localStore.setData("groups", response.data.groups);
        splitwise.setGroups(localStore.getData("groups"));
      })();
    } else {
      splitwise.setGroups(localStore.getData("groups"));
    }
  }, []);
};
const callGetExpensesWithFriendId = function (searchParams, setExpenses) {
  useEffect(() => {
    let response;
    (async function () {
      response = await getExpensesWithFriendId(searchParams.get("memberId"), {
        limit: 20,
        offset: 0
      });
      setExpenses(response.data.expenses);
    })();
  }, []);
};
export default function Dashboard() {
  const [params, setParams] = useSearchParams();
  const [selectedCollapse, setSelectedCollapse] = useState(
    params.get("groupId") || 0
  );
  const [expenses, setExpenses] = useState([]);
  const auth = useAuth();
  const splitwise = useSplitwise();
  callGetCurrentUser(auth);
  callGetCurrentUserGroups(splitwise);
  callGetExpensesWithFriendId(params, setExpenses);
  function collapseButtonClick(selectedIndex) {
    setSelectedCollapse(selectedIndex);
  }
  return (
    <div className="d-flex">
      <div className="col-3">
        <h3>Profile</h3>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            value={auth.user?.email}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="name@example.com"
            value={auth.user?.first_name}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            value={auth.user?.last_name}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Currency
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            value={auth.user?.default_currency}
            readOnly
          />
        </div>
      </div>
      <div className="col-4 mx-2">
        <h3>Groups</h3>
        <div className="d-flex">
          {splitwise.groups?.map((group, index) => {
            return (
              <p key={`collapse_trigger_${index}`} className="mx-2">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => collapseButtonClick(index)}
                  aria-expanded="false"
                >
                  {`${group.name}`}
                </button>
              </p>
            );
          })}
        </div>

        <div key={`collapse_body`}>
          <div style={{ minHeight: "120px" }}>
            <div className={`collapse ${selectedCollapse >= 0 && "show"}`}>
              <div className="card card-body" style={{ width: "300px" }}>
                {(splitwise.groups || []).length > 0
                  ? (splitwise.groups[selectedCollapse] || {})?.members.map(
                      (user, userIndex) => {
                        return (
                          <a
                            key={userIndex}
                            href={`/projects/splitwise/dashboard?groupId=${selectedCollapse}&panels=["show_expenses"]&memberId=${user.id}`}
                          >{`${user.first_name} ${user.last_name}`}</a>
                        );
                      }
                    )
                  : "No Users"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <pre>{JSON.stringify(expenses, null, "\t")}</pre>
      </div>
    </div>
  );
}
