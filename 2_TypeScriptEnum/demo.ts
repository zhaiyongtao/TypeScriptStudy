enum Status {
  OFFLINE,
  ONLINE,
  DELETED,
}
// 枚举的默认值是从0 开始
// enum Status {
//     OFFLINE = 0,
//     ONLINE = 1,
//     DELETED = 2
// }

enum Status2 {
  OFFLINE,
  ONLINE = 4,
  DELETED,
}

enum Status3 {
  OFFLINE = "OFFLINE",
  ONLINE = "ONLINE",
  DELETED = "DELETED",
}

function test(x: number): void {
  if (Status.OFFLINE == x) {
    console.info("OFFLINE");
  }
  if (Status.ONLINE == x) {
    console.info("ONLINE");
  }
  if (Status.DELETED == x) {
    console.info("DELETED");
  }
}
test(1);

function output(x) {
  console.info("x", x);
}
output(Status2.OFFLINE); //x 0
output(Status2.ONLINE); //x 4
output(Status2.DELETED); //x 5

output(Status2[0]); //x OFFLINE
output(Status2[4]); //x ONLINE
output(Status2[5]); //x DELETED


output(Status3.OFFLINE); //x OFFLINE
output(Status3.ONLINE); //x ONLINE
output(Status3.DELETED); //x DELETED