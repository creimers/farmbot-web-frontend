import { Dictionary } from "farmbot/dist";
import { CalendarOccurrence } from "../../interfaces";
import * as moment from "moment";

export class Calendar {
  static DATE_FORMAT = "MMDD";
  static MONTHS: Readonly<Dictionary<string>> = {
    "12": "Dec",
    "11": "Nov",
    "10": "Oct",
    "09": "Sep",
    "08": "Aug",
    "07": "Jul",
    "06": "Jun",
    "05": "May",
    "04": "Apr",
    "03": "Mar",
    "02": "Feb",
    "01": "Jan"
  };

  constructor(public value: Dictionary<CalendarOccurrence[]> = {}) { }

  insert(m: moment.Moment, occur: CalendarOccurrence) {
    let k = this.fmtDate(m);
    this.value[k] = this.value[k] || [];
    this.value[k].push(occur);
  }

  findByDate(m: moment.Moment): CalendarOccurrence[] {
    return this.value[this.fmtDate(m)] || [];
  }

  fmtDate = (m: moment.Moment) => {
    return m.format(Calendar.DATE_FORMAT);
  }
}
