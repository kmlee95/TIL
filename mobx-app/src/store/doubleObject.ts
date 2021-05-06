import { observable } from "mobx";

const doubleObject = observable({
  value: 1,
  get double() {
    return this.value * 2;
  },
  increase() {
    this.value++;
  },
});

export default doubleObject;
