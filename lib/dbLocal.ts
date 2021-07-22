const baseEntity = '@weather'

export interface StorageData {
  [key: string]: any
}


export function getItem <T>(entity: string) {
  const storaged = localStorage.getItem(`${baseEntity}:${entity}`)
  const data = storaged ? JSON.parse(storaged) : null

  if (!data) return []
  
  const serialize = Object.keys(data).map(key => data[key])
  return serialize as T[]
}

export function setItem <T = {}>(entity: string, data: T) {

  const storaged = localStorage.getItem(`${baseEntity}:${entity}`)
  const dataStoraged = storaged ? (JSON.parse(storaged) as { [key: string]: T }) : null

  if (!dataStoraged) {
    localStorage.setItem(`${baseEntity}:${entity}`, JSON.stringify(data))
    return
  }

  localStorage.setItem(`${baseEntity}:${entity}`, JSON.stringify({
      ...dataStoraged,
      ...data
  }))
}

export function deleteItem (entity: string, key: string) {

  const storaged = localStorage.getItem(`${baseEntity}:${entity}`)
  const dataStoraged = storaged ? JSON.parse(storaged) : null

  if (!dataStoraged) return

  delete dataStoraged[key]

  localStorage.setItem(`${baseEntity}:${entity}`, JSON.stringify(dataStoraged))

}