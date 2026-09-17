function calculateFee(entryTime, exitTime, rate) {
  if (!entryTime || !exitTime) {
    throw new Error("Entry time and exit time are required");
  }

  if (!rate) {
    throw new Error("Rate information is required");
  }

  const entry = new Date(entryTime);
  const exit = new Date(exitTime);

  if (Number.isNaN(entry.getTime()) || Number.isNaN(exit.getTime())) {
    throw new Error("Invalid entry or exit time");
  }

  if (exit <= entry) {
    throw new Error("Exit time must be after entry time");
  }

  const durationMs = exit.getTime() - entry.getTime();

  // Part-hours are rounded up.
  const totalHours = Math.ceil(durationMs / (1000 * 60 * 60));

  const dailyCap = Number(rate.dailyCap);
  const firstHourRate = Number(rate.firstHourRate);
  const additionalHourRate = Number(rate.additionalHourRate);

  if (
    !Number.isFinite(dailyCap) ||
    !Number.isFinite(firstHourRate) ||
    !Number.isFinite(additionalHourRate)
  ) {
    throw new Error("Invalid rate values");
  }

  if (totalHours <= 24) {
    const fee =
      totalHours === 1
        ? firstHourRate
        : firstHourRate +
          (totalHours - 1) * additionalHourRate;

    return Math.min(fee, dailyCap);
  }

  const fullDays = Math.floor(totalHours / 24);
  const remainingHours = totalHours % 24;

  let fee = fullDays * dailyCap;

  if (remainingHours > 0) {
    const remainingFee =
      remainingHours === 1
        ? firstHourRate
        : firstHourRate +
          (remainingHours - 1) * additionalHourRate;

    fee += Math.min(remainingFee, dailyCap);
  }

  return fee;
}

module.exports = calculateFee;
