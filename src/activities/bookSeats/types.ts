export interface Seat {
  bookedDates?: {
    [key: string]: string;
  };
  seatId: number;
}

export interface SeatPackage {
  packageId: number;
  seats: Seat[];
}
