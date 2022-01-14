import cookieImg from "../assets/images/activities/cookie.png";
import pizzaImg from "../assets/images/activities/pizza.png";
import golfImg from "../assets/images/activities/golf.png";
import potteryImg from "../assets/images/activities/pottery.png";
import fishingImg from "../assets/images/activities/fishing.png";
import bikingImg from "../assets/images/activities/biking.png";
import chaseImg from "../assets/images/activities/chase.png";

export default function data() {
  return [
    {
      id: 1,
      name: "Cookie Decorating",
      img_src: cookieImg,
      description:
        "Decorate cookies in-person or remotely! All supplies included.",
    },
    {
      id: 2,
      name: "Pizaa Making",
      img_src: pizzaImg,
      description: "Make pizza with your team in-person or from your home.",
    },
    {
      id: 3,
      name: "Mini Golf",
      img_src: golfImg,
      description:
        "Bring your team for a great day of mini golf! In-person only.",
    },
    {
      id: 4,
      name: "Pottery Painting",
      img_src: potteryImg,
      description: "Relaxing group activity. In-person & remote friendly.",
    },
    {
      id: 5,
      name: "Ice Fishing with Guide",
      img_src: fishingImg,
      description: "Perfect getaway! Truly a Canadian Experience.",
    },
    {
      id: 6,
      name: "Group Bicycle Rental",
      img_src: bikingImg,
      description:
        "A great workout and the best way to explore your local area.",
    },
    {
      id: 7,
      name: "Mini Golf",
      img_src: golfImg,
      description:
        "Bring your team for a great day of mini golf! In-person only.",
    },
    {
      id: 8,
      name: "Amazing Chase  ",
      img_src: chaseImg,
      description: "Embark on a fun, fast-paced, and high-energy scavenger",
    },
  ];
}
