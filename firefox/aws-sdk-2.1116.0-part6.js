AWS.apiLoader.services["backupgateway"] = {};

AWS.BackupGateway = AWS.Service.defineService("backupgateway", [ "2021-01-01" ]);

AWS.apiLoader.services["backupgateway"]["2021-01-01"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2021-01-01",
        endpointPrefix: "backup-gateway",
        jsonVersion: "1.0",
        protocol: "json",
        serviceFullName: "AWS Backup Gateway",
        serviceId: "Backup Gateway",
        signatureVersion: "v4",
        signingName: "backup-gateway",
        targetPrefix: "BackupOnPremises_v20210101",
        uid: "backup-gateway-2021-01-01"
    },
    operations: {
        AssociateGatewayToServer: {
            input: {
                type: "structure",
                required: [ "GatewayArn", "ServerArn" ],
                members: {
                    GatewayArn: {},
                    ServerArn: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    GatewayArn: {}
                }
            }
        },
        CreateGateway: {
            input: {
                type: "structure",
                required: [ "ActivationKey", "GatewayDisplayName", "GatewayType" ],
                members: {
                    ActivationKey: {},
                    GatewayDisplayName: {},
                    GatewayType: {},
                    Tags: {
                        shape: "S9"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    GatewayArn: {}
                }
            }
        },
        DeleteGateway: {
            input: {
                type: "structure",
                required: [ "GatewayArn" ],
                members: {
                    GatewayArn: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    GatewayArn: {}
                }
            },
            idempotent: true
        },
        DeleteHypervisor: {
            input: {
                type: "structure",
                required: [ "HypervisorArn" ],
                members: {
                    HypervisorArn: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    HypervisorArn: {}
                }
            },
            idempotent: true
        },
        DisassociateGatewayFromServer: {
            input: {
                type: "structure",
                required: [ "GatewayArn" ],
                members: {
                    GatewayArn: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    GatewayArn: {}
                }
            }
        },
        ImportHypervisorConfiguration: {
            input: {
                type: "structure",
                required: [ "Host", "Name" ],
                members: {
                    Host: {},
                    KmsKeyArn: {},
                    Name: {},
                    Password: {
                        shape: "Sn"
                    },
                    Tags: {
                        shape: "S9"
                    },
                    Username: {
                        shape: "So"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    HypervisorArn: {}
                }
            }
        },
        ListGateways: {
            input: {
                type: "structure",
                members: {
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    Gateways: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                GatewayArn: {},
                                GatewayDisplayName: {},
                                GatewayType: {},
                                HypervisorId: {},
                                LastSeenTime: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListHypervisors: {
            input: {
                type: "structure",
                members: {
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    Hypervisors: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Host: {},
                                HypervisorArn: {},
                                KmsKeyArn: {},
                                Name: {},
                                State: {}
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListTagsForResource: {
            input: {
                type: "structure",
                required: [ "ResourceArn" ],
                members: {
                    ResourceArn: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    ResourceArn: {},
                    Tags: {
                        shape: "S9"
                    }
                }
            }
        },
        ListVirtualMachines: {
            input: {
                type: "structure",
                members: {
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    NextToken: {},
                    VirtualMachines: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                HostName: {},
                                HypervisorId: {},
                                LastBackupDate: {
                                    type: "timestamp"
                                },
                                Name: {},
                                Path: {},
                                ResourceArn: {}
                            }
                        }
                    }
                }
            }
        },
        PutMaintenanceStartTime: {
            input: {
                type: "structure",
                required: [ "GatewayArn", "HourOfDay", "MinuteOfHour" ],
                members: {
                    DayOfMonth: {
                        type: "integer"
                    },
                    DayOfWeek: {
                        type: "integer"
                    },
                    GatewayArn: {},
                    HourOfDay: {
                        type: "integer"
                    },
                    MinuteOfHour: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    GatewayArn: {}
                }
            }
        },
        TagResource: {
            input: {
                type: "structure",
                required: [ "ResourceARN", "Tags" ],
                members: {
                    ResourceARN: {},
                    Tags: {
                        shape: "S9"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    ResourceARN: {}
                }
            }
        },
        TestHypervisorConfiguration: {
            input: {
                type: "structure",
                required: [ "GatewayArn", "Host" ],
                members: {
                    GatewayArn: {},
                    Host: {},
                    Password: {
                        shape: "Sn"
                    },
                    Username: {
                        shape: "So"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UntagResource: {
            input: {
                type: "structure",
                required: [ "ResourceARN", "TagKeys" ],
                members: {
                    ResourceARN: {},
                    TagKeys: {
                        type: "list",
                        member: {}
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    ResourceARN: {}
                }
            }
        },
        UpdateGatewayInformation: {
            input: {
                type: "structure",
                required: [ "GatewayArn" ],
                members: {
                    GatewayArn: {},
                    GatewayDisplayName: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    GatewayArn: {}
                }
            }
        },
        UpdateHypervisor: {
            input: {
                type: "structure",
                required: [ "HypervisorArn" ],
                members: {
                    Host: {},
                    HypervisorArn: {},
                    Password: {
                        shape: "Sn"
                    },
                    Username: {
                        shape: "So"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    HypervisorArn: {}
                }
            }
        }
    },
    shapes: {
        S9: {
            type: "list",
            member: {
                type: "structure",
                required: [ "Key", "Value" ],
                members: {
                    Key: {},
                    Value: {}
                }
            }
        },
        Sn: {
            type: "string",
            sensitive: true
        },
        So: {
            type: "string",
            sensitive: true
        }
    },
    paginators: {
        ListGateways: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "Gateways"
        },
        ListHypervisors: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "Hypervisors"
        },
        ListVirtualMachines: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "VirtualMachines"
        }
    }
};

AWS.apiLoader.services["iottwinmaker"] = {};

AWS.IoTTwinMaker = AWS.Service.defineService("iottwinmaker", [ "2021-11-29" ]);

AWS.apiLoader.services["iottwinmaker"]["2021-11-29"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2021-11-29",
        endpointPrefix: "iottwinmaker",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceFullName: "AWS IoT TwinMaker",
        serviceId: "IoTTwinMaker",
        signatureVersion: "v4",
        signingName: "iottwinmaker",
        uid: "iottwinmaker-2021-11-29"
    },
    operations: {
        BatchPutPropertyValues: {
            http: {
                requestUri: "/workspaces/{workspaceId}/entity-properties",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "entries", "workspaceId" ],
                members: {
                    entries: {
                        type: "list",
                        member: {
                            shape: "S3"
                        }
                    },
                    workspaceId: {
                        location: "uri",
                        locationName: "workspaceId"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "errorEntries" ],
                members: {
                    errorEntries: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "errors" ],
                            members: {
                                errors: {
                                    type: "list",
                                    member: {
                                        type: "structure",
                                        required: [ "entry", "errorCode", "errorMessage" ],
                                        members: {
                                            entry: {
                                                shape: "S3"
                                            },
                                            errorCode: {},
                                            errorMessage: {}
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            endpoint: {
                hostPrefix: "data."
            }
        },
        CreateComponentType: {
            http: {
                requestUri: "/workspaces/{workspaceId}/component-types/{componentTypeId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "componentTypeId", "workspaceId" ],
                members: {
                    componentTypeId: {
                        location: "uri",
                        locationName: "componentTypeId"
                    },
                    description: {},
                    extendsFrom: {
                        shape: "Sv"
                    },
                    functions: {
                        shape: "Sw"
                    },
                    isSingleton: {
                        type: "boolean"
                    },
                    propertyDefinitions: {
                        shape: "S13"
                    },
                    tags: {
                        shape: "S1a"
                    },
                    workspaceId: {
                        location: "uri",
                        locationName: "workspaceId"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "arn", "creationDateTime", "state" ],
                members: {
                    arn: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    state: {}
                }
            },
            endpoint: {
                hostPrefix: "api."
            }
        },
        CreateEntity: {
            http: {
                requestUri: "/workspaces/{workspaceId}/entities",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "entityName", "workspaceId" ],
                members: {
                    components: {
                        type: "map",
                        key: {},
                        value: {
                            type: "structure",
                            members: {
                                componentTypeId: {},
                                description: {},
                                properties: {
                                    shape: "S1j"
                                }
                            }
                        }
                    },
                    description: {},
                    entityId: {},
                    entityName: {},
                    parentEntityId: {},
                    tags: {
                        shape: "S1a"
                    },
                    workspaceId: {
                        location: "uri",
                        locationName: "workspaceId"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "arn", "creationDateTime", "entityId", "state" ],
                members: {
                    arn: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    entityId: {},
                    state: {}
                }
            },
            endpoint: {
                hostPrefix: "api."
            }
        },
        CreateScene: {
            http: {
                requestUri: "/workspaces/{workspaceId}/scenes",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "contentLocation", "sceneId", "workspaceId" ],
                members: {
                    capabilities: {
                        shape: "S1q"
                    },
                    contentLocation: {},
                    description: {},
                    sceneId: {},
                    tags: {
                        shape: "S1a"
                    },
                    workspaceId: {
                        location: "uri",
                        locationName: "workspaceId"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "arn", "creationDateTime" ],
                members: {
                    arn: {},
                    creationDateTime: {
                        type: "timestamp"
                    }
                }
            },
            endpoint: {
                hostPrefix: "api."
            }
        },
        CreateWorkspace: {
            http: {
                requestUri: "/workspaces/{workspaceId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "role", "s3Location", "workspaceId" ],
                members: {
                    description: {},
                    role: {},
                    s3Location: {},
                    tags: {
                        shape: "S1a"
                    },
                    workspaceId: {
                        location: "uri",
                        locationName: "workspaceId"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "arn", "creationDateTime" ],
                members: {
                    arn: {},
                    creationDateTime: {
                        type: "timestamp"
                    }
                }
            },
            endpoint: {
                hostPrefix: "api."
            }
        },
        DeleteComponentType: {
            http: {
                method: "DELETE",
                requestUri: "/workspaces/{workspaceId}/component-types/{componentTypeId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "componentTypeId", "workspaceId" ],
                members: {
                    componentTypeId: {
                        location: "uri",
                        locationName: "componentTypeId"
                    },
                    workspaceId: {
                        location: "uri",
                        locationName: "workspaceId"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "state" ],
                members: {
                    state: {}
                }
            },
            endpoint: {
                hostPrefix: "api."
            }
        },
        DeleteEntity: {
            http: {
                method: "DELETE",
                requestUri: "/workspaces/{workspaceId}/entities/{entityId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "entityId", "workspaceId" ],
                members: {
                    entityId: {
                        location: "uri",
                        locationName: "entityId"
                    },
                    isRecursive: {
                        location: "querystring",
                        locationName: "isRecursive",
                        type: "boolean"
                    },
                    workspaceId: {
                        location: "uri",
                        locationName: "workspaceId"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "state" ],
                members: {
                    state: {}
                }
            },
            endpoint: {
                hostPrefix: "api."
            }
        },
        DeleteScene: {
            http: {
                method: "DELETE",
                requestUri: "/workspaces/{workspaceId}/scenes/{sceneId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "sceneId", "workspaceId" ],
                members: {
                    sceneId: {
                        location: "uri",
                        locationName: "sceneId"
                    },
                    workspaceId: {
                        location: "uri",
                        locationName: "workspaceId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            endpoint: {
                hostPrefix: "api."
            }
        },
        DeleteWorkspace: {
            http: {
                method: "DELETE",
                requestUri: "/workspaces/{workspaceId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "workspaceId" ],
                members: {
                    workspaceId: {
                        location: "uri",
                        locationName: "workspaceId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            endpoint: {
                hostPrefix: "api."
            }
        },
        GetComponentType: {
            http: {
                method: "GET",
                requestUri: "/workspaces/{workspaceId}/component-types/{componentTypeId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "componentTypeId", "workspaceId" ],
                members: {
                    componentTypeId: {
                        location: "uri",
                        locationName: "componentTypeId"
                    },
                    workspaceId: {
                        location: "uri",
                        locationName: "workspaceId"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "arn", "componentTypeId", "creationDateTime", "updateDateTime", "workspaceId" ],
                members: {
                    arn: {},
                    componentTypeId: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    description: {},
                    extendsFrom: {
                        shape: "Sv"
                    },
                    functions: {
                        type: "map",
                        key: {},
                        value: {
                            type: "structure",
                            members: {
                                implementedBy: {
                                    shape: "Sy"
                                },
                                isInherited: {
                                    type: "boolean"
                                },
                                requiredProperties: {
                                    shape: "S11"
                                },
                                scope: {}
                            }
                        }
                    },
                    isAbstract: {
                        type: "boolean"
                    },
                    isSchemaInitialized: {
                        type: "boolean"
                    },
                    isSingleton: {
                        type: "boolean"
                    },
                    propertyDefinitions: {
                        type: "map",
                        key: {},
                        value: {
                            shape: "S2b"
                        }
                    },
                    status: {
                        shape: "S2c"
                    },
                    updateDateTime: {
                        type: "timestamp"
                    },
                    workspaceId: {}
                }
            },
            endpoint: {
                hostPrefix: "api."
            }
        },
        GetEntity: {
            http: {
                method: "GET",
                requestUri: "/workspaces/{workspaceId}/entities/{entityId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "entityId", "workspaceId" ],
                members: {
                    entityId: {
                        location: "uri",
                        locationName: "entityId"
                    },
                    workspaceId: {
                        location: "uri",
                        locationName: "workspaceId"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "arn", "creationDateTime", "entityId", "entityName", "hasChildEntities", "parentEntityId", "status", "updateDateTime", "workspaceId" ],
                members: {
                    arn: {},
                    components: {
                        type: "map",
                        key: {},
                        value: {
                            type: "structure",
                            members: {
                                componentName: {},
                                componentTypeId: {},
                                definedIn: {},
                                description: {},
                                properties: {
                                    type: "map",
                                    key: {},
                                    value: {
                                        type: "structure",
                                        members: {
                                            definition: {
                                                shape: "S2b"
                                            },
                                            value: {
                                                shape: "Sd"
                                            }
                                        }
                                    }
                                },
                                status: {
                                    shape: "S2c"
                                }
                            }
                        }
                    },
                    creationDateTime: {
                        type: "timestamp"
                    },
                    description: {},
                    entityId: {},
                    entityName: {},
                    hasChildEntities: {
                        type: "boolean"
                    },
                    parentEntityId: {},
                    status: {
                        shape: "S2c"
                    },
                    updateDateTime: {
                        type: "timestamp"
                    },
                    workspaceId: {}
                }
            },
            endpoint: {
                hostPrefix: "api."
            }
        },
        GetPropertyValue: {
            http: {
                requestUri: "/workspaces/{workspaceId}/entity-properties/value",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "selectedProperties", "workspaceId" ],
                members: {
                    componentName: {},
                    componentTypeId: {},
                    entityId: {},
                    selectedProperties: {
                        shape: "S2n"
                    },
                    workspaceId: {
                        location: "uri",
                        locationName: "workspaceId"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "propertyValues" ],
                members: {
                    propertyValues: {
                        type: "map",
                        key: {},
                        value: {
                            type: "structure",
                            required: [ "propertyReference" ],
                            members: {
                                propertyReference: {
                                    shape: "S4"
                                },
                                propertyValue: {
                                    shape: "Sd"
                                }
                            }
                        }
                    }
                }
            },
            endpoint: {
                hostPrefix: "data."
            }
        },
        GetPropertyValueHistory: {
            http: {
                requestUri: "/workspaces/{workspaceId}/entity-properties/history",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "selectedProperties", "workspaceId" ],
                members: {
                    componentName: {},
                    componentTypeId: {},
                    endDateTime: {
                        deprecated: true,
                        deprecatedMessage: "This field is deprecated and will throw an error in the future. Use endTime instead.",
                        type: "timestamp"
                    },
                    endTime: {},
                    entityId: {},
                    interpolation: {
                        type: "structure",
                        members: {
                            interpolationType: {},
                            intervalInSeconds: {
                                type: "long"
                            }
                        }
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {},
                    orderByTime: {},
                    propertyFilters: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                operator: {},
                                propertyName: {},
                                value: {
                                    shape: "Sd"
                                }
                            }
                        }
                    },
                    selectedProperties: {
                        shape: "S2n"
                    },
                    startDateTime: {
                        deprecated: true,
                        deprecatedMessage: "This field is deprecated and will throw an error in the future. Use startTime instead.",
                        type: "timestamp"
                    },
                    startTime: {},
                    workspaceId: {
                        location: "uri",
                        locationName: "workspaceId"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "propertyValues" ],
                members: {
                    nextToken: {},
                    propertyValues: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "entityPropertyReference" ],
                            members: {
                                entityPropertyReference: {
                                    shape: "S4"
                                },
                                values: {
                                    type: "list",
                                    member: {
                                        shape: "Sa"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            endpoint: {
                hostPrefix: "data."
            }
        },
        GetScene: {
            http: {
                method: "GET",
                requestUri: "/workspaces/{workspaceId}/scenes/{sceneId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "sceneId", "workspaceId" ],
                members: {
                    sceneId: {
                        location: "uri",
                        locationName: "sceneId"
                    },
                    workspaceId: {
                        location: "uri",
                        locationName: "workspaceId"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "arn", "contentLocation", "creationDateTime", "sceneId", "updateDateTime", "workspaceId" ],
                members: {
                    arn: {},
                    capabilities: {
                        shape: "S1q"
                    },
                    contentLocation: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    description: {},
                    sceneId: {},
                    updateDateTime: {
                        type: "timestamp"
                    },
                    workspaceId: {}
                }
            },
            endpoint: {
                hostPrefix: "api."
            }
        },
        GetWorkspace: {
            http: {
                method: "GET",
                requestUri: "/workspaces/{workspaceId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "workspaceId" ],
                members: {
                    workspaceId: {
                        location: "uri",
                        locationName: "workspaceId"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "arn", "creationDateTime", "role", "s3Location", "updateDateTime", "workspaceId" ],
                members: {
                    arn: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    description: {},
                    role: {},
                    s3Location: {},
                    updateDateTime: {
                        type: "timestamp"
                    },
                    workspaceId: {}
                }
            },
            endpoint: {
                hostPrefix: "api."
            }
        },
        ListComponentTypes: {
            http: {
                requestUri: "/workspaces/{workspaceId}/component-types-list",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "workspaceId" ],
                members: {
                    filters: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                extendsFrom: {},
                                isAbstract: {
                                    type: "boolean"
                                },
                                namespace: {}
                            },
                            union: true
                        }
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {},
                    workspaceId: {
                        location: "uri",
                        locationName: "workspaceId"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "componentTypeSummaries", "workspaceId" ],
                members: {
                    componentTypeSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "arn", "componentTypeId", "creationDateTime", "updateDateTime" ],
                            members: {
                                arn: {},
                                componentTypeId: {},
                                creationDateTime: {
                                    type: "timestamp"
                                },
                                description: {},
                                status: {
                                    shape: "S2c"
                                },
                                updateDateTime: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {},
                    workspaceId: {}
                }
            },
            endpoint: {
                hostPrefix: "api."
            }
        },
        ListEntities: {
            http: {
                requestUri: "/workspaces/{workspaceId}/entities-list",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "workspaceId" ],
                members: {
                    filters: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                componentTypeId: {},
                                externalId: {},
                                parentEntityId: {}
                            },
                            union: true
                        }
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {},
                    workspaceId: {
                        location: "uri",
                        locationName: "workspaceId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    entitySummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "arn", "creationDateTime", "entityId", "entityName", "status", "updateDateTime" ],
                            members: {
                                arn: {},
                                creationDateTime: {
                                    type: "timestamp"
                                },
                                description: {},
                                entityId: {},
                                entityName: {},
                                hasChildEntities: {
                                    type: "boolean"
                                },
                                parentEntityId: {},
                                status: {
                                    shape: "S2c"
                                },
                                updateDateTime: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            },
            endpoint: {
                hostPrefix: "api."
            }
        },
        ListScenes: {
            http: {
                requestUri: "/workspaces/{workspaceId}/scenes-list",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "workspaceId" ],
                members: {
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {},
                    workspaceId: {
                        location: "uri",
                        locationName: "workspaceId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    nextToken: {},
                    sceneSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "arn", "contentLocation", "creationDateTime", "sceneId", "updateDateTime" ],
                            members: {
                                arn: {},
                                contentLocation: {},
                                creationDateTime: {
                                    type: "timestamp"
                                },
                                description: {},
                                sceneId: {},
                                updateDateTime: {
                                    type: "timestamp"
                                }
                            }
                        }
                    }
                }
            },
            endpoint: {
                hostPrefix: "api."
            }
        },
        ListTagsForResource: {
            http: {
                requestUri: "/tags-list",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "resourceARN" ],
                members: {
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {},
                    resourceARN: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    nextToken: {},
                    tags: {
                        shape: "S1a"
                    }
                }
            },
            endpoint: {
                hostPrefix: "api."
            }
        },
        ListWorkspaces: {
            http: {
                requestUri: "/workspaces-list",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    nextToken: {},
                    workspaceSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "arn", "creationDateTime", "updateDateTime", "workspaceId" ],
                            members: {
                                arn: {},
                                creationDateTime: {
                                    type: "timestamp"
                                },
                                description: {},
                                updateDateTime: {
                                    type: "timestamp"
                                },
                                workspaceId: {}
                            }
                        }
                    }
                }
            },
            endpoint: {
                hostPrefix: "api."
            }
        },
        TagResource: {
            http: {
                requestUri: "/tags",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "resourceARN", "tags" ],
                members: {
                    resourceARN: {},
                    tags: {
                        shape: "S1a"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            endpoint: {
                hostPrefix: "api."
            }
        },
        UntagResource: {
            http: {
                method: "DELETE",
                requestUri: "/tags",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "resourceARN", "tagKeys" ],
                members: {
                    resourceARN: {
                        location: "querystring",
                        locationName: "resourceARN"
                    },
                    tagKeys: {
                        location: "querystring",
                        locationName: "tagKeys",
                        type: "list",
                        member: {}
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            endpoint: {
                hostPrefix: "api."
            }
        },
        UpdateComponentType: {
            http: {
                method: "PUT",
                requestUri: "/workspaces/{workspaceId}/component-types/{componentTypeId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "componentTypeId", "workspaceId" ],
                members: {
                    componentTypeId: {
                        location: "uri",
                        locationName: "componentTypeId"
                    },
                    description: {},
                    extendsFrom: {
                        shape: "Sv"
                    },
                    functions: {
                        shape: "Sw"
                    },
                    isSingleton: {
                        type: "boolean"
                    },
                    propertyDefinitions: {
                        shape: "S13"
                    },
                    workspaceId: {
                        location: "uri",
                        locationName: "workspaceId"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "arn", "componentTypeId", "state", "workspaceId" ],
                members: {
                    arn: {},
                    componentTypeId: {},
                    state: {},
                    workspaceId: {}
                }
            },
            endpoint: {
                hostPrefix: "api."
            }
        },
        UpdateEntity: {
            http: {
                method: "PUT",
                requestUri: "/workspaces/{workspaceId}/entities/{entityId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "entityId", "workspaceId" ],
                members: {
                    componentUpdates: {
                        type: "map",
                        key: {},
                        value: {
                            type: "structure",
                            members: {
                                componentTypeId: {},
                                description: {},
                                propertyUpdates: {
                                    shape: "S1j"
                                },
                                updateType: {}
                            }
                        }
                    },
                    description: {},
                    entityId: {
                        location: "uri",
                        locationName: "entityId"
                    },
                    entityName: {},
                    parentEntityUpdate: {
                        type: "structure",
                        required: [ "updateType" ],
                        members: {
                            parentEntityId: {},
                            updateType: {}
                        }
                    },
                    workspaceId: {
                        location: "uri",
                        locationName: "workspaceId"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "state", "updateDateTime" ],
                members: {
                    state: {},
                    updateDateTime: {
                        type: "timestamp"
                    }
                }
            },
            endpoint: {
                hostPrefix: "api."
            }
        },
        UpdateScene: {
            http: {
                method: "PUT",
                requestUri: "/workspaces/{workspaceId}/scenes/{sceneId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "sceneId", "workspaceId" ],
                members: {
                    capabilities: {
                        shape: "S1q"
                    },
                    contentLocation: {},
                    description: {},
                    sceneId: {
                        location: "uri",
                        locationName: "sceneId"
                    },
                    workspaceId: {
                        location: "uri",
                        locationName: "workspaceId"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "updateDateTime" ],
                members: {
                    updateDateTime: {
                        type: "timestamp"
                    }
                }
            },
            endpoint: {
                hostPrefix: "api."
            }
        },
        UpdateWorkspace: {
            http: {
                method: "PUT",
                requestUri: "/workspaces/{workspaceId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "workspaceId" ],
                members: {
                    description: {},
                    role: {},
                    workspaceId: {
                        location: "uri",
                        locationName: "workspaceId"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "updateDateTime" ],
                members: {
                    updateDateTime: {
                        type: "timestamp"
                    }
                }
            },
            endpoint: {
                hostPrefix: "api."
            }
        }
    },
    shapes: {
        S3: {
            type: "structure",
            required: [ "entityPropertyReference" ],
            members: {
                entityPropertyReference: {
                    shape: "S4"
                },
                propertyValues: {
                    type: "list",
                    member: {
                        shape: "Sa"
                    }
                }
            }
        },
        S4: {
            type: "structure",
            required: [ "propertyName" ],
            members: {
                componentName: {},
                entityId: {},
                externalIdProperty: {
                    type: "map",
                    key: {},
                    value: {}
                },
                propertyName: {}
            }
        },
        Sa: {
            type: "structure",
            required: [ "value" ],
            members: {
                time: {},
                timestamp: {
                    deprecated: true,
                    deprecatedMessage: "This field is deprecated and will throw an error in the future. Use time instead.",
                    type: "timestamp"
                },
                value: {
                    shape: "Sd"
                }
            }
        },
        Sd: {
            type: "structure",
            members: {
                booleanValue: {
                    type: "boolean"
                },
                doubleValue: {
                    type: "double"
                },
                expression: {},
                integerValue: {
                    type: "integer"
                },
                listValue: {
                    shape: "Si"
                },
                longValue: {
                    type: "long"
                },
                mapValue: {
                    type: "map",
                    key: {},
                    value: {
                        shape: "Sd"
                    }
                },
                relationshipValue: {
                    type: "structure",
                    members: {
                        targetComponentName: {},
                        targetEntityId: {}
                    }
                },
                stringValue: {}
            }
        },
        Si: {
            type: "list",
            member: {
                shape: "Sd"
            }
        },
        Sv: {
            type: "list",
            member: {}
        },
        Sw: {
            type: "map",
            key: {},
            value: {
                type: "structure",
                members: {
                    implementedBy: {
                        shape: "Sy"
                    },
                    requiredProperties: {
                        shape: "S11"
                    },
                    scope: {}
                }
            }
        },
        Sy: {
            type: "structure",
            members: {
                isNative: {
                    type: "boolean"
                },
                lambda: {
                    type: "structure",
                    required: [ "arn" ],
                    members: {
                        arn: {}
                    }
                }
            }
        },
        S11: {
            type: "list",
            member: {}
        },
        S13: {
            type: "map",
            key: {},
            value: {
                shape: "S14"
            }
        },
        S14: {
            type: "structure",
            members: {
                configuration: {
                    shape: "S15"
                },
                dataType: {
                    shape: "S17"
                },
                defaultValue: {
                    shape: "Sd"
                },
                isExternalId: {
                    type: "boolean"
                },
                isRequiredInEntity: {
                    type: "boolean"
                },
                isStoredExternally: {
                    type: "boolean"
                },
                isTimeSeries: {
                    type: "boolean"
                }
            }
        },
        S15: {
            type: "map",
            key: {},
            value: {}
        },
        S17: {
            type: "structure",
            required: [ "type" ],
            members: {
                allowedValues: {
                    shape: "Si"
                },
                nestedType: {
                    shape: "S17"
                },
                relationship: {
                    type: "structure",
                    members: {
                        relationshipType: {},
                        targetComponentTypeId: {}
                    }
                },
                type: {},
                unitOfMeasure: {}
            }
        },
        S1a: {
            type: "map",
            key: {},
            value: {}
        },
        S1j: {
            type: "map",
            key: {},
            value: {
                type: "structure",
                members: {
                    definition: {
                        shape: "S14"
                    },
                    updateType: {},
                    value: {
                        shape: "Sd"
                    }
                }
            }
        },
        S1q: {
            type: "list",
            member: {}
        },
        S2b: {
            type: "structure",
            required: [ "dataType", "isExternalId", "isFinal", "isImported", "isInherited", "isRequiredInEntity", "isStoredExternally", "isTimeSeries" ],
            members: {
                configuration: {
                    shape: "S15"
                },
                dataType: {
                    shape: "S17"
                },
                defaultValue: {
                    shape: "Sd"
                },
                isExternalId: {
                    type: "boolean"
                },
                isFinal: {
                    type: "boolean"
                },
                isImported: {
                    type: "boolean"
                },
                isInherited: {
                    type: "boolean"
                },
                isRequiredInEntity: {
                    type: "boolean"
                },
                isStoredExternally: {
                    type: "boolean"
                },
                isTimeSeries: {
                    type: "boolean"
                }
            }
        },
        S2c: {
            type: "structure",
            members: {
                error: {
                    type: "structure",
                    members: {
                        code: {},
                        message: {}
                    }
                },
                state: {}
            }
        },
        S2n: {
            type: "list",
            member: {}
        }
    },
    paginators: {
        GetPropertyValueHistory: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListComponentTypes: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListEntities: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListScenes: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListWorkspaces: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        }
    },
    waiters: {}
};

AWS.apiLoader.services["workspacesweb"] = {};

AWS.WorkSpacesWeb = AWS.Service.defineService("workspacesweb", [ "2020-07-08" ]);

AWS.apiLoader.services["workspacesweb"]["2020-07-08"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-07-08",
        endpointPrefix: "workspaces-web",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceFullName: "Amazon WorkSpaces Web",
        serviceId: "WorkSpaces Web",
        signatureVersion: "v4",
        signingName: "workspaces-web",
        uid: "workspaces-web-2020-07-08"
    },
    operations: {
        AssociateBrowserSettings: {
            http: {
                method: "PUT",
                requestUri: "/portals/{portalArn+}/browserSettings",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "browserSettingsArn", "portalArn" ],
                members: {
                    browserSettingsArn: {
                        location: "querystring",
                        locationName: "browserSettingsArn"
                    },
                    portalArn: {
                        location: "uri",
                        locationName: "portalArn"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "browserSettingsArn", "portalArn" ],
                members: {
                    browserSettingsArn: {},
                    portalArn: {}
                }
            },
            idempotent: true
        },
        AssociateNetworkSettings: {
            http: {
                method: "PUT",
                requestUri: "/portals/{portalArn+}/networkSettings",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "networkSettingsArn", "portalArn" ],
                members: {
                    networkSettingsArn: {
                        location: "querystring",
                        locationName: "networkSettingsArn"
                    },
                    portalArn: {
                        location: "uri",
                        locationName: "portalArn"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "networkSettingsArn", "portalArn" ],
                members: {
                    networkSettingsArn: {},
                    portalArn: {}
                }
            },
            idempotent: true
        },
        AssociateTrustStore: {
            http: {
                method: "PUT",
                requestUri: "/portals/{portalArn+}/trustStores",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "portalArn", "trustStoreArn" ],
                members: {
                    portalArn: {
                        location: "uri",
                        locationName: "portalArn"
                    },
                    trustStoreArn: {
                        location: "querystring",
                        locationName: "trustStoreArn"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "portalArn", "trustStoreArn" ],
                members: {
                    portalArn: {},
                    trustStoreArn: {}
                }
            },
            idempotent: true
        },
        AssociateUserSettings: {
            http: {
                method: "PUT",
                requestUri: "/portals/{portalArn+}/userSettings",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "portalArn", "userSettingsArn" ],
                members: {
                    portalArn: {
                        location: "uri",
                        locationName: "portalArn"
                    },
                    userSettingsArn: {
                        location: "querystring",
                        locationName: "userSettingsArn"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "portalArn", "userSettingsArn" ],
                members: {
                    portalArn: {},
                    userSettingsArn: {}
                }
            },
            idempotent: true
        },
        CreateBrowserSettings: {
            http: {
                requestUri: "/browserSettings",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "browserPolicy" ],
                members: {
                    additionalEncryptionContext: {
                        shape: "Sb"
                    },
                    browserPolicy: {},
                    clientToken: {
                        idempotencyToken: true
                    },
                    customerManagedKey: {},
                    tags: {
                        shape: "Sg"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "browserSettingsArn" ],
                members: {
                    browserSettingsArn: {}
                }
            }
        },
        CreateIdentityProvider: {
            http: {
                requestUri: "/identityProviders",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "identityProviderDetails", "identityProviderName", "identityProviderType", "portalArn" ],
                members: {
                    clientToken: {
                        idempotencyToken: true
                    },
                    identityProviderDetails: {
                        shape: "Sm"
                    },
                    identityProviderName: {},
                    identityProviderType: {},
                    portalArn: {}
                }
            },
            output: {
                type: "structure",
                required: [ "identityProviderArn" ],
                members: {
                    identityProviderArn: {}
                }
            }
        },
        CreateNetworkSettings: {
            http: {
                requestUri: "/networkSettings",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "securityGroupIds", "subnetIds", "vpcId" ],
                members: {
                    clientToken: {
                        idempotencyToken: true
                    },
                    securityGroupIds: {
                        shape: "Sr"
                    },
                    subnetIds: {
                        shape: "St"
                    },
                    tags: {
                        shape: "Sg"
                    },
                    vpcId: {}
                }
            },
            output: {
                type: "structure",
                required: [ "networkSettingsArn" ],
                members: {
                    networkSettingsArn: {}
                }
            }
        },
        CreatePortal: {
            http: {
                requestUri: "/portals",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    additionalEncryptionContext: {
                        shape: "Sb"
                    },
                    clientToken: {
                        idempotencyToken: true
                    },
                    customerManagedKey: {},
                    displayName: {},
                    tags: {
                        shape: "Sg"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "portalArn", "portalEndpoint" ],
                members: {
                    portalArn: {},
                    portalEndpoint: {}
                }
            }
        },
        CreateTrustStore: {
            http: {
                requestUri: "/trustStores",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "certificateList" ],
                members: {
                    certificateList: {
                        shape: "S12"
                    },
                    clientToken: {
                        idempotencyToken: true
                    },
                    tags: {
                        shape: "Sg"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "trustStoreArn" ],
                members: {
                    trustStoreArn: {}
                }
            }
        },
        CreateUserSettings: {
            http: {
                requestUri: "/userSettings",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "copyAllowed", "downloadAllowed", "pasteAllowed", "printAllowed", "uploadAllowed" ],
                members: {
                    clientToken: {
                        idempotencyToken: true
                    },
                    copyAllowed: {},
                    downloadAllowed: {},
                    pasteAllowed: {},
                    printAllowed: {},
                    tags: {
                        shape: "Sg"
                    },
                    uploadAllowed: {}
                }
            },
            output: {
                type: "structure",
                required: [ "userSettingsArn" ],
                members: {
                    userSettingsArn: {}
                }
            }
        },
        DeleteBrowserSettings: {
            http: {
                method: "DELETE",
                requestUri: "/browserSettings/{browserSettingsArn+}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "browserSettingsArn" ],
                members: {
                    browserSettingsArn: {
                        location: "uri",
                        locationName: "browserSettingsArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        },
        DeleteIdentityProvider: {
            http: {
                method: "DELETE",
                requestUri: "/identityProviders/{identityProviderArn+}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "identityProviderArn" ],
                members: {
                    identityProviderArn: {
                        location: "uri",
                        locationName: "identityProviderArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        },
        DeleteNetworkSettings: {
            http: {
                method: "DELETE",
                requestUri: "/networkSettings/{networkSettingsArn+}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "networkSettingsArn" ],
                members: {
                    networkSettingsArn: {
                        location: "uri",
                        locationName: "networkSettingsArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        },
        DeletePortal: {
            http: {
                method: "DELETE",
                requestUri: "/portals/{portalArn+}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "portalArn" ],
                members: {
                    portalArn: {
                        location: "uri",
                        locationName: "portalArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        },
        DeleteTrustStore: {
            http: {
                method: "DELETE",
                requestUri: "/trustStores/{trustStoreArn+}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "trustStoreArn" ],
                members: {
                    trustStoreArn: {
                        location: "uri",
                        locationName: "trustStoreArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        },
        DeleteUserSettings: {
            http: {
                method: "DELETE",
                requestUri: "/userSettings/{userSettingsArn+}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "userSettingsArn" ],
                members: {
                    userSettingsArn: {
                        location: "uri",
                        locationName: "userSettingsArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        },
        DisassociateBrowserSettings: {
            http: {
                method: "DELETE",
                requestUri: "/portals/{portalArn+}/browserSettings",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "portalArn" ],
                members: {
                    portalArn: {
                        location: "uri",
                        locationName: "portalArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        },
        DisassociateNetworkSettings: {
            http: {
                method: "DELETE",
                requestUri: "/portals/{portalArn+}/networkSettings",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "portalArn" ],
                members: {
                    portalArn: {
                        location: "uri",
                        locationName: "portalArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        },
        DisassociateTrustStore: {
            http: {
                method: "DELETE",
                requestUri: "/portals/{portalArn+}/trustStores",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "portalArn" ],
                members: {
                    portalArn: {
                        location: "uri",
                        locationName: "portalArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        },
        DisassociateUserSettings: {
            http: {
                method: "DELETE",
                requestUri: "/portals/{portalArn+}/userSettings",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "portalArn" ],
                members: {
                    portalArn: {
                        location: "uri",
                        locationName: "portalArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        },
        GetBrowserSettings: {
            http: {
                method: "GET",
                requestUri: "/browserSettings/{browserSettingsArn+}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "browserSettingsArn" ],
                members: {
                    browserSettingsArn: {
                        location: "uri",
                        locationName: "browserSettingsArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    browserSettings: {
                        shape: "S1u"
                    }
                }
            }
        },
        GetIdentityProvider: {
            http: {
                method: "GET",
                requestUri: "/identityProviders/{identityProviderArn+}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "identityProviderArn" ],
                members: {
                    identityProviderArn: {
                        location: "uri",
                        locationName: "identityProviderArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    identityProvider: {
                        shape: "S1y"
                    }
                }
            }
        },
        GetNetworkSettings: {
            http: {
                method: "GET",
                requestUri: "/networkSettings/{networkSettingsArn+}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "networkSettingsArn" ],
                members: {
                    networkSettingsArn: {
                        location: "uri",
                        locationName: "networkSettingsArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    networkSettings: {
                        shape: "S21"
                    }
                }
            }
        },
        GetPortal: {
            http: {
                method: "GET",
                requestUri: "/portals/{portalArn+}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "portalArn" ],
                members: {
                    portalArn: {
                        location: "uri",
                        locationName: "portalArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    portal: {
                        shape: "S24"
                    }
                }
            }
        },
        GetPortalServiceProviderMetadata: {
            http: {
                method: "GET",
                requestUri: "/portalIdp/{portalArn+}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "portalArn" ],
                members: {
                    portalArn: {
                        location: "uri",
                        locationName: "portalArn"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "portalArn" ],
                members: {
                    portalArn: {},
                    serviceProviderSamlMetadata: {}
                }
            }
        },
        GetTrustStore: {
            http: {
                method: "GET",
                requestUri: "/trustStores/{trustStoreArn+}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "trustStoreArn" ],
                members: {
                    trustStoreArn: {
                        location: "uri",
                        locationName: "trustStoreArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    trustStore: {
                        type: "structure",
                        members: {
                            associatedPortalArns: {
                                shape: "S1v"
                            },
                            trustStoreArn: {}
                        }
                    }
                }
            }
        },
        GetTrustStoreCertificate: {
            http: {
                method: "GET",
                requestUri: "/trustStores/{trustStoreArn+}/certificate",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "thumbprint", "trustStoreArn" ],
                members: {
                    thumbprint: {
                        location: "querystring",
                        locationName: "thumbprint"
                    },
                    trustStoreArn: {
                        location: "uri",
                        locationName: "trustStoreArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    certificate: {
                        type: "structure",
                        members: {
                            body: {
                                type: "blob"
                            },
                            issuer: {},
                            notValidAfter: {
                                type: "timestamp"
                            },
                            notValidBefore: {
                                type: "timestamp"
                            },
                            subject: {},
                            thumbprint: {}
                        }
                    },
                    trustStoreArn: {}
                }
            }
        },
        GetUserSettings: {
            http: {
                method: "GET",
                requestUri: "/userSettings/{userSettingsArn+}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "userSettingsArn" ],
                members: {
                    userSettingsArn: {
                        location: "uri",
                        locationName: "userSettingsArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    userSettings: {
                        shape: "S2n"
                    }
                }
            }
        },
        ListBrowserSettings: {
            http: {
                method: "GET",
                requestUri: "/browserSettings",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    browserSettings: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                browserSettingsArn: {}
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListIdentityProviders: {
            http: {
                method: "GET",
                requestUri: "/portals/{portalArn+}/identityProviders",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "portalArn" ],
                members: {
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    portalArn: {
                        location: "uri",
                        locationName: "portalArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    identityProviders: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                identityProviderArn: {},
                                identityProviderName: {},
                                identityProviderType: {}
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListNetworkSettings: {
            http: {
                method: "GET",
                requestUri: "/networkSettings",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    networkSettings: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                networkSettingsArn: {},
                                vpcId: {}
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListPortals: {
            http: {
                method: "GET",
                requestUri: "/portals",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    nextToken: {},
                    portals: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                browserSettingsArn: {},
                                browserType: {},
                                creationDate: {
                                    type: "timestamp"
                                },
                                displayName: {},
                                networkSettingsArn: {},
                                portalArn: {},
                                portalEndpoint: {},
                                portalStatus: {},
                                rendererType: {},
                                trustStoreArn: {},
                                userSettingsArn: {}
                            }
                        }
                    }
                }
            }
        },
        ListTagsForResource: {
            http: {
                method: "GET",
                requestUri: "/tags/{resourceArn+}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "resourceArn" ],
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    tags: {
                        shape: "Sg"
                    }
                }
            }
        },
        ListTrustStoreCertificates: {
            http: {
                method: "GET",
                requestUri: "/trustStores/{trustStoreArn+}/certificates",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "trustStoreArn" ],
                members: {
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    trustStoreArn: {
                        location: "uri",
                        locationName: "trustStoreArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    certificateList: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                issuer: {},
                                notValidAfter: {
                                    type: "timestamp"
                                },
                                notValidBefore: {
                                    type: "timestamp"
                                },
                                subject: {},
                                thumbprint: {}
                            }
                        }
                    },
                    nextToken: {},
                    trustStoreArn: {}
                }
            }
        },
        ListTrustStores: {
            http: {
                method: "GET",
                requestUri: "/trustStores",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    nextToken: {},
                    trustStores: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                trustStoreArn: {}
                            }
                        }
                    }
                }
            }
        },
        ListUserSettings: {
            http: {
                method: "GET",
                requestUri: "/userSettings",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    nextToken: {},
                    userSettings: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                copyAllowed: {},
                                downloadAllowed: {},
                                pasteAllowed: {},
                                printAllowed: {},
                                uploadAllowed: {},
                                userSettingsArn: {}
                            }
                        }
                    }
                }
            }
        },
        TagResource: {
            http: {
                requestUri: "/tags/{resourceArn+}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "resourceArn", "tags" ],
                members: {
                    clientToken: {
                        idempotencyToken: true
                    },
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    tags: {
                        shape: "Sg"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UntagResource: {
            http: {
                method: "DELETE",
                requestUri: "/tags/{resourceArn+}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "resourceArn", "tagKeys" ],
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    tagKeys: {
                        location: "querystring",
                        locationName: "tagKeys",
                        type: "list",
                        member: {}
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        },
        UpdateBrowserSettings: {
            http: {
                method: "PATCH",
                requestUri: "/browserSettings/{browserSettingsArn+}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "browserSettingsArn" ],
                members: {
                    browserPolicy: {},
                    browserSettingsArn: {
                        location: "uri",
                        locationName: "browserSettingsArn"
                    },
                    clientToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "browserSettings" ],
                members: {
                    browserSettings: {
                        shape: "S1u"
                    }
                }
            }
        },
        UpdateIdentityProvider: {
            http: {
                method: "PATCH",
                requestUri: "/identityProviders/{identityProviderArn+}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "identityProviderArn" ],
                members: {
                    clientToken: {
                        idempotencyToken: true
                    },
                    identityProviderArn: {
                        location: "uri",
                        locationName: "identityProviderArn"
                    },
                    identityProviderDetails: {
                        shape: "Sm"
                    },
                    identityProviderName: {},
                    identityProviderType: {}
                }
            },
            output: {
                type: "structure",
                required: [ "identityProvider" ],
                members: {
                    identityProvider: {
                        shape: "S1y"
                    }
                }
            }
        },
        UpdateNetworkSettings: {
            http: {
                method: "PATCH",
                requestUri: "/networkSettings/{networkSettingsArn+}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "networkSettingsArn" ],
                members: {
                    clientToken: {
                        idempotencyToken: true
                    },
                    networkSettingsArn: {
                        location: "uri",
                        locationName: "networkSettingsArn"
                    },
                    securityGroupIds: {
                        shape: "Sr"
                    },
                    subnetIds: {
                        shape: "St"
                    },
                    vpcId: {}
                }
            },
            output: {
                type: "structure",
                required: [ "networkSettings" ],
                members: {
                    networkSettings: {
                        shape: "S21"
                    }
                }
            }
        },
        UpdatePortal: {
            http: {
                method: "PUT",
                requestUri: "/portals/{portalArn+}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "portalArn" ],
                members: {
                    displayName: {},
                    portalArn: {
                        location: "uri",
                        locationName: "portalArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    portal: {
                        shape: "S24"
                    }
                }
            },
            idempotent: true
        },
        UpdateTrustStore: {
            http: {
                method: "PATCH",
                requestUri: "/trustStores/{trustStoreArn+}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "trustStoreArn" ],
                members: {
                    certificatesToAdd: {
                        shape: "S12"
                    },
                    certificatesToDelete: {
                        type: "list",
                        member: {}
                    },
                    clientToken: {
                        idempotencyToken: true
                    },
                    trustStoreArn: {
                        location: "uri",
                        locationName: "trustStoreArn"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "trustStoreArn" ],
                members: {
                    trustStoreArn: {}
                }
            }
        },
        UpdateUserSettings: {
            http: {
                method: "PATCH",
                requestUri: "/userSettings/{userSettingsArn+}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "userSettingsArn" ],
                members: {
                    clientToken: {
                        idempotencyToken: true
                    },
                    copyAllowed: {},
                    downloadAllowed: {},
                    pasteAllowed: {},
                    printAllowed: {},
                    uploadAllowed: {},
                    userSettingsArn: {
                        location: "uri",
                        locationName: "userSettingsArn"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "userSettings" ],
                members: {
                    userSettings: {
                        shape: "S2n"
                    }
                }
            }
        }
    },
    shapes: {
        Sb: {
            type: "map",
            key: {},
            value: {}
        },
        Sg: {
            type: "list",
            member: {
                type: "structure",
                required: [ "Key", "Value" ],
                members: {
                    Key: {},
                    Value: {}
                }
            }
        },
        Sm: {
            type: "map",
            key: {},
            value: {}
        },
        Sr: {
            type: "list",
            member: {}
        },
        St: {
            type: "list",
            member: {}
        },
        S12: {
            type: "list",
            member: {
                type: "blob"
            }
        },
        S1u: {
            type: "structure",
            required: [ "browserSettingsArn" ],
            members: {
                associatedPortalArns: {
                    shape: "S1v"
                },
                browserPolicy: {},
                browserSettingsArn: {}
            }
        },
        S1v: {
            type: "list",
            member: {}
        },
        S1y: {
            type: "structure",
            required: [ "identityProviderArn" ],
            members: {
                identityProviderArn: {},
                identityProviderDetails: {
                    shape: "Sm"
                },
                identityProviderName: {},
                identityProviderType: {}
            }
        },
        S21: {
            type: "structure",
            required: [ "networkSettingsArn" ],
            members: {
                associatedPortalArns: {
                    shape: "S1v"
                },
                networkSettingsArn: {},
                securityGroupIds: {
                    shape: "Sr"
                },
                subnetIds: {
                    shape: "St"
                },
                vpcId: {}
            }
        },
        S24: {
            type: "structure",
            members: {
                browserSettingsArn: {},
                browserType: {},
                creationDate: {
                    type: "timestamp"
                },
                displayName: {},
                networkSettingsArn: {},
                portalArn: {},
                portalEndpoint: {},
                portalStatus: {},
                rendererType: {},
                statusReason: {},
                trustStoreArn: {},
                userSettingsArn: {}
            }
        },
        S2n: {
            type: "structure",
            required: [ "userSettingsArn" ],
            members: {
                associatedPortalArns: {
                    shape: "S1v"
                },
                copyAllowed: {},
                downloadAllowed: {},
                pasteAllowed: {},
                printAllowed: {},
                uploadAllowed: {},
                userSettingsArn: {}
            }
        }
    },
    paginators: {
        ListBrowserSettings: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListIdentityProviders: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListNetworkSettings: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListPortals: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListTrustStoreCertificates: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListTrustStores: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListUserSettings: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        }
    }
};

AWS.apiLoader.services["amplifyuibuilder"] = {};

AWS.AmplifyUIBuilder = AWS.Service.defineService("amplifyuibuilder", [ "2021-08-11" ]);

AWS.apiLoader.services["amplifyuibuilder"]["2021-08-11"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2021-08-11",
        endpointPrefix: "amplifyuibuilder",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceFullName: "AWS Amplify UI Builder",
        serviceId: "AmplifyUIBuilder",
        signatureVersion: "v4",
        signingName: "amplifyuibuilder",
        uid: "amplifyuibuilder-2021-08-11"
    },
    operations: {
        CreateComponent: {
            http: {
                requestUri: "/app/{appId}/environment/{environmentName}/components",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "appId", "componentToCreate", "environmentName" ],
                members: {
                    appId: {
                        location: "uri",
                        locationName: "appId"
                    },
                    clientToken: {
                        idempotencyToken: true,
                        location: "querystring",
                        locationName: "clientToken"
                    },
                    componentToCreate: {
                        type: "structure",
                        required: [ "bindingProperties", "componentType", "name", "overrides", "properties", "variants" ],
                        members: {
                            bindingProperties: {
                                shape: "S4"
                            },
                            children: {
                                shape: "S9"
                            },
                            collectionProperties: {
                                shape: "Sn"
                            },
                            componentType: {},
                            events: {
                                shape: "Sb"
                            },
                            name: {},
                            overrides: {
                                shape: "Sv"
                            },
                            properties: {
                                shape: "Sl"
                            },
                            schemaVersion: {},
                            sourceId: {},
                            tags: {
                                shape: "Sx"
                            },
                            variants: {
                                shape: "S10"
                            }
                        }
                    },
                    environmentName: {
                        location: "uri",
                        locationName: "environmentName"
                    }
                },
                payload: "componentToCreate"
            },
            output: {
                type: "structure",
                members: {
                    entity: {
                        shape: "S14"
                    }
                },
                payload: "entity"
            },
            idempotent: true
        },
        CreateTheme: {
            http: {
                requestUri: "/app/{appId}/environment/{environmentName}/themes",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "appId", "environmentName", "themeToCreate" ],
                members: {
                    appId: {
                        location: "uri",
                        locationName: "appId"
                    },
                    clientToken: {
                        idempotencyToken: true,
                        location: "querystring",
                        locationName: "clientToken"
                    },
                    environmentName: {
                        location: "uri",
                        locationName: "environmentName"
                    },
                    themeToCreate: {
                        type: "structure",
                        required: [ "name", "values" ],
                        members: {
                            name: {},
                            overrides: {
                                shape: "S1a"
                            },
                            tags: {
                                shape: "Sx"
                            },
                            values: {
                                shape: "S1a"
                            }
                        }
                    }
                },
                payload: "themeToCreate"
            },
            output: {
                type: "structure",
                members: {
                    entity: {
                        shape: "S1e"
                    }
                },
                payload: "entity"
            },
            idempotent: true
        },
        DeleteComponent: {
            http: {
                method: "DELETE",
                requestUri: "/app/{appId}/environment/{environmentName}/components/{id}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "appId", "environmentName", "id" ],
                members: {
                    appId: {
                        location: "uri",
                        locationName: "appId"
                    },
                    environmentName: {
                        location: "uri",
                        locationName: "environmentName"
                    },
                    id: {
                        location: "uri",
                        locationName: "id"
                    }
                }
            },
            idempotent: true
        },
        DeleteTheme: {
            http: {
                method: "DELETE",
                requestUri: "/app/{appId}/environment/{environmentName}/themes/{id}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "appId", "environmentName", "id" ],
                members: {
                    appId: {
                        location: "uri",
                        locationName: "appId"
                    },
                    environmentName: {
                        location: "uri",
                        locationName: "environmentName"
                    },
                    id: {
                        location: "uri",
                        locationName: "id"
                    }
                }
            },
            idempotent: true
        },
        ExchangeCodeForToken: {
            http: {
                requestUri: "/tokens/{provider}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "provider", "request" ],
                members: {
                    provider: {
                        location: "uri",
                        locationName: "provider"
                    },
                    request: {
                        type: "structure",
                        required: [ "code", "redirectUri" ],
                        members: {
                            code: {
                                shape: "S1k"
                            },
                            redirectUri: {}
                        }
                    }
                },
                payload: "request"
            },
            output: {
                type: "structure",
                required: [ "accessToken", "expiresIn", "refreshToken" ],
                members: {
                    accessToken: {
                        shape: "S1k"
                    },
                    expiresIn: {
                        type: "integer"
                    },
                    refreshToken: {
                        shape: "S1k"
                    }
                }
            }
        },
        ExportComponents: {
            http: {
                method: "GET",
                requestUri: "/export/app/{appId}/environment/{environmentName}/components",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "appId", "environmentName" ],
                members: {
                    appId: {
                        location: "uri",
                        locationName: "appId"
                    },
                    environmentName: {
                        location: "uri",
                        locationName: "environmentName"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "entities" ],
                members: {
                    entities: {
                        type: "list",
                        member: {
                            shape: "S14"
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ExportThemes: {
            http: {
                method: "GET",
                requestUri: "/export/app/{appId}/environment/{environmentName}/themes",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "appId", "environmentName" ],
                members: {
                    appId: {
                        location: "uri",
                        locationName: "appId"
                    },
                    environmentName: {
                        location: "uri",
                        locationName: "environmentName"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "entities" ],
                members: {
                    entities: {
                        type: "list",
                        member: {
                            shape: "S1e"
                        }
                    },
                    nextToken: {}
                }
            }
        },
        GetComponent: {
            http: {
                method: "GET",
                requestUri: "/app/{appId}/environment/{environmentName}/components/{id}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "appId", "environmentName", "id" ],
                members: {
                    appId: {
                        location: "uri",
                        locationName: "appId"
                    },
                    environmentName: {
                        location: "uri",
                        locationName: "environmentName"
                    },
                    id: {
                        location: "uri",
                        locationName: "id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    component: {
                        shape: "S14"
                    }
                },
                payload: "component"
            }
        },
        GetTheme: {
            http: {
                method: "GET",
                requestUri: "/app/{appId}/environment/{environmentName}/themes/{id}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "appId", "environmentName", "id" ],
                members: {
                    appId: {
                        location: "uri",
                        locationName: "appId"
                    },
                    environmentName: {
                        location: "uri",
                        locationName: "environmentName"
                    },
                    id: {
                        location: "uri",
                        locationName: "id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    theme: {
                        shape: "S1e"
                    }
                },
                payload: "theme"
            }
        },
        ListComponents: {
            http: {
                method: "GET",
                requestUri: "/app/{appId}/environment/{environmentName}/components",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "appId", "environmentName" ],
                members: {
                    appId: {
                        location: "uri",
                        locationName: "appId"
                    },
                    environmentName: {
                        location: "uri",
                        locationName: "environmentName"
                    },
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "entities" ],
                members: {
                    entities: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "appId", "componentType", "environmentName", "id", "name" ],
                            members: {
                                appId: {},
                                componentType: {},
                                environmentName: {},
                                id: {},
                                name: {}
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListThemes: {
            http: {
                method: "GET",
                requestUri: "/app/{appId}/environment/{environmentName}/themes",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "appId", "environmentName" ],
                members: {
                    appId: {
                        location: "uri",
                        locationName: "appId"
                    },
                    environmentName: {
                        location: "uri",
                        locationName: "environmentName"
                    },
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "entities" ],
                members: {
                    entities: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "appId", "environmentName", "id", "name" ],
                            members: {
                                appId: {},
                                environmentName: {},
                                id: {},
                                name: {}
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        RefreshToken: {
            http: {
                requestUri: "/tokens/{provider}/refresh",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "provider", "refreshTokenBody" ],
                members: {
                    provider: {
                        location: "uri",
                        locationName: "provider"
                    },
                    refreshTokenBody: {
                        type: "structure",
                        required: [ "token" ],
                        members: {
                            token: {
                                shape: "S1k"
                            }
                        }
                    }
                },
                payload: "refreshTokenBody"
            },
            output: {
                type: "structure",
                required: [ "accessToken", "expiresIn" ],
                members: {
                    accessToken: {
                        shape: "S1k"
                    },
                    expiresIn: {
                        type: "integer"
                    }
                }
            }
        },
        UpdateComponent: {
            http: {
                method: "PATCH",
                requestUri: "/app/{appId}/environment/{environmentName}/components/{id}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "appId", "environmentName", "id", "updatedComponent" ],
                members: {
                    appId: {
                        location: "uri",
                        locationName: "appId"
                    },
                    clientToken: {
                        idempotencyToken: true,
                        location: "querystring",
                        locationName: "clientToken"
                    },
                    environmentName: {
                        location: "uri",
                        locationName: "environmentName"
                    },
                    id: {
                        location: "uri",
                        locationName: "id"
                    },
                    updatedComponent: {
                        type: "structure",
                        members: {
                            bindingProperties: {
                                shape: "S4"
                            },
                            children: {
                                shape: "S9"
                            },
                            collectionProperties: {
                                shape: "Sn"
                            },
                            componentType: {},
                            events: {
                                shape: "Sb"
                            },
                            id: {},
                            name: {},
                            overrides: {
                                shape: "Sv"
                            },
                            properties: {
                                shape: "Sl"
                            },
                            schemaVersion: {},
                            sourceId: {},
                            variants: {
                                shape: "S10"
                            }
                        }
                    }
                },
                payload: "updatedComponent"
            },
            output: {
                type: "structure",
                members: {
                    entity: {
                        shape: "S14"
                    }
                },
                payload: "entity"
            },
            idempotent: true
        },
        UpdateTheme: {
            http: {
                method: "PATCH",
                requestUri: "/app/{appId}/environment/{environmentName}/themes/{id}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "appId", "environmentName", "id", "updatedTheme" ],
                members: {
                    appId: {
                        location: "uri",
                        locationName: "appId"
                    },
                    clientToken: {
                        idempotencyToken: true,
                        location: "querystring",
                        locationName: "clientToken"
                    },
                    environmentName: {
                        location: "uri",
                        locationName: "environmentName"
                    },
                    id: {
                        location: "uri",
                        locationName: "id"
                    },
                    updatedTheme: {
                        type: "structure",
                        required: [ "values" ],
                        members: {
                            id: {},
                            name: {},
                            overrides: {
                                shape: "S1a"
                            },
                            values: {
                                shape: "S1a"
                            }
                        }
                    }
                },
                payload: "updatedTheme"
            },
            output: {
                type: "structure",
                members: {
                    entity: {
                        shape: "S1e"
                    }
                },
                payload: "entity"
            },
            idempotent: true
        }
    },
    shapes: {
        S4: {
            type: "map",
            key: {},
            value: {
                type: "structure",
                members: {
                    bindingProperties: {
                        type: "structure",
                        members: {
                            bucket: {},
                            defaultValue: {},
                            field: {},
                            key: {},
                            model: {},
                            predicates: {
                                shape: "S7"
                            },
                            userAttribute: {}
                        }
                    },
                    defaultValue: {},
                    type: {}
                }
            }
        },
        S7: {
            type: "list",
            member: {
                shape: "S8"
            }
        },
        S8: {
            type: "structure",
            members: {
                and: {
                    shape: "S7"
                },
                field: {},
                operand: {},
                operator: {},
                or: {
                    shape: "S7"
                }
            }
        },
        S9: {
            type: "list",
            member: {
                type: "structure",
                required: [ "componentType", "name", "properties" ],
                members: {
                    children: {
                        shape: "S9"
                    },
                    componentType: {},
                    events: {
                        shape: "Sb"
                    },
                    name: {},
                    properties: {
                        shape: "Sl"
                    },
                    sourceId: {}
                }
            }
        },
        Sb: {
            type: "map",
            key: {},
            value: {
                type: "structure",
                members: {
                    action: {},
                    bindingEvent: {},
                    parameters: {
                        type: "structure",
                        members: {
                            anchor: {
                                shape: "Se"
                            },
                            fields: {
                                shape: "Sl"
                            },
                            global: {
                                shape: "Se"
                            },
                            id: {
                                shape: "Se"
                            },
                            model: {},
                            state: {
                                type: "structure",
                                required: [ "componentName", "property", "set" ],
                                members: {
                                    componentName: {},
                                    property: {},
                                    set: {
                                        shape: "Se"
                                    }
                                }
                            },
                            target: {
                                shape: "Se"
                            },
                            type: {
                                shape: "Se"
                            },
                            url: {
                                shape: "Se"
                            }
                        }
                    }
                }
            }
        },
        Se: {
            type: "structure",
            members: {
                bindingProperties: {
                    shape: "Sf"
                },
                bindings: {
                    type: "map",
                    key: {},
                    value: {
                        type: "structure",
                        required: [ "element", "property" ],
                        members: {
                            element: {},
                            property: {}
                        }
                    }
                },
                collectionBindingProperties: {
                    shape: "Sf"
                },
                componentName: {},
                concat: {
                    type: "list",
                    member: {
                        shape: "Se"
                    }
                },
                condition: {
                    type: "structure",
                    members: {
                        else: {
                            shape: "Se"
                        },
                        field: {},
                        operand: {},
                        operandType: {},
                        operator: {},
                        property: {},
                        then: {
                            shape: "Se"
                        }
                    }
                },
                configured: {
                    type: "boolean"
                },
                defaultValue: {},
                event: {},
                importedValue: {},
                model: {},
                property: {},
                type: {},
                userAttribute: {},
                value: {}
            }
        },
        Sf: {
            type: "structure",
            required: [ "property" ],
            members: {
                field: {},
                property: {}
            }
        },
        Sl: {
            type: "map",
            key: {},
            value: {
                shape: "Se"
            }
        },
        Sn: {
            type: "map",
            key: {},
            value: {
                type: "structure",
                required: [ "model" ],
                members: {
                    identifiers: {
                        type: "list",
                        member: {}
                    },
                    model: {},
                    predicate: {
                        shape: "S8"
                    },
                    sort: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "direction", "field" ],
                            members: {
                                direction: {},
                                field: {}
                            }
                        }
                    }
                }
            }
        },
        Sv: {
            type: "map",
            key: {},
            value: {
                type: "map",
                key: {},
                value: {}
            }
        },
        Sx: {
            type: "map",
            key: {},
            value: {}
        },
        S10: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    overrides: {
                        shape: "Sv"
                    },
                    variantValues: {
                        type: "map",
                        key: {},
                        value: {}
                    }
                }
            }
        },
        S14: {
            type: "structure",
            required: [ "appId", "bindingProperties", "componentType", "createdAt", "environmentName", "id", "name", "overrides", "properties", "variants" ],
            members: {
                appId: {},
                bindingProperties: {
                    shape: "S4"
                },
                children: {
                    shape: "S9"
                },
                collectionProperties: {
                    shape: "Sn"
                },
                componentType: {},
                createdAt: {
                    shape: "S15"
                },
                environmentName: {},
                events: {
                    shape: "Sb"
                },
                id: {},
                modifiedAt: {
                    shape: "S15"
                },
                name: {},
                overrides: {
                    shape: "Sv"
                },
                properties: {
                    shape: "Sl"
                },
                schemaVersion: {},
                sourceId: {},
                tags: {
                    shape: "Sx"
                },
                variants: {
                    shape: "S10"
                }
            }
        },
        S15: {
            type: "timestamp",
            timestampFormat: "iso8601"
        },
        S1a: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    key: {},
                    value: {
                        type: "structure",
                        members: {
                            children: {
                                shape: "S1a"
                            },
                            value: {}
                        }
                    }
                }
            }
        },
        S1e: {
            type: "structure",
            required: [ "appId", "createdAt", "environmentName", "id", "name", "values" ],
            members: {
                appId: {},
                createdAt: {
                    shape: "S15"
                },
                environmentName: {},
                id: {},
                modifiedAt: {
                    shape: "S15"
                },
                name: {},
                overrides: {
                    shape: "S1a"
                },
                tags: {
                    shape: "Sx"
                },
                values: {
                    shape: "S1a"
                }
            }
        },
        S1k: {
            type: "string",
            sensitive: true
        }
    },
    paginators: {
        ExportComponents: {
            input_token: "nextToken",
            output_token: "nextToken",
            result_key: "entities"
        },
        ExportThemes: {
            input_token: "nextToken",
            output_token: "nextToken",
            result_key: "entities"
        },
        ListComponents: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "entities"
        },
        ListThemes: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "entities"
        }
    }
};

AWS.apiLoader.services["keyspaces"] = {};

AWS.Keyspaces = AWS.Service.defineService("keyspaces", [ "2022-02-10" ]);

AWS.apiLoader.services["keyspaces"]["2022-02-10"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2022-02-10",
        endpointPrefix: "cassandra",
        jsonVersion: "1.0",
        protocol: "json",
        serviceFullName: "Amazon Keyspaces",
        serviceId: "Keyspaces",
        signatureVersion: "v4",
        signingName: "cassandra",
        targetPrefix: "KeyspacesService",
        uid: "keyspaces-2022-02-10"
    },
    operations: {
        CreateKeyspace: {
            input: {
                type: "structure",
                required: [ "keyspaceName" ],
                members: {
                    keyspaceName: {},
                    tags: {
                        shape: "S3"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "resourceArn" ],
                members: {
                    resourceArn: {}
                }
            }
        },
        CreateTable: {
            input: {
                type: "structure",
                required: [ "keyspaceName", "tableName", "schemaDefinition" ],
                members: {
                    keyspaceName: {},
                    tableName: {},
                    schemaDefinition: {
                        shape: "Sb"
                    },
                    comment: {
                        shape: "Sm"
                    },
                    capacitySpecification: {
                        shape: "So"
                    },
                    encryptionSpecification: {
                        shape: "Sr"
                    },
                    pointInTimeRecovery: {
                        shape: "Su"
                    },
                    ttl: {
                        shape: "Sw"
                    },
                    defaultTimeToLive: {
                        type: "integer"
                    },
                    tags: {
                        shape: "S3"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "resourceArn" ],
                members: {
                    resourceArn: {}
                }
            }
        },
        DeleteKeyspace: {
            input: {
                type: "structure",
                required: [ "keyspaceName" ],
                members: {
                    keyspaceName: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DeleteTable: {
            input: {
                type: "structure",
                required: [ "keyspaceName", "tableName" ],
                members: {
                    keyspaceName: {},
                    tableName: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        GetKeyspace: {
            input: {
                type: "structure",
                required: [ "keyspaceName" ],
                members: {
                    keyspaceName: {}
                }
            },
            output: {
                type: "structure",
                required: [ "keyspaceName", "resourceArn" ],
                members: {
                    keyspaceName: {},
                    resourceArn: {}
                }
            }
        },
        GetTable: {
            input: {
                type: "structure",
                required: [ "keyspaceName", "tableName" ],
                members: {
                    keyspaceName: {},
                    tableName: {}
                }
            },
            output: {
                type: "structure",
                required: [ "keyspaceName", "tableName", "resourceArn" ],
                members: {
                    keyspaceName: {},
                    tableName: {},
                    resourceArn: {},
                    creationTimestamp: {
                        type: "timestamp"
                    },
                    status: {},
                    schemaDefinition: {
                        shape: "Sb"
                    },
                    capacitySpecification: {
                        type: "structure",
                        required: [ "throughputMode" ],
                        members: {
                            throughputMode: {},
                            readCapacityUnits: {
                                type: "long"
                            },
                            writeCapacityUnits: {
                                type: "long"
                            },
                            lastUpdateToPayPerRequestTimestamp: {
                                type: "timestamp"
                            }
                        }
                    },
                    encryptionSpecification: {
                        shape: "Sr"
                    },
                    pointInTimeRecovery: {
                        type: "structure",
                        required: [ "status" ],
                        members: {
                            status: {},
                            earliestRestorableTimestamp: {
                                type: "timestamp"
                            }
                        }
                    },
                    ttl: {
                        shape: "Sw"
                    },
                    defaultTimeToLive: {
                        type: "integer"
                    },
                    comment: {
                        shape: "Sm"
                    }
                }
            }
        },
        ListKeyspaces: {
            input: {
                type: "structure",
                members: {
                    nextToken: {},
                    maxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "keyspaces" ],
                members: {
                    nextToken: {},
                    keyspaces: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "keyspaceName", "resourceArn" ],
                            members: {
                                keyspaceName: {},
                                resourceArn: {}
                            }
                        }
                    }
                }
            }
        },
        ListTables: {
            input: {
                type: "structure",
                required: [ "keyspaceName" ],
                members: {
                    nextToken: {},
                    maxResults: {
                        type: "integer"
                    },
                    keyspaceName: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    nextToken: {},
                    tables: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "keyspaceName", "tableName", "resourceArn" ],
                            members: {
                                keyspaceName: {},
                                tableName: {},
                                resourceArn: {}
                            }
                        }
                    }
                }
            }
        },
        ListTagsForResource: {
            input: {
                type: "structure",
                required: [ "resourceArn" ],
                members: {
                    resourceArn: {},
                    nextToken: {},
                    maxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    nextToken: {},
                    tags: {
                        shape: "S3"
                    }
                }
            }
        },
        RestoreTable: {
            input: {
                type: "structure",
                required: [ "sourceKeyspaceName", "sourceTableName", "targetKeyspaceName", "targetTableName" ],
                members: {
                    sourceKeyspaceName: {},
                    sourceTableName: {},
                    targetKeyspaceName: {},
                    targetTableName: {},
                    restoreTimestamp: {
                        type: "timestamp"
                    },
                    capacitySpecificationOverride: {
                        shape: "So"
                    },
                    encryptionSpecificationOverride: {
                        shape: "Sr"
                    },
                    pointInTimeRecoveryOverride: {
                        shape: "Su"
                    },
                    tagsOverride: {
                        shape: "S3"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "restoredTableARN" ],
                members: {
                    restoredTableARN: {}
                }
            }
        },
        TagResource: {
            input: {
                type: "structure",
                required: [ "resourceArn", "tags" ],
                members: {
                    resourceArn: {},
                    tags: {
                        shape: "S3"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UntagResource: {
            input: {
                type: "structure",
                required: [ "resourceArn", "tags" ],
                members: {
                    resourceArn: {},
                    tags: {
                        shape: "S3"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UpdateTable: {
            input: {
                type: "structure",
                required: [ "keyspaceName", "tableName" ],
                members: {
                    keyspaceName: {},
                    tableName: {},
                    addColumns: {
                        shape: "Sc"
                    },
                    capacitySpecification: {
                        shape: "So"
                    },
                    encryptionSpecification: {
                        shape: "Sr"
                    },
                    pointInTimeRecovery: {
                        shape: "Su"
                    },
                    ttl: {
                        shape: "Sw"
                    },
                    defaultTimeToLive: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "resourceArn" ],
                members: {
                    resourceArn: {}
                }
            }
        }
    },
    shapes: {
        S3: {
            type: "list",
            member: {
                type: "structure",
                required: [ "key", "value" ],
                members: {
                    key: {},
                    value: {}
                }
            }
        },
        Sb: {
            type: "structure",
            required: [ "allColumns", "partitionKeys" ],
            members: {
                allColumns: {
                    shape: "Sc"
                },
                partitionKeys: {
                    type: "list",
                    member: {
                        type: "structure",
                        required: [ "name" ],
                        members: {
                            name: {}
                        }
                    }
                },
                clusteringKeys: {
                    type: "list",
                    member: {
                        type: "structure",
                        required: [ "name", "orderBy" ],
                        members: {
                            name: {},
                            orderBy: {}
                        }
                    }
                },
                staticColumns: {
                    type: "list",
                    member: {
                        type: "structure",
                        required: [ "name" ],
                        members: {
                            name: {}
                        }
                    }
                }
            }
        },
        Sc: {
            type: "list",
            member: {
                type: "structure",
                required: [ "name", "type" ],
                members: {
                    name: {},
                    type: {}
                }
            }
        },
        Sm: {
            type: "structure",
            required: [ "message" ],
            members: {
                message: {}
            }
        },
        So: {
            type: "structure",
            required: [ "throughputMode" ],
            members: {
                throughputMode: {},
                readCapacityUnits: {
                    type: "long"
                },
                writeCapacityUnits: {
                    type: "long"
                }
            }
        },
        Sr: {
            type: "structure",
            required: [ "type" ],
            members: {
                type: {},
                kmsKeyIdentifier: {}
            }
        },
        Su: {
            type: "structure",
            required: [ "status" ],
            members: {
                status: {}
            }
        },
        Sw: {
            type: "structure",
            required: [ "status" ],
            members: {
                status: {}
            }
        }
    },
    paginators: {
        ListKeyspaces: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "keyspaces"
        },
        ListTables: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "tables"
        },
        ListTagsForResource: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "tags"
        }
    },
    waiters: {}
};

AWS.apiLoader.services["billingconductor"] = {};

AWS.Billingconductor = AWS.Service.defineService("billingconductor", [ "2021-07-30" ]);

AWS.apiLoader.services["billingconductor"]["2021-07-30"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2021-07-30",
        endpointPrefix: "billingconductor",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceFullName: "AWSBillingConductor",
        serviceId: "billingconductor",
        signatureVersion: "v4",
        signingName: "billingconductor",
        uid: "billingconductor-2021-07-30"
    },
    operations: {
        AssociateAccounts: {
            http: {
                requestUri: "/associate-accounts",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "Arn", "AccountIds" ],
                members: {
                    Arn: {},
                    AccountIds: {
                        shape: "S3"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Arn: {}
                }
            },
            idempotent: true
        },
        AssociatePricingRules: {
            http: {
                method: "PUT",
                requestUri: "/associate-pricing-rules",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "Arn", "PricingRuleArns" ],
                members: {
                    Arn: {},
                    PricingRuleArns: {
                        shape: "S8"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Arn: {}
                }
            },
            idempotent: true
        },
        BatchAssociateResourcesToCustomLineItem: {
            http: {
                method: "PUT",
                requestUri: "/batch-associate-resources-to-custom-line-item",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "TargetArn", "ResourceArns" ],
                members: {
                    TargetArn: {},
                    ResourceArns: {
                        type: "list",
                        member: {}
                    },
                    BillingPeriodRange: {
                        shape: "Sf"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    SuccessfullyAssociatedResources: {
                        shape: "Si"
                    },
                    FailedAssociatedResources: {
                        shape: "Si"
                    }
                }
            },
            idempotent: true
        },
        BatchDisassociateResourcesFromCustomLineItem: {
            http: {
                method: "PUT",
                requestUri: "/batch-disassociate-resources-from-custom-line-item",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "TargetArn", "ResourceArns" ],
                members: {
                    TargetArn: {},
                    ResourceArns: {
                        type: "list",
                        member: {}
                    },
                    BillingPeriodRange: {
                        shape: "Sf"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    SuccessfullyDisassociatedResources: {
                        shape: "Sq"
                    },
                    FailedDisassociatedResources: {
                        shape: "Sq"
                    }
                }
            },
            idempotent: true
        },
        CreateBillingGroup: {
            http: {
                requestUri: "/create-billing-group",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "Name", "AccountGrouping", "ComputationPreference" ],
                members: {
                    ClientToken: {
                        idempotencyToken: true,
                        location: "header",
                        locationName: "X-Amzn-Client-Token"
                    },
                    Name: {
                        shape: "Su"
                    },
                    AccountGrouping: {
                        type: "structure",
                        required: [ "LinkedAccountIds" ],
                        members: {
                            LinkedAccountIds: {
                                shape: "S3"
                            }
                        }
                    },
                    ComputationPreference: {
                        shape: "Sw"
                    },
                    PrimaryAccountId: {},
                    Description: {
                        shape: "Sy"
                    },
                    Tags: {
                        shape: "Sz"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Arn: {}
                }
            },
            idempotent: true
        },
        CreateCustomLineItem: {
            http: {
                requestUri: "/create-custom-line-item",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "Name", "Description", "BillingGroupArn", "ChargeDetails" ],
                members: {
                    ClientToken: {
                        idempotencyToken: true,
                        location: "header",
                        locationName: "X-Amzn-Client-Token"
                    },
                    Name: {
                        shape: "S14"
                    },
                    Description: {
                        shape: "S15"
                    },
                    BillingGroupArn: {},
                    BillingPeriodRange: {
                        shape: "Sf"
                    },
                    Tags: {
                        shape: "Sz"
                    },
                    ChargeDetails: {
                        type: "structure",
                        required: [ "Type" ],
                        members: {
                            Flat: {
                                type: "structure",
                                required: [ "ChargeValue" ],
                                members: {
                                    ChargeValue: {
                                        type: "double"
                                    }
                                }
                            },
                            Percentage: {
                                type: "structure",
                                required: [ "PercentageValue" ],
                                members: {
                                    PercentageValue: {
                                        type: "double"
                                    },
                                    AssociatedValues: {
                                        type: "list",
                                        member: {}
                                    }
                                }
                            },
                            Type: {}
                        }
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Arn: {}
                }
            }
        },
        CreatePricingPlan: {
            http: {
                requestUri: "/create-pricing-plan",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "Name" ],
                members: {
                    ClientToken: {
                        idempotencyToken: true,
                        location: "header",
                        locationName: "X-Amzn-Client-Token"
                    },
                    Name: {
                        shape: "S1f"
                    },
                    Description: {
                        shape: "S1g"
                    },
                    PricingRuleArns: {
                        type: "list",
                        member: {}
                    },
                    Tags: {
                        shape: "Sz"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Arn: {}
                }
            },
            idempotent: true
        },
        CreatePricingRule: {
            http: {
                requestUri: "/create-pricing-rule",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "Name", "Scope", "Type", "ModifierPercentage" ],
                members: {
                    ClientToken: {
                        idempotencyToken: true,
                        location: "header",
                        locationName: "X-Amzn-Client-Token"
                    },
                    Name: {
                        shape: "S1k"
                    },
                    Description: {
                        shape: "S1l"
                    },
                    Scope: {},
                    Type: {},
                    ModifierPercentage: {
                        type: "double"
                    },
                    Service: {},
                    Tags: {
                        shape: "Sz"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Arn: {}
                }
            },
            idempotent: true
        },
        DeleteBillingGroup: {
            http: {
                requestUri: "/delete-billing-group",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "Arn" ],
                members: {
                    Arn: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    Arn: {}
                }
            },
            idempotent: true
        },
        DeleteCustomLineItem: {
            http: {
                requestUri: "/delete-custom-line-item",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "Arn" ],
                members: {
                    Arn: {},
                    BillingPeriodRange: {
                        shape: "Sf"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Arn: {}
                }
            },
            idempotent: true
        },
        DeletePricingPlan: {
            http: {
                requestUri: "/delete-pricing-plan",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "Arn" ],
                members: {
                    Arn: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    Arn: {}
                }
            },
            idempotent: true
        },
        DeletePricingRule: {
            http: {
                requestUri: "/delete-pricing-rule",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "Arn" ],
                members: {
                    Arn: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    Arn: {}
                }
            },
            idempotent: true
        },
        DisassociateAccounts: {
            http: {
                requestUri: "/disassociate-accounts",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "Arn", "AccountIds" ],
                members: {
                    Arn: {},
                    AccountIds: {
                        shape: "S3"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Arn: {}
                }
            },
            idempotent: true
        },
        DisassociatePricingRules: {
            http: {
                method: "PUT",
                requestUri: "/disassociate-pricing-rules",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "Arn", "PricingRuleArns" ],
                members: {
                    Arn: {},
                    PricingRuleArns: {
                        shape: "S8"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Arn: {}
                }
            },
            idempotent: true
        },
        ListAccountAssociations: {
            http: {
                requestUri: "/list-account-associations",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    BillingPeriod: {},
                    Filters: {
                        type: "structure",
                        members: {
                            Association: {},
                            AccountId: {}
                        }
                    },
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    LinkedAccounts: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                AccountId: {},
                                BillingGroupArn: {},
                                AccountName: {
                                    type: "string",
                                    sensitive: true
                                },
                                AccountEmail: {
                                    type: "string",
                                    sensitive: true
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListBillingGroupCostReports: {
            http: {
                requestUri: "/list-billing-group-cost-reports",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    BillingPeriod: {},
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {},
                    Filters: {
                        type: "structure",
                        members: {
                            BillingGroupArns: {
                                shape: "S2f"
                            }
                        }
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    BillingGroupCostReports: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Arn: {},
                                AWSCost: {},
                                ProformaCost: {},
                                Margin: {},
                                MarginPercentage: {},
                                Currency: {}
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListBillingGroups: {
            http: {
                requestUri: "/list-billing-groups",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    BillingPeriod: {},
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {},
                    Filters: {
                        type: "structure",
                        members: {
                            Arns: {
                                shape: "S2f"
                            },
                            PricingPlan: {}
                        }
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    BillingGroups: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Name: {
                                    shape: "Su"
                                },
                                Arn: {},
                                Description: {
                                    shape: "Sy"
                                },
                                PrimaryAccountId: {},
                                ComputationPreference: {
                                    shape: "Sw"
                                },
                                Size: {
                                    type: "long"
                                },
                                CreationTime: {
                                    type: "long"
                                },
                                LastModifiedTime: {
                                    type: "long"
                                },
                                Status: {},
                                StatusReason: {}
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListCustomLineItems: {
            http: {
                requestUri: "/list-custom-line-items",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    BillingPeriod: {},
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {},
                    Filters: {
                        type: "structure",
                        members: {
                            Names: {
                                type: "list",
                                member: {
                                    shape: "S14"
                                }
                            },
                            BillingGroups: {
                                shape: "S2f"
                            },
                            Arns: {
                                type: "list",
                                member: {}
                            }
                        }
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    CustomLineItems: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Arn: {},
                                Name: {
                                    shape: "S14"
                                },
                                ChargeDetails: {
                                    shape: "S34"
                                },
                                CurrencyCode: {},
                                Description: {
                                    shape: "S15"
                                },
                                ProductCode: {},
                                BillingGroupArn: {},
                                CreationTime: {
                                    type: "long"
                                },
                                LastModifiedTime: {
                                    type: "long"
                                },
                                AssociationSize: {
                                    type: "long"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListPricingPlans: {
            http: {
                requestUri: "/list-pricing-plans",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    BillingPeriod: {},
                    Filters: {
                        type: "structure",
                        members: {
                            Arns: {
                                shape: "S3c"
                            }
                        }
                    },
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    BillingPeriod: {},
                    PricingPlans: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Name: {
                                    shape: "S1f"
                                },
                                Arn: {},
                                Description: {
                                    shape: "S1g"
                                },
                                Size: {
                                    type: "long"
                                },
                                CreationTime: {
                                    type: "long"
                                },
                                LastModifiedTime: {
                                    type: "long"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListPricingPlansAssociatedWithPricingRule: {
            http: {
                requestUri: "/list-pricing-plans-associated-with-pricing-rule",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "PricingRuleArn" ],
                members: {
                    BillingPeriod: {},
                    PricingRuleArn: {},
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    BillingPeriod: {},
                    PricingRuleArn: {},
                    PricingPlanArns: {
                        shape: "S3c"
                    },
                    NextToken: {}
                }
            }
        },
        ListPricingRules: {
            http: {
                requestUri: "/list-pricing-rules",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    BillingPeriod: {},
                    Filters: {
                        type: "structure",
                        members: {
                            Arns: {
                                shape: "S3n"
                            }
                        }
                    },
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    BillingPeriod: {},
                    PricingRules: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Name: {
                                    shape: "S1k"
                                },
                                Arn: {},
                                Description: {
                                    shape: "S1l"
                                },
                                Scope: {},
                                Type: {},
                                ModifierPercentage: {
                                    type: "double"
                                },
                                Service: {},
                                AssociatedPricingPlanCount: {
                                    type: "long"
                                },
                                CreationTime: {
                                    type: "long"
                                },
                                LastModifiedTime: {
                                    type: "long"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListPricingRulesAssociatedToPricingPlan: {
            http: {
                requestUri: "/list-pricing-rules-associated-to-pricing-plan",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "PricingPlanArn" ],
                members: {
                    BillingPeriod: {},
                    PricingPlanArn: {},
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    BillingPeriod: {},
                    PricingPlanArn: {},
                    PricingRuleArns: {
                        shape: "S3n"
                    },
                    NextToken: {}
                }
            }
        },
        ListResourcesAssociatedToCustomLineItem: {
            http: {
                requestUri: "/list-resources-associated-to-custom-line-item",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "Arn" ],
                members: {
                    BillingPeriod: {},
                    Arn: {},
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {},
                    Filters: {
                        type: "structure",
                        members: {
                            Relationship: {}
                        }
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Arn: {},
                    AssociatedResources: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Arn: {},
                                Relationship: {}
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListTagsForResource: {
            http: {
                method: "GET",
                requestUri: "/tags/{ResourceArn}",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "ResourceArn" ],
                members: {
                    ResourceArn: {
                        location: "uri",
                        locationName: "ResourceArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Tags: {
                        shape: "Sz"
                    }
                }
            }
        },
        TagResource: {
            http: {
                requestUri: "/tags/{ResourceArn}",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "ResourceArn", "Tags" ],
                members: {
                    ResourceArn: {
                        location: "uri",
                        locationName: "ResourceArn"
                    },
                    Tags: {
                        shape: "Sz"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UntagResource: {
            http: {
                method: "DELETE",
                requestUri: "/tags/{ResourceArn}",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "ResourceArn", "TagKeys" ],
                members: {
                    ResourceArn: {
                        location: "uri",
                        locationName: "ResourceArn"
                    },
                    TagKeys: {
                        location: "querystring",
                        locationName: "tagKeys",
                        type: "list",
                        member: {}
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UpdateBillingGroup: {
            http: {
                requestUri: "/update-billing-group",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "Arn" ],
                members: {
                    Arn: {},
                    Name: {
                        shape: "Su"
                    },
                    Status: {},
                    ComputationPreference: {
                        shape: "Sw"
                    },
                    Description: {
                        shape: "Sy"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Arn: {},
                    Name: {
                        shape: "Su"
                    },
                    Description: {
                        shape: "Sy"
                    },
                    PrimaryAccountId: {},
                    PricingPlanArn: {},
                    Size: {
                        type: "long"
                    },
                    LastModifiedTime: {
                        type: "long"
                    },
                    Status: {},
                    StatusReason: {}
                }
            },
            idempotent: true
        },
        UpdateCustomLineItem: {
            http: {
                requestUri: "/update-custom-line-item",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "Arn" ],
                members: {
                    Arn: {},
                    Name: {
                        shape: "Su"
                    },
                    Description: {
                        shape: "S15"
                    },
                    ChargeDetails: {
                        type: "structure",
                        members: {
                            Flat: {
                                type: "structure",
                                required: [ "ChargeValue" ],
                                members: {
                                    ChargeValue: {
                                        type: "double"
                                    }
                                }
                            },
                            Percentage: {
                                type: "structure",
                                required: [ "PercentageValue" ],
                                members: {
                                    PercentageValue: {
                                        type: "double"
                                    }
                                }
                            }
                        }
                    },
                    BillingPeriodRange: {
                        shape: "Sf"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Arn: {},
                    BillingGroupArn: {},
                    Name: {
                        shape: "S14"
                    },
                    Description: {
                        shape: "S15"
                    },
                    ChargeDetails: {
                        shape: "S34"
                    },
                    LastModifiedTime: {
                        type: "long"
                    },
                    AssociationSize: {
                        type: "long"
                    }
                }
            },
            idempotent: true
        },
        UpdatePricingPlan: {
            http: {
                method: "PUT",
                requestUri: "/update-pricing-plan",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "Arn" ],
                members: {
                    Arn: {},
                    Name: {
                        shape: "S1f"
                    },
                    Description: {
                        shape: "S1g"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Arn: {},
                    Name: {
                        shape: "S1f"
                    },
                    Description: {
                        shape: "S1g"
                    },
                    Size: {
                        type: "long"
                    },
                    LastModifiedTime: {
                        type: "long"
                    }
                }
            },
            idempotent: true
        },
        UpdatePricingRule: {
            http: {
                method: "PUT",
                requestUri: "/update-pricing-rule",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "Arn" ],
                members: {
                    Arn: {},
                    Name: {
                        shape: "S1k"
                    },
                    Description: {
                        shape: "S1l"
                    },
                    Type: {},
                    ModifierPercentage: {
                        type: "double"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Arn: {},
                    Name: {
                        shape: "S1k"
                    },
                    Description: {
                        shape: "S1l"
                    },
                    Scope: {},
                    Type: {},
                    ModifierPercentage: {
                        type: "double"
                    },
                    Service: {},
                    AssociatedPricingPlanCount: {
                        type: "long"
                    },
                    LastModifiedTime: {
                        type: "long"
                    }
                }
            },
            idempotent: true
        }
    },
    shapes: {
        S3: {
            type: "list",
            member: {}
        },
        S8: {
            type: "list",
            member: {}
        },
        Sf: {
            type: "structure",
            required: [ "InclusiveStartBillingPeriod", "ExclusiveEndBillingPeriod" ],
            members: {
                InclusiveStartBillingPeriod: {},
                ExclusiveEndBillingPeriod: {}
            }
        },
        Si: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    Arn: {},
                    Error: {
                        shape: "Sk"
                    }
                }
            }
        },
        Sk: {
            type: "structure",
            members: {
                Message: {},
                Reason: {}
            }
        },
        Sq: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    Arn: {},
                    Error: {
                        shape: "Sk"
                    }
                }
            }
        },
        Su: {
            type: "string",
            sensitive: true
        },
        Sw: {
            type: "structure",
            required: [ "PricingPlanArn" ],
            members: {
                PricingPlanArn: {}
            }
        },
        Sy: {
            type: "string",
            sensitive: true
        },
        Sz: {
            type: "map",
            key: {},
            value: {}
        },
        S14: {
            type: "string",
            sensitive: true
        },
        S15: {
            type: "string",
            sensitive: true
        },
        S1f: {
            type: "string",
            sensitive: true
        },
        S1g: {
            type: "string",
            sensitive: true
        },
        S1k: {
            type: "string",
            sensitive: true
        },
        S1l: {
            type: "string",
            sensitive: true
        },
        S2f: {
            type: "list",
            member: {}
        },
        S34: {
            type: "structure",
            required: [ "Type" ],
            members: {
                Flat: {
                    type: "structure",
                    required: [ "ChargeValue" ],
                    members: {
                        ChargeValue: {
                            type: "double"
                        }
                    }
                },
                Percentage: {
                    type: "structure",
                    required: [ "PercentageValue" ],
                    members: {
                        PercentageValue: {
                            type: "double"
                        }
                    }
                },
                Type: {}
            }
        },
        S3c: {
            type: "list",
            member: {}
        },
        S3n: {
            type: "list",
            member: {}
        }
    },
    paginators: {
        ListAccountAssociations: {
            input_token: "NextToken",
            output_token: "NextToken",
            result_key: "LinkedAccounts"
        },
        ListBillingGroupCostReports: {
            input_token: "NextToken",
            limit_key: "MaxResults",
            output_token: "NextToken",
            result_key: "BillingGroupCostReports"
        },
        ListBillingGroups: {
            input_token: "NextToken",
            limit_key: "MaxResults",
            output_token: "NextToken",
            result_key: "BillingGroups"
        },
        ListCustomLineItems: {
            input_token: "NextToken",
            limit_key: "MaxResults",
            output_token: "NextToken",
            result_key: "CustomLineItems"
        },
        ListPricingPlans: {
            input_token: "NextToken",
            limit_key: "MaxResults",
            non_aggregate_keys: [ "BillingPeriod" ],
            output_token: "NextToken",
            result_key: "PricingPlans"
        },
        ListPricingPlansAssociatedWithPricingRule: {
            input_token: "NextToken",
            limit_key: "MaxResults",
            non_aggregate_keys: [ "BillingPeriod", "PricingRuleArn" ],
            output_token: "NextToken",
            result_key: "PricingPlanArns"
        },
        ListPricingRules: {
            input_token: "NextToken",
            limit_key: "MaxResults",
            non_aggregate_keys: [ "BillingPeriod" ],
            output_token: "NextToken",
            result_key: "PricingRules"
        },
        ListPricingRulesAssociatedToPricingPlan: {
            input_token: "NextToken",
            limit_key: "MaxResults",
            non_aggregate_keys: [ "BillingPeriod", "PricingPlanArn" ],
            output_token: "NextToken",
            result_key: "PricingRuleArns"
        },
        ListResourcesAssociatedToCustomLineItem: {
            input_token: "NextToken",
            limit_key: "MaxResults",
            non_aggregate_keys: [ "Arn" ],
            output_token: "NextToken",
            result_key: "AssociatedResources"
        }
    },
    waiters: {}
};

AWS.apiLoader.services["gamesparks"] = {};

AWS.GameSparks = AWS.Service.defineService("gamesparks", [ "2021-08-17" ]);

AWS.apiLoader.services["gamesparks"]["2021-08-17"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2021-08-17",
        endpointPrefix: "gamesparks",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceFullName: "GameSparks",
        serviceId: "GameSparks",
        signatureVersion: "v4",
        signingName: "gamesparks",
        uid: "gamesparks-2021-08-17"
    },
    operations: {
        CreateGame: {
            http: {
                requestUri: "/game",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "GameName" ],
                members: {
                    ClientToken: {},
                    Description: {},
                    GameName: {},
                    Tags: {
                        shape: "S5"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Game: {
                        shape: "S9"
                    }
                }
            },
            idempotent: true
        },
        CreateSnapshot: {
            http: {
                requestUri: "/game/{GameName}/snapshot",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "GameName" ],
                members: {
                    Description: {},
                    GameName: {
                        location: "uri",
                        locationName: "GameName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Snapshot: {
                        shape: "Sh"
                    }
                }
            }
        },
        CreateStage: {
            http: {
                requestUri: "/game/{GameName}/stage",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "GameName", "Role", "StageName" ],
                members: {
                    ClientToken: {},
                    Description: {},
                    GameName: {
                        location: "uri",
                        locationName: "GameName"
                    },
                    Role: {},
                    StageName: {},
                    Tags: {
                        shape: "S5"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Stage: {
                        shape: "St"
                    }
                }
            },
            idempotent: true
        },
        DeleteGame: {
            http: {
                method: "DELETE",
                requestUri: "/game/{GameName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "GameName" ],
                members: {
                    GameName: {
                        location: "uri",
                        locationName: "GameName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        },
        DeleteStage: {
            http: {
                method: "DELETE",
                requestUri: "/game/{GameName}/stage/{StageName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "GameName", "StageName" ],
                members: {
                    GameName: {
                        location: "uri",
                        locationName: "GameName"
                    },
                    StageName: {
                        location: "uri",
                        locationName: "StageName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        },
        DisconnectPlayer: {
            http: {
                requestUri: "/runtime/game/{GameName}/stage/{StageName}/player/{PlayerId}/disconnect",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "GameName", "PlayerId", "StageName" ],
                members: {
                    GameName: {
                        location: "uri",
                        locationName: "GameName"
                    },
                    PlayerId: {
                        location: "uri",
                        locationName: "PlayerId"
                    },
                    StageName: {
                        location: "uri",
                        locationName: "StageName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    DisconnectFailures: {
                        shape: "S14"
                    },
                    DisconnectSuccesses: {
                        shape: "S14"
                    }
                }
            },
            idempotent: true
        },
        ExportSnapshot: {
            http: {
                method: "GET",
                requestUri: "/game/{GameName}/snapshot/{SnapshotId}/export",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "GameName", "SnapshotId" ],
                members: {
                    GameName: {
                        location: "uri",
                        locationName: "GameName"
                    },
                    SnapshotId: {
                        location: "uri",
                        locationName: "SnapshotId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    S3Url: {}
                }
            }
        },
        GetExtension: {
            http: {
                method: "GET",
                requestUri: "/extension/{Namespace}/{Name}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "Name", "Namespace" ],
                members: {
                    Name: {
                        location: "uri",
                        locationName: "Name"
                    },
                    Namespace: {
                        location: "uri",
                        locationName: "Namespace"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Extension: {
                        shape: "S1d"
                    }
                }
            }
        },
        GetExtensionVersion: {
            http: {
                method: "GET",
                requestUri: "/extension/{Namespace}/{Name}/version/{ExtensionVersion}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "ExtensionVersion", "Name", "Namespace" ],
                members: {
                    ExtensionVersion: {
                        location: "uri",
                        locationName: "ExtensionVersion"
                    },
                    Name: {
                        location: "uri",
                        locationName: "Name"
                    },
                    Namespace: {
                        location: "uri",
                        locationName: "Namespace"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    ExtensionVersion: {
                        shape: "S1i"
                    }
                }
            }
        },
        GetGame: {
            http: {
                method: "GET",
                requestUri: "/game/{GameName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "GameName" ],
                members: {
                    GameName: {
                        location: "uri",
                        locationName: "GameName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Game: {
                        shape: "S9"
                    }
                }
            }
        },
        GetGameConfiguration: {
            http: {
                method: "GET",
                requestUri: "/game/{GameName}/configuration",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "GameName" ],
                members: {
                    GameName: {
                        location: "uri",
                        locationName: "GameName"
                    },
                    Sections: {
                        shape: "S1n",
                        location: "querystring",
                        locationName: "Sections"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    GameConfiguration: {
                        shape: "S1p"
                    }
                }
            }
        },
        GetGeneratedCodeJob: {
            http: {
                method: "GET",
                requestUri: "/game/{GameName}/snapshot/{SnapshotId}/generated-sdk-code-job/{JobId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "GameName", "JobId", "SnapshotId" ],
                members: {
                    GameName: {
                        location: "uri",
                        locationName: "GameName"
                    },
                    JobId: {
                        location: "uri",
                        locationName: "JobId"
                    },
                    SnapshotId: {
                        location: "uri",
                        locationName: "SnapshotId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    GeneratedCodeJob: {
                        shape: "S1t"
                    }
                }
            }
        },
        GetPlayerConnectionStatus: {
            http: {
                method: "GET",
                requestUri: "/runtime/game/{GameName}/stage/{StageName}/player/{PlayerId}/connection",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "GameName", "PlayerId", "StageName" ],
                members: {
                    GameName: {
                        location: "uri",
                        locationName: "GameName"
                    },
                    PlayerId: {
                        location: "uri",
                        locationName: "PlayerId"
                    },
                    StageName: {
                        location: "uri",
                        locationName: "StageName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Connections: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Created: {
                                    shape: "Sb"
                                },
                                Id: {}
                            }
                        }
                    }
                }
            }
        },
        GetSnapshot: {
            http: {
                method: "GET",
                requestUri: "/game/{GameName}/snapshot/{SnapshotId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "GameName", "SnapshotId" ],
                members: {
                    GameName: {
                        location: "uri",
                        locationName: "GameName"
                    },
                    Sections: {
                        shape: "S1n",
                        location: "querystring",
                        locationName: "Sections"
                    },
                    SnapshotId: {
                        location: "uri",
                        locationName: "SnapshotId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Snapshot: {
                        shape: "Sh"
                    }
                }
            }
        },
        GetStage: {
            http: {
                method: "GET",
                requestUri: "/game/{GameName}/stage/{StageName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "GameName", "StageName" ],
                members: {
                    GameName: {
                        location: "uri",
                        locationName: "GameName"
                    },
                    StageName: {
                        location: "uri",
                        locationName: "StageName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Stage: {
                        shape: "St"
                    }
                }
            }
        },
        GetStageDeployment: {
            http: {
                method: "GET",
                requestUri: "/game/{GameName}/stage/{StageName}/deployment",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "GameName", "StageName" ],
                members: {
                    DeploymentId: {
                        location: "querystring",
                        locationName: "DeploymentId"
                    },
                    GameName: {
                        location: "uri",
                        locationName: "GameName"
                    },
                    StageName: {
                        location: "uri",
                        locationName: "StageName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    StageDeployment: {
                        shape: "S27"
                    }
                }
            }
        },
        ImportGameConfiguration: {
            http: {
                method: "PUT",
                requestUri: "/game/{GameName}/configuration",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "GameName", "ImportSource" ],
                members: {
                    GameName: {
                        location: "uri",
                        locationName: "GameName"
                    },
                    ImportSource: {
                        type: "structure",
                        required: [ "File" ],
                        members: {
                            File: {
                                type: "blob"
                            }
                        }
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    GameConfiguration: {
                        shape: "S1p"
                    }
                }
            },
            idempotent: true
        },
        ListExtensionVersions: {
            http: {
                method: "GET",
                requestUri: "/extension/{Namespace}/{Name}/version",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "Name", "Namespace" ],
                members: {
                    MaxResults: {
                        location: "querystring",
                        locationName: "MaxResults",
                        type: "integer"
                    },
                    Name: {
                        location: "uri",
                        locationName: "Name"
                    },
                    Namespace: {
                        location: "uri",
                        locationName: "Namespace"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "NextToken"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    ExtensionVersions: {
                        type: "list",
                        member: {
                            shape: "S1i"
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListExtensions: {
            http: {
                method: "GET",
                requestUri: "/extension",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    MaxResults: {
                        location: "querystring",
                        locationName: "MaxResults",
                        type: "integer"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "NextToken"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Extensions: {
                        type: "list",
                        member: {
                            shape: "S1d"
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListGames: {
            http: {
                method: "GET",
                requestUri: "/game",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    MaxResults: {
                        location: "querystring",
                        locationName: "MaxResults",
                        type: "integer"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "NextToken"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Games: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Description: {},
                                Name: {},
                                State: {},
                                Tags: {
                                    shape: "S5"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListGeneratedCodeJobs: {
            http: {
                method: "GET",
                requestUri: "/game/{GameName}/snapshot/{SnapshotId}/generated-sdk-code-jobs",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "GameName", "SnapshotId" ],
                members: {
                    GameName: {
                        location: "uri",
                        locationName: "GameName"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "MaxResults",
                        type: "integer"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "NextToken"
                    },
                    SnapshotId: {
                        location: "uri",
                        locationName: "SnapshotId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    GeneratedCodeJobs: {
                        type: "list",
                        member: {
                            shape: "S1t"
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListSnapshots: {
            http: {
                method: "GET",
                requestUri: "/game/{GameName}/snapshot",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "GameName" ],
                members: {
                    GameName: {
                        location: "uri",
                        locationName: "GameName"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "MaxResults",
                        type: "integer"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "NextToken"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    NextToken: {},
                    Snapshots: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Created: {
                                    shape: "Sb"
                                },
                                Description: {},
                                Id: {},
                                LastUpdated: {
                                    shape: "Sb"
                                }
                            }
                        }
                    }
                }
            }
        },
        ListStageDeployments: {
            http: {
                method: "GET",
                requestUri: "/game/{GameName}/stage/{StageName}/deployments",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "GameName", "StageName" ],
                members: {
                    GameName: {
                        location: "uri",
                        locationName: "GameName"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "MaxResults",
                        type: "integer"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "NextToken"
                    },
                    StageName: {
                        location: "uri",
                        locationName: "StageName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    NextToken: {},
                    StageDeployments: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                DeploymentAction: {},
                                DeploymentId: {},
                                DeploymentState: {},
                                LastUpdated: {
                                    shape: "Sb"
                                },
                                SnapshotId: {}
                            }
                        }
                    }
                }
            }
        },
        ListStages: {
            http: {
                method: "GET",
                requestUri: "/game/{GameName}/stage",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "GameName" ],
                members: {
                    GameName: {
                        location: "uri",
                        locationName: "GameName"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "MaxResults",
                        type: "integer"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "NextToken"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    NextToken: {},
                    Stages: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Description: {},
                                GameKey: {},
                                Name: {},
                                State: {},
                                Tags: {
                                    shape: "S5"
                                }
                            }
                        }
                    }
                }
            }
        },
        ListTagsForResource: {
            http: {
                method: "GET",
                requestUri: "/tags/{ResourceArn}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "ResourceArn" ],
                members: {
                    ResourceArn: {
                        location: "uri",
                        locationName: "ResourceArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    tags: {
                        shape: "S5"
                    }
                }
            }
        },
        StartGeneratedCodeJob: {
            http: {
                requestUri: "/game/{GameName}/snapshot/{SnapshotId}/generated-sdk-code-job",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "GameName", "Generator", "SnapshotId" ],
                members: {
                    GameName: {
                        location: "uri",
                        locationName: "GameName"
                    },
                    Generator: {
                        type: "structure",
                        members: {
                            GameSdkVersion: {},
                            Language: {},
                            TargetPlatform: {}
                        }
                    },
                    SnapshotId: {
                        location: "uri",
                        locationName: "SnapshotId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    GeneratedCodeJobId: {}
                }
            }
        },
        StartStageDeployment: {
            http: {
                requestUri: "/game/{GameName}/stage/{StageName}/deployment",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "GameName", "SnapshotId", "StageName" ],
                members: {
                    ClientToken: {},
                    GameName: {
                        location: "uri",
                        locationName: "GameName"
                    },
                    SnapshotId: {},
                    StageName: {
                        location: "uri",
                        locationName: "StageName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    StageDeployment: {
                        shape: "S27"
                    }
                }
            },
            idempotent: true
        },
        TagResource: {
            http: {
                requestUri: "/tags/{ResourceArn}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "ResourceArn", "tags" ],
                members: {
                    ResourceArn: {
                        location: "uri",
                        locationName: "ResourceArn"
                    },
                    tags: {
                        shape: "S5"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UntagResource: {
            http: {
                method: "DELETE",
                requestUri: "/tags/{ResourceArn}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "ResourceArn", "tagKeys" ],
                members: {
                    ResourceArn: {
                        location: "uri",
                        locationName: "ResourceArn"
                    },
                    tagKeys: {
                        location: "querystring",
                        locationName: "tagKeys",
                        type: "list",
                        member: {}
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        },
        UpdateGame: {
            http: {
                method: "PATCH",
                requestUri: "/game/{GameName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "GameName" ],
                members: {
                    Description: {},
                    GameName: {
                        location: "uri",
                        locationName: "GameName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Game: {
                        shape: "S9"
                    }
                }
            },
            idempotent: true
        },
        UpdateGameConfiguration: {
            http: {
                method: "PATCH",
                requestUri: "/game/{GameName}/configuration",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "GameName", "Modifications" ],
                members: {
                    GameName: {
                        location: "uri",
                        locationName: "GameName"
                    },
                    Modifications: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "Operation", "Path", "Section" ],
                            members: {
                                Operation: {},
                                Path: {},
                                Section: {},
                                Value: {
                                    shape: "Sm"
                                }
                            }
                        }
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    GameConfiguration: {
                        shape: "S1p"
                    }
                }
            },
            idempotent: true
        },
        UpdateSnapshot: {
            http: {
                method: "PATCH",
                requestUri: "/game/{GameName}/snapshot/{SnapshotId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "GameName", "SnapshotId" ],
                members: {
                    Description: {},
                    GameName: {
                        location: "uri",
                        locationName: "GameName"
                    },
                    SnapshotId: {
                        location: "uri",
                        locationName: "SnapshotId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Snapshot: {
                        shape: "Sh"
                    }
                }
            },
            idempotent: true
        },
        UpdateStage: {
            http: {
                method: "PATCH",
                requestUri: "/game/{GameName}/stage/{StageName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "GameName", "StageName" ],
                members: {
                    Description: {},
                    GameName: {
                        location: "uri",
                        locationName: "GameName"
                    },
                    Role: {},
                    StageName: {
                        location: "uri",
                        locationName: "StageName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Stage: {
                        shape: "St"
                    }
                }
            },
            idempotent: true
        }
    },
    shapes: {
        S5: {
            type: "map",
            key: {},
            value: {}
        },
        S9: {
            type: "structure",
            members: {
                Arn: {},
                Created: {
                    shape: "Sb"
                },
                Description: {},
                EnableTerminationProtection: {
                    type: "boolean"
                },
                LastUpdated: {
                    shape: "Sb"
                },
                Name: {},
                State: {},
                Tags: {
                    shape: "S5"
                }
            }
        },
        Sb: {
            type: "timestamp",
            timestampFormat: "iso8601"
        },
        Sh: {
            type: "structure",
            members: {
                Created: {
                    shape: "Sb"
                },
                Description: {},
                Id: {},
                LastUpdated: {
                    shape: "Sb"
                },
                Sections: {
                    shape: "Sj"
                }
            }
        },
        Sj: {
            type: "map",
            key: {},
            value: {
                type: "structure",
                members: {
                    Attributes: {
                        shape: "Sm"
                    },
                    Name: {},
                    Size: {
                        type: "integer"
                    }
                }
            }
        },
        Sm: {
            type: "structure",
            members: {},
            document: true
        },
        St: {
            type: "structure",
            members: {
                Arn: {},
                Created: {
                    shape: "Sb"
                },
                Description: {},
                GameKey: {},
                LastUpdated: {
                    shape: "Sb"
                },
                LogGroup: {},
                Name: {},
                Role: {},
                State: {},
                Tags: {
                    shape: "S5"
                }
            }
        },
        S14: {
            type: "list",
            member: {}
        },
        S1d: {
            type: "structure",
            members: {
                Description: {},
                Name: {},
                Namespace: {}
            }
        },
        S1i: {
            type: "structure",
            members: {
                Name: {},
                Namespace: {},
                Schema: {},
                Version: {}
            }
        },
        S1n: {
            type: "list",
            member: {}
        },
        S1p: {
            type: "structure",
            members: {
                Created: {
                    shape: "Sb"
                },
                LastUpdated: {
                    shape: "Sb"
                },
                Sections: {
                    shape: "Sj"
                }
            }
        },
        S1t: {
            type: "structure",
            members: {
                Description: {},
                ExpirationTime: {
                    shape: "Sb"
                },
                GeneratedCodeJobId: {},
                S3Url: {},
                Status: {}
            }
        },
        S27: {
            type: "structure",
            members: {
                Created: {
                    shape: "Sb"
                },
                DeploymentAction: {},
                DeploymentId: {},
                DeploymentState: {},
                LastUpdated: {
                    shape: "Sb"
                },
                SnapshotId: {}
            }
        }
    },
    paginators: {
        ListExtensionVersions: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "ExtensionVersions"
        },
        ListExtensions: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "Extensions"
        },
        ListGames: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "Games"
        },
        ListGeneratedCodeJobs: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "GeneratedCodeJobs"
        },
        ListSnapshots: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "Snapshots"
        },
        ListStageDeployments: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "StageDeployments"
        },
        ListStages: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "Stages"
        }
    }
};

AWS.apiLoader.services["pinpointsmsvoicev2"] = {};

AWS.PinpointSMSVoiceV2 = AWS.Service.defineService("pinpointsmsvoicev2", [ "2022-03-31" ]);

AWS.apiLoader.services["pinpointsmsvoicev2"]["2022-03-31"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2022-03-31",
        endpointPrefix: "sms-voice",
        jsonVersion: "1.0",
        protocol: "json",
        serviceFullName: "Amazon Pinpoint SMS Voice V2",
        serviceId: "Pinpoint SMS Voice V2",
        signatureVersion: "v4",
        signingName: "sms-voice",
        targetPrefix: "PinpointSMSVoiceV2",
        uid: "pinpoint-sms-voice-v2-2022-03-31"
    },
    operations: {
        AssociateOriginationIdentity: {
            input: {
                type: "structure",
                required: [ "PoolId", "OriginationIdentity", "IsoCountryCode" ],
                members: {
                    PoolId: {},
                    OriginationIdentity: {},
                    IsoCountryCode: {},
                    ClientToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    PoolArn: {},
                    PoolId: {},
                    OriginationIdentityArn: {},
                    OriginationIdentity: {},
                    IsoCountryCode: {}
                }
            }
        },
        CreateConfigurationSet: {
            input: {
                type: "structure",
                required: [ "ConfigurationSetName" ],
                members: {
                    ConfigurationSetName: {},
                    Tags: {
                        shape: "Sa"
                    },
                    ClientToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    ConfigurationSetArn: {},
                    ConfigurationSetName: {},
                    Tags: {
                        shape: "Sa"
                    },
                    CreatedTimestamp: {
                        type: "timestamp"
                    }
                }
            }
        },
        CreateEventDestination: {
            input: {
                type: "structure",
                required: [ "ConfigurationSetName", "EventDestinationName", "MatchingEventTypes" ],
                members: {
                    ConfigurationSetName: {},
                    EventDestinationName: {},
                    MatchingEventTypes: {
                        shape: "Sj"
                    },
                    CloudWatchLogsDestination: {
                        shape: "Sl"
                    },
                    KinesisFirehoseDestination: {
                        shape: "So"
                    },
                    SnsDestination: {
                        shape: "Sq"
                    },
                    ClientToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    ConfigurationSetArn: {},
                    ConfigurationSetName: {},
                    EventDestination: {
                        shape: "St"
                    }
                }
            }
        },
        CreateOptOutList: {
            input: {
                type: "structure",
                required: [ "OptOutListName" ],
                members: {
                    OptOutListName: {},
                    Tags: {
                        shape: "Sa"
                    },
                    ClientToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    OptOutListArn: {},
                    OptOutListName: {},
                    Tags: {
                        shape: "Sa"
                    },
                    CreatedTimestamp: {
                        type: "timestamp"
                    }
                }
            }
        },
        CreatePool: {
            input: {
                type: "structure",
                required: [ "OriginationIdentity", "IsoCountryCode", "MessageType" ],
                members: {
                    OriginationIdentity: {},
                    IsoCountryCode: {},
                    MessageType: {},
                    DeletionProtectionEnabled: {
                        type: "boolean"
                    },
                    Tags: {
                        shape: "Sa"
                    },
                    ClientToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    PoolArn: {},
                    PoolId: {},
                    Status: {},
                    MessageType: {},
                    TwoWayEnabled: {
                        type: "boolean"
                    },
                    TwoWayChannelArn: {},
                    SelfManagedOptOutsEnabled: {
                        type: "boolean"
                    },
                    OptOutListName: {},
                    SharedRoutesEnabled: {
                        type: "boolean"
                    },
                    DeletionProtectionEnabled: {
                        type: "boolean"
                    },
                    Tags: {
                        shape: "Sa"
                    },
                    CreatedTimestamp: {
                        type: "timestamp"
                    }
                }
            }
        },
        DeleteConfigurationSet: {
            input: {
                type: "structure",
                required: [ "ConfigurationSetName" ],
                members: {
                    ConfigurationSetName: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    ConfigurationSetArn: {},
                    ConfigurationSetName: {},
                    EventDestinations: {
                        shape: "S16"
                    },
                    DefaultMessageType: {},
                    DefaultSenderId: {},
                    CreatedTimestamp: {
                        type: "timestamp"
                    }
                }
            }
        },
        DeleteDefaultMessageType: {
            input: {
                type: "structure",
                required: [ "ConfigurationSetName" ],
                members: {
                    ConfigurationSetName: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    ConfigurationSetArn: {},
                    ConfigurationSetName: {},
                    MessageType: {}
                }
            }
        },
        DeleteDefaultSenderId: {
            input: {
                type: "structure",
                required: [ "ConfigurationSetName" ],
                members: {
                    ConfigurationSetName: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    ConfigurationSetArn: {},
                    ConfigurationSetName: {},
                    SenderId: {}
                }
            }
        },
        DeleteEventDestination: {
            input: {
                type: "structure",
                required: [ "ConfigurationSetName", "EventDestinationName" ],
                members: {
                    ConfigurationSetName: {},
                    EventDestinationName: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    ConfigurationSetArn: {},
                    ConfigurationSetName: {},
                    EventDestination: {
                        shape: "St"
                    }
                }
            }
        },
        DeleteKeyword: {
            input: {
                type: "structure",
                required: [ "OriginationIdentity", "Keyword" ],
                members: {
                    OriginationIdentity: {},
                    Keyword: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    OriginationIdentityArn: {},
                    OriginationIdentity: {},
                    Keyword: {},
                    KeywordMessage: {},
                    KeywordAction: {}
                }
            }
        },
        DeleteOptOutList: {
            input: {
                type: "structure",
                required: [ "OptOutListName" ],
                members: {
                    OptOutListName: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    OptOutListArn: {},
                    OptOutListName: {},
                    CreatedTimestamp: {
                        type: "timestamp"
                    }
                }
            }
        },
        DeleteOptedOutNumber: {
            input: {
                type: "structure",
                required: [ "OptOutListName", "OptedOutNumber" ],
                members: {
                    OptOutListName: {},
                    OptedOutNumber: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    OptOutListArn: {},
                    OptOutListName: {},
                    OptedOutNumber: {},
                    OptedOutTimestamp: {
                        type: "timestamp"
                    },
                    EndUserOptedOut: {
                        type: "boolean"
                    }
                }
            }
        },
        DeletePool: {
            input: {
                type: "structure",
                required: [ "PoolId" ],
                members: {
                    PoolId: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    PoolArn: {},
                    PoolId: {},
                    Status: {},
                    MessageType: {},
                    TwoWayEnabled: {
                        type: "boolean"
                    },
                    TwoWayChannelArn: {},
                    SelfManagedOptOutsEnabled: {
                        type: "boolean"
                    },
                    OptOutListName: {},
                    SharedRoutesEnabled: {
                        type: "boolean"
                    },
                    CreatedTimestamp: {
                        type: "timestamp"
                    }
                }
            }
        },
        DeleteTextMessageSpendLimitOverride: {
            input: {
                type: "structure",
                members: {}
            },
            output: {
                type: "structure",
                members: {
                    MonthlyLimit: {
                        type: "long"
                    }
                }
            }
        },
        DeleteVoiceMessageSpendLimitOverride: {
            input: {
                type: "structure",
                members: {}
            },
            output: {
                type: "structure",
                members: {
                    MonthlyLimit: {
                        type: "long"
                    }
                }
            }
        },
        DescribeAccountAttributes: {
            input: {
                type: "structure",
                members: {
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    AccountAttributes: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "Name", "Value" ],
                            members: {
                                Name: {},
                                Value: {}
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        DescribeAccountLimits: {
            input: {
                type: "structure",
                members: {
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    AccountLimits: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "Name", "Used", "Max" ],
                            members: {
                                Name: {},
                                Used: {
                                    type: "long"
                                },
                                Max: {
                                    type: "long"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        DescribeConfigurationSets: {
            input: {
                type: "structure",
                members: {
                    ConfigurationSetNames: {
                        type: "list",
                        member: {}
                    },
                    Filters: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "Name", "Values" ],
                            members: {
                                Name: {},
                                Values: {
                                    shape: "S2f"
                                }
                            }
                        }
                    },
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    ConfigurationSets: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "ConfigurationSetArn", "ConfigurationSetName", "EventDestinations", "CreatedTimestamp" ],
                            members: {
                                ConfigurationSetArn: {},
                                ConfigurationSetName: {},
                                EventDestinations: {
                                    shape: "S16"
                                },
                                DefaultMessageType: {},
                                DefaultSenderId: {},
                                CreatedTimestamp: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        DescribeKeywords: {
            input: {
                type: "structure",
                required: [ "OriginationIdentity" ],
                members: {
                    OriginationIdentity: {},
                    Keywords: {
                        type: "list",
                        member: {}
                    },
                    Filters: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "Name", "Values" ],
                            members: {
                                Name: {},
                                Values: {
                                    shape: "S2f"
                                }
                            }
                        }
                    },
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    OriginationIdentityArn: {},
                    OriginationIdentity: {},
                    Keywords: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "Keyword", "KeywordMessage", "KeywordAction" ],
                            members: {
                                Keyword: {},
                                KeywordMessage: {},
                                KeywordAction: {}
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        DescribeOptOutLists: {
            input: {
                type: "structure",
                members: {
                    OptOutListNames: {
                        type: "list",
                        member: {}
                    },
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    OptOutLists: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "OptOutListArn", "OptOutListName", "CreatedTimestamp" ],
                            members: {
                                OptOutListArn: {},
                                OptOutListName: {},
                                CreatedTimestamp: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        DescribeOptedOutNumbers: {
            input: {
                type: "structure",
                required: [ "OptOutListName" ],
                members: {
                    OptOutListName: {},
                    OptedOutNumbers: {
                        type: "list",
                        member: {}
                    },
                    Filters: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "Name", "Values" ],
                            members: {
                                Name: {},
                                Values: {
                                    shape: "S2f"
                                }
                            }
                        }
                    },
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    OptOutListArn: {},
                    OptOutListName: {},
                    OptedOutNumbers: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "OptedOutNumber", "OptedOutTimestamp", "EndUserOptedOut" ],
                            members: {
                                OptedOutNumber: {},
                                OptedOutTimestamp: {
                                    type: "timestamp"
                                },
                                EndUserOptedOut: {
                                    type: "boolean"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        DescribePhoneNumbers: {
            input: {
                type: "structure",
                members: {
                    PhoneNumberIds: {
                        type: "list",
                        member: {}
                    },
                    Filters: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "Name", "Values" ],
                            members: {
                                Name: {},
                                Values: {
                                    shape: "S2f"
                                }
                            }
                        }
                    },
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    PhoneNumbers: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "PhoneNumberArn", "PhoneNumber", "Status", "IsoCountryCode", "MessageType", "NumberCapabilities", "NumberType", "MonthlyLeasingPrice", "TwoWayEnabled", "SelfManagedOptOutsEnabled", "OptOutListName", "DeletionProtectionEnabled", "CreatedTimestamp" ],
                            members: {
                                PhoneNumberArn: {},
                                PhoneNumberId: {},
                                PhoneNumber: {},
                                Status: {},
                                IsoCountryCode: {},
                                MessageType: {},
                                NumberCapabilities: {
                                    shape: "S3f"
                                },
                                NumberType: {},
                                MonthlyLeasingPrice: {},
                                TwoWayEnabled: {
                                    type: "boolean"
                                },
                                TwoWayChannelArn: {},
                                SelfManagedOptOutsEnabled: {
                                    type: "boolean"
                                },
                                OptOutListName: {},
                                DeletionProtectionEnabled: {
                                    type: "boolean"
                                },
                                PoolId: {},
                                CreatedTimestamp: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        DescribePools: {
            input: {
                type: "structure",
                members: {
                    PoolIds: {
                        type: "list",
                        member: {}
                    },
                    Filters: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "Name", "Values" ],
                            members: {
                                Name: {},
                                Values: {
                                    shape: "S2f"
                                }
                            }
                        }
                    },
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Pools: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "PoolArn", "PoolId", "Status", "MessageType", "TwoWayEnabled", "SelfManagedOptOutsEnabled", "OptOutListName", "SharedRoutesEnabled", "DeletionProtectionEnabled", "CreatedTimestamp" ],
                            members: {
                                PoolArn: {},
                                PoolId: {},
                                Status: {},
                                MessageType: {},
                                TwoWayEnabled: {
                                    type: "boolean"
                                },
                                TwoWayChannelArn: {},
                                SelfManagedOptOutsEnabled: {
                                    type: "boolean"
                                },
                                OptOutListName: {},
                                SharedRoutesEnabled: {
                                    type: "boolean"
                                },
                                DeletionProtectionEnabled: {
                                    type: "boolean"
                                },
                                CreatedTimestamp: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        DescribeSenderIds: {
            input: {
                type: "structure",
                members: {
                    SenderIds: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "SenderId", "IsoCountryCode" ],
                            members: {
                                SenderId: {},
                                IsoCountryCode: {}
                            }
                        }
                    },
                    Filters: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "Name", "Values" ],
                            members: {
                                Name: {},
                                Values: {
                                    shape: "S2f"
                                }
                            }
                        }
                    },
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    SenderIds: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "SenderIdArn", "SenderId", "IsoCountryCode", "MessageTypes", "MonthlyLeasingPrice" ],
                            members: {
                                SenderIdArn: {},
                                SenderId: {},
                                IsoCountryCode: {},
                                MessageTypes: {
                                    type: "list",
                                    member: {}
                                },
                                MonthlyLeasingPrice: {}
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        DescribeSpendLimits: {
            input: {
                type: "structure",
                members: {
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    SpendLimits: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "Name", "EnforcedLimit", "MaxLimit", "Overridden" ],
                            members: {
                                Name: {},
                                EnforcedLimit: {
                                    type: "long"
                                },
                                MaxLimit: {
                                    type: "long"
                                },
                                Overridden: {
                                    type: "boolean"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        DisassociateOriginationIdentity: {
            input: {
                type: "structure",
                required: [ "PoolId", "OriginationIdentity", "IsoCountryCode" ],
                members: {
                    PoolId: {},
                    OriginationIdentity: {},
                    IsoCountryCode: {},
                    ClientToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    PoolArn: {},
                    PoolId: {},
                    OriginationIdentityArn: {},
                    OriginationIdentity: {},
                    IsoCountryCode: {}
                }
            }
        },
        ListPoolOriginationIdentities: {
            input: {
                type: "structure",
                required: [ "PoolId" ],
                members: {
                    PoolId: {},
                    Filters: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "Name", "Values" ],
                            members: {
                                Name: {},
                                Values: {
                                    shape: "S2f"
                                }
                            }
                        }
                    },
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    PoolArn: {},
                    PoolId: {},
                    OriginationIdentities: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "OriginationIdentityArn", "OriginationIdentity", "IsoCountryCode", "NumberCapabilities" ],
                            members: {
                                OriginationIdentityArn: {},
                                OriginationIdentity: {},
                                IsoCountryCode: {},
                                NumberCapabilities: {
                                    shape: "S3f"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListTagsForResource: {
            input: {
                type: "structure",
                required: [ "ResourceArn" ],
                members: {
                    ResourceArn: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    ResourceArn: {},
                    Tags: {
                        shape: "Sa"
                    }
                }
            }
        },
        PutKeyword: {
            input: {
                type: "structure",
                required: [ "OriginationIdentity", "Keyword", "KeywordMessage" ],
                members: {
                    OriginationIdentity: {},
                    Keyword: {},
                    KeywordMessage: {},
                    KeywordAction: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    OriginationIdentityArn: {},
                    OriginationIdentity: {},
                    Keyword: {},
                    KeywordMessage: {},
                    KeywordAction: {}
                }
            }
        },
        PutOptedOutNumber: {
            input: {
                type: "structure",
                required: [ "OptOutListName", "OptedOutNumber" ],
                members: {
                    OptOutListName: {},
                    OptedOutNumber: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    OptOutListArn: {},
                    OptOutListName: {},
                    OptedOutNumber: {},
                    OptedOutTimestamp: {
                        type: "timestamp"
                    },
                    EndUserOptedOut: {
                        type: "boolean"
                    }
                }
            }
        },
        ReleasePhoneNumber: {
            input: {
                type: "structure",
                required: [ "PhoneNumberId" ],
                members: {
                    PhoneNumberId: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    PhoneNumberArn: {},
                    PhoneNumberId: {},
                    PhoneNumber: {},
                    Status: {},
                    IsoCountryCode: {},
                    MessageType: {},
                    NumberCapabilities: {
                        shape: "S3f"
                    },
                    NumberType: {},
                    MonthlyLeasingPrice: {},
                    TwoWayEnabled: {
                        type: "boolean"
                    },
                    TwoWayChannelArn: {},
                    SelfManagedOptOutsEnabled: {
                        type: "boolean"
                    },
                    OptOutListName: {},
                    CreatedTimestamp: {
                        type: "timestamp"
                    }
                }
            }
        },
        RequestPhoneNumber: {
            input: {
                type: "structure",
                required: [ "IsoCountryCode", "MessageType", "NumberCapabilities", "NumberType" ],
                members: {
                    IsoCountryCode: {},
                    MessageType: {},
                    NumberCapabilities: {
                        shape: "S3f"
                    },
                    NumberType: {},
                    OptOutListName: {},
                    PoolId: {},
                    RegistrationId: {},
                    DeletionProtectionEnabled: {
                        type: "boolean"
                    },
                    Tags: {
                        shape: "Sa"
                    },
                    ClientToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    PhoneNumberArn: {},
                    PhoneNumberId: {},
                    PhoneNumber: {},
                    Status: {},
                    IsoCountryCode: {},
                    MessageType: {},
                    NumberCapabilities: {
                        shape: "S3f"
                    },
                    NumberType: {},
                    MonthlyLeasingPrice: {},
                    TwoWayEnabled: {
                        type: "boolean"
                    },
                    TwoWayChannelArn: {},
                    SelfManagedOptOutsEnabled: {
                        type: "boolean"
                    },
                    OptOutListName: {},
                    DeletionProtectionEnabled: {
                        type: "boolean"
                    },
                    PoolId: {},
                    Tags: {
                        shape: "Sa"
                    },
                    CreatedTimestamp: {
                        type: "timestamp"
                    }
                }
            }
        },
        SendTextMessage: {
            input: {
                type: "structure",
                required: [ "DestinationPhoneNumber" ],
                members: {
                    DestinationPhoneNumber: {},
                    OriginationIdentity: {},
                    MessageBody: {},
                    MessageType: {},
                    Keyword: {},
                    ConfigurationSetName: {},
                    MaxPrice: {},
                    TimeToLive: {
                        type: "integer"
                    },
                    Context: {
                        shape: "S4x"
                    },
                    DestinationCountryParameters: {
                        type: "map",
                        key: {},
                        value: {}
                    },
                    DryRun: {
                        type: "boolean"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    MessageId: {}
                }
            }
        },
        SendVoiceMessage: {
            input: {
                type: "structure",
                required: [ "DestinationPhoneNumber", "OriginationIdentity" ],
                members: {
                    DestinationPhoneNumber: {},
                    OriginationIdentity: {},
                    MessageBody: {},
                    MessageBodyTextType: {},
                    VoiceId: {},
                    ConfigurationSetName: {},
                    MaxPricePerMinute: {},
                    TimeToLive: {
                        type: "integer"
                    },
                    Context: {
                        shape: "S4x"
                    },
                    DryRun: {
                        type: "boolean"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    MessageId: {}
                }
            }
        },
        SetDefaultMessageType: {
            input: {
                type: "structure",
                required: [ "ConfigurationSetName", "MessageType" ],
                members: {
                    ConfigurationSetName: {},
                    MessageType: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    ConfigurationSetArn: {},
                    ConfigurationSetName: {},
                    MessageType: {}
                }
            }
        },
        SetDefaultSenderId: {
            input: {
                type: "structure",
                required: [ "ConfigurationSetName", "SenderId" ],
                members: {
                    ConfigurationSetName: {},
                    SenderId: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    ConfigurationSetArn: {},
                    ConfigurationSetName: {},
                    SenderId: {}
                }
            }
        },
        SetTextMessageSpendLimitOverride: {
            input: {
                type: "structure",
                required: [ "MonthlyLimit" ],
                members: {
                    MonthlyLimit: {
                        type: "long"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    MonthlyLimit: {
                        type: "long"
                    }
                }
            }
        },
        SetVoiceMessageSpendLimitOverride: {
            input: {
                type: "structure",
                required: [ "MonthlyLimit" ],
                members: {
                    MonthlyLimit: {
                        type: "long"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    MonthlyLimit: {
                        type: "long"
                    }
                }
            }
        },
        TagResource: {
            input: {
                type: "structure",
                required: [ "ResourceArn", "Tags" ],
                members: {
                    ResourceArn: {},
                    Tags: {
                        type: "list",
                        member: {
                            shape: "Sb"
                        }
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UntagResource: {
            input: {
                type: "structure",
                required: [ "ResourceArn", "TagKeys" ],
                members: {
                    ResourceArn: {},
                    TagKeys: {
                        type: "list",
                        member: {}
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UpdateEventDestination: {
            input: {
                type: "structure",
                required: [ "ConfigurationSetName", "EventDestinationName" ],
                members: {
                    ConfigurationSetName: {},
                    EventDestinationName: {},
                    Enabled: {
                        type: "boolean"
                    },
                    MatchingEventTypes: {
                        shape: "Sj"
                    },
                    CloudWatchLogsDestination: {
                        shape: "Sl"
                    },
                    KinesisFirehoseDestination: {
                        shape: "So"
                    },
                    SnsDestination: {
                        shape: "Sq"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    ConfigurationSetArn: {},
                    ConfigurationSetName: {},
                    EventDestination: {
                        shape: "St"
                    }
                }
            }
        },
        UpdatePhoneNumber: {
            input: {
                type: "structure",
                required: [ "PhoneNumberId" ],
                members: {
                    PhoneNumberId: {},
                    TwoWayEnabled: {
                        type: "boolean"
                    },
                    TwoWayChannelArn: {},
                    SelfManagedOptOutsEnabled: {
                        type: "boolean"
                    },
                    OptOutListName: {},
                    DeletionProtectionEnabled: {
                        type: "boolean"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    PhoneNumberArn: {},
                    PhoneNumberId: {},
                    PhoneNumber: {},
                    Status: {},
                    IsoCountryCode: {},
                    MessageType: {},
                    NumberCapabilities: {
                        shape: "S3f"
                    },
                    NumberType: {},
                    MonthlyLeasingPrice: {},
                    TwoWayEnabled: {
                        type: "boolean"
                    },
                    TwoWayChannelArn: {},
                    SelfManagedOptOutsEnabled: {
                        type: "boolean"
                    },
                    OptOutListName: {},
                    DeletionProtectionEnabled: {
                        type: "boolean"
                    },
                    CreatedTimestamp: {
                        type: "timestamp"
                    }
                }
            }
        },
        UpdatePool: {
            input: {
                type: "structure",
                required: [ "PoolId" ],
                members: {
                    PoolId: {},
                    TwoWayEnabled: {
                        type: "boolean"
                    },
                    TwoWayChannelArn: {},
                    SelfManagedOptOutsEnabled: {
                        type: "boolean"
                    },
                    OptOutListName: {},
                    SharedRoutesEnabled: {
                        type: "boolean"
                    },
                    DeletionProtectionEnabled: {
                        type: "boolean"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    PoolArn: {},
                    PoolId: {},
                    Status: {},
                    MessageType: {},
                    TwoWayEnabled: {
                        type: "boolean"
                    },
                    TwoWayChannelArn: {},
                    SelfManagedOptOutsEnabled: {
                        type: "boolean"
                    },
                    OptOutListName: {},
                    SharedRoutesEnabled: {
                        type: "boolean"
                    },
                    DeletionProtectionEnabled: {
                        type: "boolean"
                    },
                    CreatedTimestamp: {
                        type: "timestamp"
                    }
                }
            }
        }
    },
    shapes: {
        Sa: {
            type: "list",
            member: {
                shape: "Sb"
            }
        },
        Sb: {
            type: "structure",
            required: [ "Key", "Value" ],
            members: {
                Key: {},
                Value: {}
            }
        },
        Sj: {
            type: "list",
            member: {}
        },
        Sl: {
            type: "structure",
            required: [ "IamRoleArn", "LogGroupArn" ],
            members: {
                IamRoleArn: {},
                LogGroupArn: {}
            }
        },
        So: {
            type: "structure",
            required: [ "IamRoleArn", "DeliveryStreamArn" ],
            members: {
                IamRoleArn: {},
                DeliveryStreamArn: {}
            }
        },
        Sq: {
            type: "structure",
            required: [ "TopicArn" ],
            members: {
                TopicArn: {}
            }
        },
        St: {
            type: "structure",
            required: [ "EventDestinationName", "Enabled", "MatchingEventTypes" ],
            members: {
                EventDestinationName: {},
                Enabled: {
                    type: "boolean"
                },
                MatchingEventTypes: {
                    shape: "Sj"
                },
                CloudWatchLogsDestination: {
                    shape: "Sl"
                },
                KinesisFirehoseDestination: {
                    shape: "So"
                },
                SnsDestination: {
                    shape: "Sq"
                }
            }
        },
        S16: {
            type: "list",
            member: {
                shape: "St"
            }
        },
        S2f: {
            type: "list",
            member: {}
        },
        S3f: {
            type: "list",
            member: {}
        },
        S4x: {
            type: "map",
            key: {},
            value: {}
        }
    },
    paginators: {
        DescribeAccountAttributes: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "AccountAttributes"
        },
        DescribeAccountLimits: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "AccountLimits"
        },
        DescribeConfigurationSets: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "ConfigurationSets"
        },
        DescribeKeywords: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "Keywords"
        },
        DescribeOptOutLists: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "OptOutLists"
        },
        DescribeOptedOutNumbers: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "OptedOutNumbers"
        },
        DescribePhoneNumbers: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "PhoneNumbers"
        },
        DescribePools: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "Pools"
        },
        DescribeSenderIds: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "SenderIds"
        },
        DescribeSpendLimits: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "SpendLimits"
        },
        ListPoolOriginationIdentities: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "OriginationIdentities"
        }
    },
    waiters: {}
};