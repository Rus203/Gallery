import { AppDataSource } from './data-source'

export const connectToDatabase = async (): Promise<void> => {
  await AppDataSource.initialize()
    .catch(error => { console.log(error) })
}
