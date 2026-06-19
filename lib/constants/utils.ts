export async function convertToPlainObject<T>(value: T): Promise<T> {
  return JSON.parse(JSON.stringify(value));
}

export const APPLICATIONS_LIMIT = Number(process.env.APPLICATIONS_LIMIT) || 4;
