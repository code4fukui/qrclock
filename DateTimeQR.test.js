import { DateTime } from "https://js.sabae.cc/DateTime.js";
import { DateTimeQR } from "./DateTimeQR.js";
import * as t from "https://deno.land/std/testing/asserts.ts";

Deno.test("simple", () => {
  t.assertEquals(DateTimeQR.encode(new DateTime("2024-04-24T10:01:02JST")), "DATE-TIME:20240424T100102+0900;");
});
