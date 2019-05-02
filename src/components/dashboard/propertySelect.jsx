import React from "react";
const PropertySelect = ({ propertyTypes, onFilterProperty }) => {
  return (
    <div className="row">
      <div className="col-xs-12">
        <div className="box">
          <div className="box-header">
            <select
              className="form-control input-sm"
              name="propertyType"
              onChange={({ currentTarget: input }) => {
                onFilterProperty(input.value);
              }}
            >
              {propertyTypes.map(item => {
                return (
                  <option key={item.id} value={item.type}>
                    {item.lable}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySelect;
