export const propertyTypes = [
  { id: 0, lable: "Select Property Type", type: "0" },
  {
    id: 1,
    lable: "Corporate Property",
    type: "corporate",
    bgClass: "bg-aqua",
    iconClass: "ion-ios-grid-view"
  },
  {
    id: 2,
    lable: "Commercial Property",
    type: "commercial",
    bgClass: "bg-green",
    iconClass: "ion-ios-briefcase"
  },
  {
    id: 3,
    lable: "Residential Property",
    type: "residential",
    bgClass: "bg-red",
    iconClass: "ion-home"
  },
  {
    id: 4,
    lable: "PG/Hostel",
    type: "pg",
    bgClass: "bg-blue",
    iconClass: "ion-ios-football"
  },
  {
    id: 5,
    lable: "Hotel",
    type: "hotel",
    bgClass: "bg-yellow",
    iconClass: "ion-laptop"
  },
  {
    id: 6,
    lable: "Restaurant",
    type: "restaurant",
    bgClass: "bg-purple",
    iconClass: "ion-ios-wineglass"
  }
];
export const firstCharCapital = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
