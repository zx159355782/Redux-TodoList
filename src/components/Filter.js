import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../actions";

const Filter = ({ setFilter, filter }) => {
  const handleFilter = (f) => {
    setFilter(f);
  };

  return (
    <div className="filter">
      <span
        onClick={() => handleFilter("全部")}
        className={filter === "全部" ? "filter-selected" : "filter-unselecte"}
      >
        全部
      </span>
      <span
        onClick={() => handleFilter("已完成")}
        className={filter === "已完成" ? "filter-selected" : "filter-unselecte"}
      >
        已完成
      </span>
      <span
        onClick={() => handleFilter("未完成")}
        className={filter === "未完成" ? "filter-selected" : "filter-unselecte"}
      >
        未完成
      </span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.setFilter,
  };
};

export default connect(mapStateToProps, { setFilter })(Filter);
