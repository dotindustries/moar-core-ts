import { AxiosHttpRpc } from '#rpc'
import { GetUrlRequest } from '../generated/moar'
import { ModuleRegistryClientJSON } from '../generated/moar.twirp-client'

export type ResourceOptions = {
  version?: string
  versionConstraint?: string
}

export class MoarClient {
  private client: ModuleRegistryClientJSON

  constructor(serviceAddress?: string) {
    this.client = new ModuleRegistryClientJSON(
      new AxiosHttpRpc({
        baseURL: serviceAddress || 'localhost:8000',
      })
    )
  }

  public async getModuleResources(module: string, opts?: ResourceOptions) {
    const r = GetUrlRequest.create()
    let atVersion = ''
    r.moduleName = module
    if (opts) {
      if (opts.version) {
        r.versionSelector = {
          oneofKind: 'version',
          version: opts.version,
        }
        atVersion = opts.version
      }
      if (opts.versionConstraint) {
        r.versionSelector = {
          oneofKind: 'versionConstraint',
          versionConstraint: opts.versionConstraint,
        }
        atVersion = opts.versionConstraint
      }
    }
    try {
      return await this.client.GetUrl(r)
    } catch (e) {
      throw new Error(`Failed to get ${module}@${atVersion}`)
    }
  }
}
