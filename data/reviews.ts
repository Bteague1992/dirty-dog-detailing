export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
}

export const reviews: Review[] = [
  {
    id: "review-1",
    name: "Travis S.",
    location: "Newton, NC",
    rating: 5,
    quote:
      "Brandon showed on time and did a great job on my 2018 Ram. Truck was very dirty , he cleaned up anode , hand washed outside . I also added the n a hand wax. Came out great. Will be using in the future for sure.",
  },
  {
    id: "review-2",
    name: "Michael D.",
    location: "Granite Falls, NC",
    rating: 5,
    quote:
      "Absolutely amazing! My car was a disaster, and he hit the ball out if the park! Thank you!",
  },
  {
    id: "review-3",
    name: "Tony C.",
    location: "Denver, NC",
    rating: 5,
    quote:
      "Great service, booking on the site was super quick and simple. Communication afterwards was great and they showed up on time and got the job done. Car looks great.",
  },
  {
    id: "review-4",
    name: "Tiffany T.",
    location: "Connelly Springs, NC",
    rating: 5,
    quote:
      "Did an amazing job on my jeep. I’ve neglected it for years bc I hate cleaning out my car. He took his time and made sure he got every detail looking almost new again. Thanks 😊",
  },
];
