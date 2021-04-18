import Moment from "moment";
export default function changeTime(time) {
  return Moment(time).format("MMMM DD, YYYY - HH.mm");
}
