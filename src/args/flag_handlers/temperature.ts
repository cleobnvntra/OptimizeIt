/**
 * Handle the temperature flag and return the temperature value
 *
 * @param { string[] } args - The arguments passed to the CLI.
 * @returns { number } The temperature value.
 */
function handleTemperatureFlag(args: string[]): number {
  let temperature = 0.5;

  const temperatureFlagIndex = args.findIndex(
    (arg) => arg === '-t' || arg === '--temperature',
  );

  if (temperatureFlagIndex !== -1 && temperatureFlagIndex + 1 < args.length) {
    temperature =
      args[temperatureFlagIndex + 1][0] !== '-'
        ? parseFloat(args[temperatureFlagIndex + 1])
        : temperature;

    if (isNaN(temperature)) {
      console.error('Temperature value provided is invalid.');
      process.exit(1);
    }

    console.log('temperature:', temperature);
  }

  return temperature;
}

export default handleTemperatureFlag;
