export interface Seat {
  bookedDates?: string[];
  seatId: number;
}

export interface SeatPackage {
  packageId: number;
  seats: Seat[];
}
