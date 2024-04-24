export class DateTimeQR {
  static encode(dt) {
    return "DATE-TIME:" + dt.toStringISO8601() + ";";
  }
};
