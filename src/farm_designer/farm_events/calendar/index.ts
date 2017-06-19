import { Dictionary } from "farmbot/dist";
import { CalendarOccurrence, CalendarDay } from "../../interfaces";
import * as moment from "moment";
interface CalendarData {
  sortKey: number;
  month: string;
  day: number;
  items: CalendarOccurrence[]
}
// {
//   "0620":[
//     {
//       "mmdd": "0620",
//       "sortKey": 1497997320,
//       "timeStr": "05:22 pm",
//       "executableName": "Test Regimen 456",
//       "executableId": 23,
//       "id": 65
//     },
//     {
//       "mmdd": "0620",
//       "sortKey": 1497997620,
//       "timeStr": "05:27 pm",
//       "executableName": "(Test Regimen 456)",
//       "executableId": 23,
//       "id": 65
//     }
//   ]
// }
export class Calendar {
  /** We sort by this attribute. Left as const so that the comiler can catch
   * name changes. */
  static SORT_KEY: keyof CalendarDay = "sortKey";
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

  insert(occur: CalendarOccurrence) {
    let k = occur.mmdd;
    this.value[k] = this.value[k] || [];
    this.value[k].push(occur);
  }

  getAll(): CalendarDay[] {
    let all = Object
      .keys(this.value)
      .map(x => this.value[x])
      .filter(x => !!x)        // Poor man's compact() function.
      .filter(x => !!x.length) // Don't bother rendering empty days.
      .map((items): CalendarDay => {
        let item = items[0];
        return {
          sortKey: item.sortKey,
          month: Calendar.MONTHS[item.mmdd.slice(0, 2)] || "???",
          day: parseInt(item.mmdd.slice(2, 4)),
          items
        };
      });
    return _(all).sortBy(Calendar.SORT_KEY).value();
  }

  findByDate(m: moment.Moment): CalendarOccurrence[] {
    return this.value[this.fmtDate(m)] || [];
  }

  fmtDate = (m: moment.Moment) => {
    return m.format(Calendar.DATE_FORMAT);
  }
}
