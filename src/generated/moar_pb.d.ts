// package: moarpb
// file: moar.proto

import * as jspb from "google-protobuf";

export class GetModuleRequest extends jspb.Message {
  getModulename(): string;
  setModulename(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModuleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModuleRequest): GetModuleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModuleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModuleRequest;
  static deserializeBinaryFromReader(message: GetModuleRequest, reader: jspb.BinaryReader): GetModuleRequest;
}

export namespace GetModuleRequest {
  export type AsObject = {
    modulename: string,
  }
}

export class GetModuleResponse extends jspb.Message {
  clearModuleList(): void;
  getModuleList(): Array<Module>;
  setModuleList(value: Array<Module>): void;
  addModule(value?: Module, index?: number): Module;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModuleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetModuleResponse): GetModuleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModuleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModuleResponse;
  static deserializeBinaryFromReader(message: GetModuleResponse, reader: jspb.BinaryReader): GetModuleResponse;
}

export namespace GetModuleResponse {
  export type AsObject = {
    moduleList: Array<Module.AsObject>,
  }
}

export class GetUrlRequest extends jspb.Message {
  getModulename(): string;
  setModulename(value: string): void;

  hasVersionconstraint(): boolean;
  clearVersionconstraint(): void;
  getVersionconstraint(): string;
  setVersionconstraint(value: string): void;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): string;
  setVersion(value: string): void;

  getVersionselectorCase(): GetUrlRequest.VersionselectorCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUrlRequest): GetUrlRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUrlRequest;
  static deserializeBinaryFromReader(message: GetUrlRequest, reader: jspb.BinaryReader): GetUrlRequest;
}

export namespace GetUrlRequest {
  export type AsObject = {
    modulename: string,
    versionconstraint: string,
    version: string,
  }

  export enum VersionselectorCase {
    VERSIONSELECTOR_NOT_SET = 0,
    VERSIONCONSTRAINT = 2,
    VERSION = 3,
  }
}

export class VersionResource extends jspb.Message {
  getUri(): string;
  setUri(value: string): void;

  getName(): string;
  setName(value: string): void;

  getContenttype(): string;
  setContenttype(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionResource.AsObject;
  static toObject(includeInstance: boolean, msg: VersionResource): VersionResource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VersionResource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionResource;
  static deserializeBinaryFromReader(message: VersionResource, reader: jspb.BinaryReader): VersionResource;
}

export namespace VersionResource {
  export type AsObject = {
    uri: string,
    name: string,
    contenttype: string,
  }
}

export class GetUrlResponse extends jspb.Message {
  clearResourcesList(): void;
  getResourcesList(): Array<VersionResource>;
  setResourcesList(value: Array<VersionResource>): void;
  addResources(value?: VersionResource, index?: number): VersionResource;

  hasModule(): boolean;
  clearModule(): void;
  getModule(): Module | undefined;
  setModule(value?: Module): void;

  getSelectedversion(): string;
  setSelectedversion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUrlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUrlResponse): GetUrlResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUrlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUrlResponse;
  static deserializeBinaryFromReader(message: GetUrlResponse, reader: jspb.BinaryReader): GetUrlResponse;
}

export namespace GetUrlResponse {
  export type AsObject = {
    resourcesList: Array<VersionResource.AsObject>,
    module?: Module.AsObject,
    selectedversion: string,
  }
}

export class CreateModuleRequest extends jspb.Message {
  getModulename(): string;
  setModulename(value: string): void;

  getAuthor(): string;
  setAuthor(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModuleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModuleRequest): CreateModuleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateModuleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModuleRequest;
  static deserializeBinaryFromReader(message: CreateModuleRequest, reader: jspb.BinaryReader): CreateModuleRequest;
}

export namespace CreateModuleRequest {
  export type AsObject = {
    modulename: string,
    author: string,
    language: string,
  }
}

export class CreateModuleResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModuleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModuleResponse): CreateModuleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateModuleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModuleResponse;
  static deserializeBinaryFromReader(message: CreateModuleResponse, reader: jspb.BinaryReader): CreateModuleResponse;
}

export namespace CreateModuleResponse {
  export type AsObject = {
  }
}

export class DeleteModuleRequest extends jspb.Message {
  getModulename(): string;
  setModulename(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModuleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModuleRequest): DeleteModuleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteModuleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModuleRequest;
  static deserializeBinaryFromReader(message: DeleteModuleRequest, reader: jspb.BinaryReader): DeleteModuleRequest;
}

export namespace DeleteModuleRequest {
  export type AsObject = {
    modulename: string,
  }
}

export class DeleteModuleResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModuleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModuleResponse): DeleteModuleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteModuleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModuleResponse;
  static deserializeBinaryFromReader(message: DeleteModuleResponse, reader: jspb.BinaryReader): DeleteModuleResponse;
}

export namespace DeleteModuleResponse {
  export type AsObject = {
  }
}

export class UploadVersionRequest extends jspb.Message {
  getModulename(): string;
  setModulename(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  clearFilesList(): void;
  getFilesList(): Array<File>;
  setFilesList(value: Array<File>): void;
  addFiles(value?: File, index?: number): File;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadVersionRequest): UploadVersionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadVersionRequest;
  static deserializeBinaryFromReader(message: UploadVersionRequest, reader: jspb.BinaryReader): UploadVersionRequest;
}

export namespace UploadVersionRequest {
  export type AsObject = {
    modulename: string,
    version: string,
    filesList: Array<File.AsObject>,
  }
}

export class UploadVersionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadVersionResponse): UploadVersionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadVersionResponse;
  static deserializeBinaryFromReader(message: UploadVersionResponse, reader: jspb.BinaryReader): UploadVersionResponse;
}

export namespace UploadVersionResponse {
  export type AsObject = {
  }
}

export class DeleteVersionRequest extends jspb.Message {
  getModulename(): string;
  setModulename(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVersionRequest): DeleteVersionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVersionRequest;
  static deserializeBinaryFromReader(message: DeleteVersionRequest, reader: jspb.BinaryReader): DeleteVersionRequest;
}

export namespace DeleteVersionRequest {
  export type AsObject = {
    modulename: string,
    version: string,
  }
}

export class DeleteVersionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVersionResponse): DeleteVersionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVersionResponse;
  static deserializeBinaryFromReader(message: DeleteVersionResponse, reader: jspb.BinaryReader): DeleteVersionResponse;
}

export namespace DeleteVersionResponse {
  export type AsObject = {
  }
}

export class Module extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearVersionsList(): void;
  getVersionsList(): Array<Version>;
  setVersionsList(value: Array<Version>): void;
  addVersions(value?: Version, index?: number): Version;

  getAuthor(): string;
  setAuthor(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Module.AsObject;
  static toObject(includeInstance: boolean, msg: Module): Module.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Module, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Module;
  static deserializeBinaryFromReader(message: Module, reader: jspb.BinaryReader): Module;
}

export namespace Module {
  export type AsObject = {
    name: string,
    versionsList: Array<Version.AsObject>,
    author: string,
    language: string,
  }
}

export class Version extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearFilesList(): void;
  getFilesList(): Array<File>;
  setFilesList(value: Array<File>): void;
  addFiles(value?: File, index?: number): File;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Version.AsObject;
  static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Version;
  static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export namespace Version {
  export type AsObject = {
    name: string,
    filesList: Array<File.AsObject>,
  }
}

export class File extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getMimetype(): string;
  setMimetype(value: string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): File.AsObject;
  static toObject(includeInstance: boolean, msg: File): File.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): File;
  static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
}

export namespace File {
  export type AsObject = {
    name: string,
    mimetype: string,
    data: Uint8Array | string,
  }
}

