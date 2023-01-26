export interface ICrud<T> {
  getOne: (parameters: object) => Promise<T | null>
  getAll: () => Promise<T[]>
  create: (parameters: T) => Promise<void>
  update: (parameters: object, x: string) => Promise<void>
  delete: (x: string) => Promise<void>
}
