import {Package} from 'read-pkg'

export interface IPJSON extends Package {
  name: string
  version: string
  dxcli: {
    bin?: string
    npmRegistry?: string
    dirname?: string
    commands?: string
    hooks: { [name: string]: string[] }
    plugins?: string[] | string
    topics: {
      [k: string]: {
        description?: string
        subtopics?: IPJSON['dxcli']['topics']
        hidden?: boolean
      }
    }
  }
}