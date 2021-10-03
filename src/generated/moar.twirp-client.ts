import {
  CreateModuleRequest,
  CreateModuleResponse,
  DeleteModuleRequest,
  DeleteModuleResponse,
  DeleteVersionRequest,
  DeleteVersionResponse,
  GetModuleRequest,
  GetModuleResponse,
  GetUrlRequest,
  GetUrlResponse,
  UploadVersionRequest,
  UploadVersionResponse,
} from './moar'

//==================================//
//          Client Code             //
//==================================//

interface Rpc {
  request(
    service: string,
    method: string,
    contentType: 'application/json' | 'application/protobuf',
    data: object | Uint8Array
  ): Promise<object | Uint8Array>
}

export interface ModuleRegistryClient {
  GetUrl(request: GetUrlRequest): Promise<GetUrlResponse>
  CreateModule(request: CreateModuleRequest): Promise<CreateModuleResponse>
  GetModule(request: GetModuleRequest): Promise<GetModuleResponse>
  DeleteModule(request: DeleteModuleRequest): Promise<DeleteModuleResponse>
  UploadVersion(request: UploadVersionRequest): Promise<UploadVersionResponse>
  DeleteVersion(request: DeleteVersionRequest): Promise<DeleteVersionResponse>
}

export class ModuleRegistryClientJSON implements ModuleRegistryClient {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
    this.GetUrl.bind(this)
    this.CreateModule.bind(this)
    this.GetModule.bind(this)
    this.DeleteModule.bind(this)
    this.UploadVersion.bind(this)
    this.DeleteVersion.bind(this)
  }
  GetUrl(request: GetUrlRequest): Promise<GetUrlResponse> {
    const data = GetUrlRequest.toJson(request, { useProtoFieldName: true, emitDefaultValues: false })
    const promise = this.rpc.request('moarpb.ModuleRegistry', 'GetUrl', 'application/json', data as object)
    return promise.then((data) => GetUrlResponse.fromJson(data as any, { ignoreUnknownFields: true }))
  }

  CreateModule(request: CreateModuleRequest): Promise<CreateModuleResponse> {
    const data = CreateModuleRequest.toJson(request, { useProtoFieldName: true, emitDefaultValues: false })
    const promise = this.rpc.request(
      'moarpb.ModuleRegistry',
      'CreateModule',
      'application/json',
      data as object
    )
    return promise.then((data) => CreateModuleResponse.fromJson(data as any, { ignoreUnknownFields: true }))
  }

  GetModule(request: GetModuleRequest): Promise<GetModuleResponse> {
    const data = GetModuleRequest.toJson(request, { useProtoFieldName: true, emitDefaultValues: false })
    const promise = this.rpc.request('moarpb.ModuleRegistry', 'GetModule', 'application/json', data as object)
    return promise.then((data) => GetModuleResponse.fromJson(data as any, { ignoreUnknownFields: true }))
  }

  DeleteModule(request: DeleteModuleRequest): Promise<DeleteModuleResponse> {
    const data = DeleteModuleRequest.toJson(request, { useProtoFieldName: true, emitDefaultValues: false })
    const promise = this.rpc.request(
      'moarpb.ModuleRegistry',
      'DeleteModule',
      'application/json',
      data as object
    )
    return promise.then((data) => DeleteModuleResponse.fromJson(data as any, { ignoreUnknownFields: true }))
  }

  UploadVersion(request: UploadVersionRequest): Promise<UploadVersionResponse> {
    const data = UploadVersionRequest.toJson(request, { useProtoFieldName: true, emitDefaultValues: false })
    const promise = this.rpc.request(
      'moarpb.ModuleRegistry',
      'UploadVersion',
      'application/json',
      data as object
    )
    return promise.then((data) => UploadVersionResponse.fromJson(data as any, { ignoreUnknownFields: true }))
  }

  DeleteVersion(request: DeleteVersionRequest): Promise<DeleteVersionResponse> {
    const data = DeleteVersionRequest.toJson(request, { useProtoFieldName: true, emitDefaultValues: false })
    const promise = this.rpc.request(
      'moarpb.ModuleRegistry',
      'DeleteVersion',
      'application/json',
      data as object
    )
    return promise.then((data) => DeleteVersionResponse.fromJson(data as any, { ignoreUnknownFields: true }))
  }
}

export class ModuleRegistryClientProtobuf implements ModuleRegistryClient {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
    this.GetUrl.bind(this)
    this.CreateModule.bind(this)
    this.GetModule.bind(this)
    this.DeleteModule.bind(this)
    this.UploadVersion.bind(this)
    this.DeleteVersion.bind(this)
  }
  GetUrl(request: GetUrlRequest): Promise<GetUrlResponse> {
    const data = GetUrlRequest.toBinary(request)
    const promise = this.rpc.request('moarpb.ModuleRegistry', 'GetUrl', 'application/protobuf', data)
    return promise.then((data) => GetUrlResponse.fromBinary(data as Uint8Array))
  }

  CreateModule(request: CreateModuleRequest): Promise<CreateModuleResponse> {
    const data = CreateModuleRequest.toBinary(request)
    const promise = this.rpc.request('moarpb.ModuleRegistry', 'CreateModule', 'application/protobuf', data)
    return promise.then((data) => CreateModuleResponse.fromBinary(data as Uint8Array))
  }

  GetModule(request: GetModuleRequest): Promise<GetModuleResponse> {
    const data = GetModuleRequest.toBinary(request)
    const promise = this.rpc.request('moarpb.ModuleRegistry', 'GetModule', 'application/protobuf', data)
    return promise.then((data) => GetModuleResponse.fromBinary(data as Uint8Array))
  }

  DeleteModule(request: DeleteModuleRequest): Promise<DeleteModuleResponse> {
    const data = DeleteModuleRequest.toBinary(request)
    const promise = this.rpc.request('moarpb.ModuleRegistry', 'DeleteModule', 'application/protobuf', data)
    return promise.then((data) => DeleteModuleResponse.fromBinary(data as Uint8Array))
  }

  UploadVersion(request: UploadVersionRequest): Promise<UploadVersionResponse> {
    const data = UploadVersionRequest.toBinary(request)
    const promise = this.rpc.request('moarpb.ModuleRegistry', 'UploadVersion', 'application/protobuf', data)
    return promise.then((data) => UploadVersionResponse.fromBinary(data as Uint8Array))
  }

  DeleteVersion(request: DeleteVersionRequest): Promise<DeleteVersionResponse> {
    const data = DeleteVersionRequest.toBinary(request)
    const promise = this.rpc.request('moarpb.ModuleRegistry', 'DeleteVersion', 'application/protobuf', data)
    return promise.then((data) => DeleteVersionResponse.fromBinary(data as Uint8Array))
  }
}
