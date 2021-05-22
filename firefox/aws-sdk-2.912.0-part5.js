AWS.apiLoader.services["ecrpublic"] = {};

AWS.ECRPUBLIC = AWS.Service.defineService("ecrpublic", [ "2020-10-30" ]);

AWS.apiLoader.services["ecrpublic"]["2020-10-30"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-10-30",
        endpointPrefix: "api.ecr-public",
        jsonVersion: "1.1",
        protocol: "json",
        serviceAbbreviation: "Amazon ECR Public",
        serviceFullName: "Amazon Elastic Container Registry Public",
        serviceId: "ECR PUBLIC",
        signatureVersion: "v4",
        signingName: "ecr-public",
        targetPrefix: "SpencerFrontendService",
        uid: "ecr-public-2020-10-30"
    },
    operations: {
        BatchCheckLayerAvailability: {
            input: {
                type: "structure",
                required: [ "repositoryName", "layerDigests" ],
                members: {
                    registryId: {},
                    repositoryName: {},
                    layerDigests: {
                        type: "list",
                        member: {}
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    layers: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                layerDigest: {},
                                layerAvailability: {},
                                layerSize: {
                                    type: "long"
                                },
                                mediaType: {}
                            }
                        }
                    },
                    failures: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                layerDigest: {},
                                failureCode: {},
                                failureReason: {}
                            }
                        }
                    }
                }
            }
        },
        BatchDeleteImage: {
            input: {
                type: "structure",
                required: [ "repositoryName", "imageIds" ],
                members: {
                    registryId: {},
                    repositoryName: {},
                    imageIds: {
                        shape: "Sj"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    imageIds: {
                        shape: "Sj"
                    },
                    failures: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                imageId: {
                                    shape: "Sk"
                                },
                                failureCode: {},
                                failureReason: {}
                            }
                        }
                    }
                }
            }
        },
        CompleteLayerUpload: {
            input: {
                type: "structure",
                required: [ "repositoryName", "uploadId", "layerDigests" ],
                members: {
                    registryId: {},
                    repositoryName: {},
                    uploadId: {},
                    layerDigests: {
                        type: "list",
                        member: {}
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    registryId: {},
                    repositoryName: {},
                    uploadId: {},
                    layerDigest: {}
                }
            }
        },
        CreateRepository: {
            input: {
                type: "structure",
                required: [ "repositoryName" ],
                members: {
                    repositoryName: {},
                    catalogData: {
                        shape: "Sx"
                    },
                    tags: {
                        shape: "S16"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    repository: {
                        shape: "S1b"
                    },
                    catalogData: {
                        shape: "S1f"
                    }
                }
            }
        },
        DeleteRepository: {
            input: {
                type: "structure",
                required: [ "repositoryName" ],
                members: {
                    registryId: {},
                    repositoryName: {},
                    force: {
                        type: "boolean"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    repository: {
                        shape: "S1b"
                    }
                }
            }
        },
        DeleteRepositoryPolicy: {
            input: {
                type: "structure",
                required: [ "repositoryName" ],
                members: {
                    registryId: {},
                    repositoryName: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    registryId: {},
                    repositoryName: {},
                    policyText: {}
                }
            }
        },
        DescribeImageTags: {
            input: {
                type: "structure",
                required: [ "repositoryName" ],
                members: {
                    registryId: {},
                    repositoryName: {},
                    nextToken: {},
                    maxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    imageTagDetails: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                imageTag: {},
                                createdAt: {
                                    type: "timestamp"
                                },
                                imageDetail: {
                                    type: "structure",
                                    members: {
                                        imageDigest: {},
                                        imageSizeInBytes: {
                                            type: "long"
                                        },
                                        imagePushedAt: {
                                            type: "timestamp"
                                        },
                                        imageManifestMediaType: {},
                                        artifactMediaType: {}
                                    }
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        DescribeImages: {
            input: {
                type: "structure",
                required: [ "repositoryName" ],
                members: {
                    registryId: {},
                    repositoryName: {},
                    imageIds: {
                        shape: "Sj"
                    },
                    nextToken: {},
                    maxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    imageDetails: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                registryId: {},
                                repositoryName: {},
                                imageDigest: {},
                                imageTags: {
                                    type: "list",
                                    member: {}
                                },
                                imageSizeInBytes: {
                                    type: "long"
                                },
                                imagePushedAt: {
                                    type: "timestamp"
                                },
                                imageManifestMediaType: {},
                                artifactMediaType: {}
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        DescribeRegistries: {
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
                required: [ "registries" ],
                members: {
                    registries: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "registryId", "registryArn", "registryUri", "verified", "aliases" ],
                            members: {
                                registryId: {},
                                registryArn: {},
                                registryUri: {},
                                verified: {
                                    type: "boolean"
                                },
                                aliases: {
                                    type: "list",
                                    member: {
                                        type: "structure",
                                        required: [ "name", "status", "primaryRegistryAlias", "defaultRegistryAlias" ],
                                        members: {
                                            name: {},
                                            status: {},
                                            primaryRegistryAlias: {
                                                type: "boolean"
                                            },
                                            defaultRegistryAlias: {
                                                type: "boolean"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        DescribeRepositories: {
            input: {
                type: "structure",
                members: {
                    registryId: {},
                    repositoryNames: {
                        type: "list",
                        member: {}
                    },
                    nextToken: {},
                    maxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    repositories: {
                        type: "list",
                        member: {
                            shape: "S1b"
                        }
                    },
                    nextToken: {}
                }
            }
        },
        GetAuthorizationToken: {
            input: {
                type: "structure",
                members: {}
            },
            output: {
                type: "structure",
                members: {
                    authorizationData: {
                        type: "structure",
                        members: {
                            authorizationToken: {},
                            expiresAt: {
                                type: "timestamp"
                            }
                        }
                    }
                }
            }
        },
        GetRegistryCatalogData: {
            input: {
                type: "structure",
                members: {}
            },
            output: {
                type: "structure",
                required: [ "registryCatalogData" ],
                members: {
                    registryCatalogData: {
                        shape: "S2o"
                    }
                }
            }
        },
        GetRepositoryCatalogData: {
            input: {
                type: "structure",
                required: [ "repositoryName" ],
                members: {
                    registryId: {},
                    repositoryName: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    catalogData: {
                        shape: "S1f"
                    }
                }
            }
        },
        GetRepositoryPolicy: {
            input: {
                type: "structure",
                required: [ "repositoryName" ],
                members: {
                    registryId: {},
                    repositoryName: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    registryId: {},
                    repositoryName: {},
                    policyText: {}
                }
            }
        },
        InitiateLayerUpload: {
            input: {
                type: "structure",
                required: [ "repositoryName" ],
                members: {
                    registryId: {},
                    repositoryName: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    uploadId: {},
                    partSize: {
                        type: "long"
                    }
                }
            }
        },
        ListTagsForResource: {
            input: {
                type: "structure",
                required: [ "resourceArn" ],
                members: {
                    resourceArn: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    tags: {
                        shape: "S16"
                    }
                }
            }
        },
        PutImage: {
            input: {
                type: "structure",
                required: [ "repositoryName", "imageManifest" ],
                members: {
                    registryId: {},
                    repositoryName: {},
                    imageManifest: {},
                    imageManifestMediaType: {},
                    imageTag: {},
                    imageDigest: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    image: {
                        type: "structure",
                        members: {
                            registryId: {},
                            repositoryName: {},
                            imageId: {
                                shape: "Sk"
                            },
                            imageManifest: {},
                            imageManifestMediaType: {}
                        }
                    }
                }
            }
        },
        PutRegistryCatalogData: {
            input: {
                type: "structure",
                members: {
                    displayName: {}
                }
            },
            output: {
                type: "structure",
                required: [ "registryCatalogData" ],
                members: {
                    registryCatalogData: {
                        shape: "S2o"
                    }
                }
            }
        },
        PutRepositoryCatalogData: {
            input: {
                type: "structure",
                required: [ "repositoryName", "catalogData" ],
                members: {
                    registryId: {},
                    repositoryName: {},
                    catalogData: {
                        shape: "Sx"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    catalogData: {
                        shape: "S1f"
                    }
                }
            }
        },
        SetRepositoryPolicy: {
            input: {
                type: "structure",
                required: [ "repositoryName", "policyText" ],
                members: {
                    registryId: {},
                    repositoryName: {},
                    policyText: {},
                    force: {
                        type: "boolean"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    registryId: {},
                    repositoryName: {},
                    policyText: {}
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
                        shape: "S16"
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
                required: [ "resourceArn", "tagKeys" ],
                members: {
                    resourceArn: {},
                    tagKeys: {
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
        UploadLayerPart: {
            input: {
                type: "structure",
                required: [ "repositoryName", "uploadId", "partFirstByte", "partLastByte", "layerPartBlob" ],
                members: {
                    registryId: {},
                    repositoryName: {},
                    uploadId: {},
                    partFirstByte: {
                        type: "long"
                    },
                    partLastByte: {
                        type: "long"
                    },
                    layerPartBlob: {
                        type: "blob"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    registryId: {},
                    repositoryName: {},
                    uploadId: {},
                    lastByteReceived: {
                        type: "long"
                    }
                }
            }
        }
    },
    shapes: {
        Sj: {
            type: "list",
            member: {
                shape: "Sk"
            }
        },
        Sk: {
            type: "structure",
            members: {
                imageDigest: {},
                imageTag: {}
            }
        },
        Sx: {
            type: "structure",
            members: {
                description: {},
                architectures: {
                    shape: "Sz"
                },
                operatingSystems: {
                    shape: "S11"
                },
                logoImageBlob: {
                    type: "blob"
                },
                aboutText: {},
                usageText: {}
            }
        },
        Sz: {
            type: "list",
            member: {}
        },
        S11: {
            type: "list",
            member: {}
        },
        S16: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    Key: {},
                    Value: {}
                }
            }
        },
        S1b: {
            type: "structure",
            members: {
                repositoryArn: {},
                registryId: {},
                repositoryName: {},
                repositoryUri: {},
                createdAt: {
                    type: "timestamp"
                }
            }
        },
        S1f: {
            type: "structure",
            members: {
                description: {},
                architectures: {
                    shape: "Sz"
                },
                operatingSystems: {
                    shape: "S11"
                },
                logoUrl: {},
                aboutText: {},
                usageText: {},
                marketplaceCertified: {
                    type: "boolean"
                }
            }
        },
        S2o: {
            type: "structure",
            members: {
                displayName: {}
            }
        }
    },
    paginators: {
        DescribeImageTags: {
            input_token: "nextToken",
            limit_key: "maxResults",
            output_token: "nextToken",
            result_key: "imageTagDetails"
        },
        DescribeImages: {
            input_token: "nextToken",
            limit_key: "maxResults",
            output_token: "nextToken",
            result_key: "imageDetails"
        },
        DescribeRegistries: {
            input_token: "nextToken",
            limit_key: "maxResults",
            output_token: "nextToken",
            result_key: "registries"
        },
        DescribeRepositories: {
            input_token: "nextToken",
            limit_key: "maxResults",
            output_token: "nextToken",
            result_key: "repositories"
        }
    }
};

AWS.apiLoader.services["lookoutvision"] = {};

AWS.LookoutVision = AWS.Service.defineService("lookoutvision", [ "2020-11-20" ]);

AWS.apiLoader.services["lookoutvision"]["2020-11-20"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-11-20",
        endpointPrefix: "lookoutvision",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceFullName: "Amazon Lookout for Vision",
        serviceId: "LookoutVision",
        signatureVersion: "v4",
        signingName: "lookoutvision",
        uid: "lookoutvision-2020-11-20"
    },
    operations: {
        CreateDataset: {
            http: {
                requestUri: "/2020-11-20/projects/{projectName}/datasets",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "ProjectName", "DatasetType" ],
                members: {
                    ProjectName: {
                        location: "uri",
                        locationName: "projectName"
                    },
                    DatasetType: {},
                    DatasetSource: {
                        type: "structure",
                        members: {
                            GroundTruthManifest: {
                                type: "structure",
                                members: {
                                    S3Object: {
                                        type: "structure",
                                        required: [ "Bucket", "Key" ],
                                        members: {
                                            Bucket: {},
                                            Key: {},
                                            VersionId: {}
                                        }
                                    }
                                }
                            }
                        }
                    },
                    ClientToken: {
                        idempotencyToken: true,
                        location: "header",
                        locationName: "X-Amzn-Client-Token"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    DatasetMetadata: {
                        shape: "Sc"
                    }
                }
            }
        },
        CreateModel: {
            http: {
                requestUri: "/2020-11-20/projects/{projectName}/models",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "ProjectName", "OutputConfig" ],
                members: {
                    ProjectName: {
                        location: "uri",
                        locationName: "projectName"
                    },
                    Description: {},
                    ClientToken: {
                        idempotencyToken: true,
                        location: "header",
                        locationName: "X-Amzn-Client-Token"
                    },
                    OutputConfig: {
                        shape: "Si"
                    },
                    KmsKeyId: {},
                    Tags: {
                        shape: "Sm"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    ModelMetadata: {
                        shape: "Sr"
                    }
                }
            }
        },
        CreateProject: {
            http: {
                requestUri: "/2020-11-20/projects"
            },
            input: {
                type: "structure",
                required: [ "ProjectName" ],
                members: {
                    ProjectName: {},
                    ClientToken: {
                        idempotencyToken: true,
                        location: "header",
                        locationName: "X-Amzn-Client-Token"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    ProjectMetadata: {
                        shape: "S10"
                    }
                }
            }
        },
        DeleteDataset: {
            http: {
                method: "DELETE",
                requestUri: "/2020-11-20/projects/{projectName}/datasets/{datasetType}",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "ProjectName", "DatasetType" ],
                members: {
                    ProjectName: {
                        location: "uri",
                        locationName: "projectName"
                    },
                    DatasetType: {
                        location: "uri",
                        locationName: "datasetType"
                    },
                    ClientToken: {
                        idempotencyToken: true,
                        location: "header",
                        locationName: "X-Amzn-Client-Token"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DeleteModel: {
            http: {
                method: "DELETE",
                requestUri: "/2020-11-20/projects/{projectName}/models/{modelVersion}",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "ProjectName", "ModelVersion" ],
                members: {
                    ProjectName: {
                        location: "uri",
                        locationName: "projectName"
                    },
                    ModelVersion: {
                        location: "uri",
                        locationName: "modelVersion"
                    },
                    ClientToken: {
                        idempotencyToken: true,
                        location: "header",
                        locationName: "X-Amzn-Client-Token"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    ModelArn: {}
                }
            }
        },
        DeleteProject: {
            http: {
                method: "DELETE",
                requestUri: "/2020-11-20/projects/{projectName}"
            },
            input: {
                type: "structure",
                required: [ "ProjectName" ],
                members: {
                    ProjectName: {
                        location: "uri",
                        locationName: "projectName"
                    },
                    ClientToken: {
                        idempotencyToken: true,
                        location: "header",
                        locationName: "X-Amzn-Client-Token"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    ProjectArn: {}
                }
            }
        },
        DescribeDataset: {
            http: {
                method: "GET",
                requestUri: "/2020-11-20/projects/{projectName}/datasets/{datasetType}"
            },
            input: {
                type: "structure",
                required: [ "ProjectName", "DatasetType" ],
                members: {
                    ProjectName: {
                        location: "uri",
                        locationName: "projectName"
                    },
                    DatasetType: {
                        location: "uri",
                        locationName: "datasetType"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    DatasetDescription: {
                        type: "structure",
                        members: {
                            ProjectName: {},
                            DatasetType: {},
                            CreationTimestamp: {
                                type: "timestamp"
                            },
                            LastUpdatedTimestamp: {
                                type: "timestamp"
                            },
                            Status: {},
                            StatusMessage: {},
                            ImageStats: {
                                type: "structure",
                                members: {
                                    Total: {
                                        type: "integer"
                                    },
                                    Labeled: {
                                        type: "integer"
                                    },
                                    Normal: {
                                        type: "integer"
                                    },
                                    Anomaly: {
                                        type: "integer"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        DescribeModel: {
            http: {
                method: "GET",
                requestUri: "/2020-11-20/projects/{projectName}/models/{modelVersion}"
            },
            input: {
                type: "structure",
                required: [ "ProjectName", "ModelVersion" ],
                members: {
                    ProjectName: {
                        location: "uri",
                        locationName: "projectName"
                    },
                    ModelVersion: {
                        location: "uri",
                        locationName: "modelVersion"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    ModelDescription: {
                        type: "structure",
                        members: {
                            ModelVersion: {},
                            ModelArn: {},
                            CreationTimestamp: {
                                type: "timestamp"
                            },
                            Description: {},
                            Status: {},
                            StatusMessage: {},
                            Performance: {
                                shape: "Sw"
                            },
                            OutputConfig: {
                                shape: "Si"
                            },
                            EvaluationManifest: {
                                shape: "S1g"
                            },
                            EvaluationResult: {
                                shape: "S1g"
                            },
                            EvaluationEndTimestamp: {
                                type: "timestamp"
                            },
                            KmsKeyId: {}
                        }
                    }
                }
            }
        },
        DescribeProject: {
            http: {
                method: "GET",
                requestUri: "/2020-11-20/projects/{projectName}"
            },
            input: {
                type: "structure",
                required: [ "ProjectName" ],
                members: {
                    ProjectName: {
                        location: "uri",
                        locationName: "projectName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    ProjectDescription: {
                        type: "structure",
                        members: {
                            ProjectArn: {},
                            ProjectName: {},
                            CreationTimestamp: {
                                type: "timestamp"
                            },
                            Datasets: {
                                type: "list",
                                member: {
                                    shape: "Sc"
                                }
                            }
                        }
                    }
                }
            }
        },
        DetectAnomalies: {
            http: {
                requestUri: "/2020-11-20/projects/{projectName}/models/{modelVersion}/detect"
            },
            input: {
                type: "structure",
                required: [ "ProjectName", "ModelVersion", "Body", "ContentType" ],
                members: {
                    ProjectName: {
                        location: "uri",
                        locationName: "projectName"
                    },
                    ModelVersion: {
                        location: "uri",
                        locationName: "modelVersion"
                    },
                    Body: {
                        type: "blob",
                        requiresLength: true,
                        streaming: true
                    },
                    ContentType: {
                        location: "header",
                        locationName: "Content-Type"
                    }
                },
                payload: "Body"
            },
            output: {
                type: "structure",
                members: {
                    DetectAnomalyResult: {
                        type: "structure",
                        members: {
                            Source: {
                                type: "structure",
                                members: {
                                    Type: {}
                                }
                            },
                            IsAnomalous: {
                                type: "boolean"
                            },
                            Confidence: {
                                type: "float"
                            }
                        }
                    }
                }
            }
        },
        ListDatasetEntries: {
            http: {
                method: "GET",
                requestUri: "/2020-11-20/projects/{projectName}/datasets/{datasetType}/entries"
            },
            input: {
                type: "structure",
                required: [ "ProjectName", "DatasetType" ],
                members: {
                    ProjectName: {
                        location: "uri",
                        locationName: "projectName"
                    },
                    DatasetType: {
                        location: "uri",
                        locationName: "datasetType"
                    },
                    Labeled: {
                        location: "querystring",
                        locationName: "labeled",
                        type: "boolean"
                    },
                    AnomalyClass: {
                        location: "querystring",
                        locationName: "anomalyClass"
                    },
                    BeforeCreationDate: {
                        location: "querystring",
                        locationName: "createdBefore",
                        type: "timestamp"
                    },
                    AfterCreationDate: {
                        location: "querystring",
                        locationName: "createdAfter",
                        type: "timestamp"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    },
                    SourceRefContains: {
                        location: "querystring",
                        locationName: "sourceRefContains"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    DatasetEntries: {
                        type: "list",
                        member: {}
                    },
                    NextToken: {}
                }
            }
        },
        ListModels: {
            http: {
                method: "GET",
                requestUri: "/2020-11-20/projects/{projectName}/models"
            },
            input: {
                type: "structure",
                required: [ "ProjectName" ],
                members: {
                    ProjectName: {
                        location: "uri",
                        locationName: "projectName"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Models: {
                        type: "list",
                        member: {
                            shape: "Sr"
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListProjects: {
            http: {
                method: "GET",
                requestUri: "/2020-11-20/projects"
            },
            input: {
                type: "structure",
                members: {
                    NextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Projects: {
                        type: "list",
                        member: {
                            shape: "S10"
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListTagsForResource: {
            http: {
                method: "GET",
                requestUri: "/2020-11-20/tags/{resourceArn}"
            },
            input: {
                type: "structure",
                required: [ "ResourceArn" ],
                members: {
                    ResourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Tags: {
                        shape: "Sm"
                    }
                }
            }
        },
        StartModel: {
            http: {
                requestUri: "/2020-11-20/projects/{projectName}/models/{modelVersion}/start",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "ProjectName", "ModelVersion", "MinInferenceUnits" ],
                members: {
                    ProjectName: {
                        location: "uri",
                        locationName: "projectName"
                    },
                    ModelVersion: {
                        location: "uri",
                        locationName: "modelVersion"
                    },
                    MinInferenceUnits: {
                        type: "integer"
                    },
                    ClientToken: {
                        idempotencyToken: true,
                        location: "header",
                        locationName: "X-Amzn-Client-Token"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Status: {}
                }
            }
        },
        StopModel: {
            http: {
                requestUri: "/2020-11-20/projects/{projectName}/models/{modelVersion}/stop",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "ProjectName", "ModelVersion" ],
                members: {
                    ProjectName: {
                        location: "uri",
                        locationName: "projectName"
                    },
                    ModelVersion: {
                        location: "uri",
                        locationName: "modelVersion"
                    },
                    ClientToken: {
                        idempotencyToken: true,
                        location: "header",
                        locationName: "X-Amzn-Client-Token"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Status: {}
                }
            }
        },
        TagResource: {
            http: {
                requestUri: "/2020-11-20/tags/{resourceArn}"
            },
            input: {
                type: "structure",
                required: [ "ResourceArn", "Tags" ],
                members: {
                    ResourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    Tags: {
                        shape: "Sm"
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
                requestUri: "/2020-11-20/tags/{resourceArn}"
            },
            input: {
                type: "structure",
                required: [ "ResourceArn", "TagKeys" ],
                members: {
                    ResourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
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
        UpdateDatasetEntries: {
            http: {
                method: "PATCH",
                requestUri: "/2020-11-20/projects/{projectName}/datasets/{datasetType}/entries",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "ProjectName", "DatasetType", "Changes" ],
                members: {
                    ProjectName: {
                        location: "uri",
                        locationName: "projectName"
                    },
                    DatasetType: {
                        location: "uri",
                        locationName: "datasetType"
                    },
                    Changes: {
                        type: "blob"
                    },
                    ClientToken: {
                        idempotencyToken: true,
                        location: "header",
                        locationName: "X-Amzn-Client-Token"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Status: {}
                }
            }
        }
    },
    shapes: {
        Sc: {
            type: "structure",
            members: {
                DatasetType: {},
                CreationTimestamp: {
                    type: "timestamp"
                },
                Status: {},
                StatusMessage: {}
            }
        },
        Si: {
            type: "structure",
            required: [ "S3Location" ],
            members: {
                S3Location: {
                    type: "structure",
                    required: [ "Bucket" ],
                    members: {
                        Bucket: {},
                        Prefix: {}
                    }
                }
            }
        },
        Sm: {
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
        Sr: {
            type: "structure",
            members: {
                CreationTimestamp: {
                    type: "timestamp"
                },
                ModelVersion: {},
                ModelArn: {},
                Description: {},
                Status: {},
                StatusMessage: {},
                Performance: {
                    shape: "Sw"
                }
            }
        },
        Sw: {
            type: "structure",
            members: {
                F1Score: {
                    type: "float"
                },
                Recall: {
                    type: "float"
                },
                Precision: {
                    type: "float"
                }
            }
        },
        S10: {
            type: "structure",
            members: {
                ProjectArn: {},
                ProjectName: {},
                CreationTimestamp: {
                    type: "timestamp"
                }
            }
        },
        S1g: {
            type: "structure",
            required: [ "Bucket", "Key" ],
            members: {
                Bucket: {},
                Key: {}
            }
        }
    },
    paginators: {
        ListDatasetEntries: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "DatasetEntries"
        },
        ListModels: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "Models"
        },
        ListProjects: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "Projects"
        }
    }
};

AWS.apiLoader.services["sagemakerfeaturestoreruntime"] = {};

AWS.SageMakerFeatureStoreRuntime = AWS.Service.defineService("sagemakerfeaturestoreruntime", [ "2020-07-01" ]);

AWS.apiLoader.services["sagemakerfeaturestoreruntime"]["2020-07-01"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-07-01",
        endpointPrefix: "featurestore-runtime.sagemaker",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceFullName: "Amazon SageMaker Feature Store Runtime",
        serviceId: "SageMaker FeatureStore Runtime",
        signatureVersion: "v4",
        signingName: "sagemaker",
        uid: "sagemaker-featurestore-runtime-2020-07-01"
    },
    operations: {
        DeleteRecord: {
            http: {
                method: "DELETE",
                requestUri: "/FeatureGroup/{FeatureGroupName}"
            },
            input: {
                type: "structure",
                required: [ "FeatureGroupName", "RecordIdentifierValueAsString", "EventTime" ],
                members: {
                    FeatureGroupName: {
                        location: "uri",
                        locationName: "FeatureGroupName"
                    },
                    RecordIdentifierValueAsString: {
                        location: "querystring",
                        locationName: "RecordIdentifierValueAsString"
                    },
                    EventTime: {
                        location: "querystring",
                        locationName: "EventTime"
                    }
                }
            }
        },
        GetRecord: {
            http: {
                method: "GET",
                requestUri: "/FeatureGroup/{FeatureGroupName}"
            },
            input: {
                type: "structure",
                required: [ "FeatureGroupName", "RecordIdentifierValueAsString" ],
                members: {
                    FeatureGroupName: {
                        location: "uri",
                        locationName: "FeatureGroupName"
                    },
                    RecordIdentifierValueAsString: {
                        location: "querystring",
                        locationName: "RecordIdentifierValueAsString"
                    },
                    FeatureNames: {
                        location: "querystring",
                        locationName: "FeatureName",
                        type: "list",
                        member: {}
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Record: {
                        shape: "S8"
                    }
                }
            }
        },
        PutRecord: {
            http: {
                method: "PUT",
                requestUri: "/FeatureGroup/{FeatureGroupName}"
            },
            input: {
                type: "structure",
                required: [ "FeatureGroupName", "Record" ],
                members: {
                    FeatureGroupName: {
                        location: "uri",
                        locationName: "FeatureGroupName"
                    },
                    Record: {
                        shape: "S8"
                    }
                }
            }
        }
    },
    shapes: {
        S8: {
            type: "list",
            member: {
                type: "structure",
                required: [ "FeatureName", "ValueAsString" ],
                members: {
                    FeatureName: {},
                    ValueAsString: {}
                }
            }
        }
    },
    paginators: {}
};

AWS.apiLoader.services["customerprofiles"] = {};

AWS.CustomerProfiles = AWS.Service.defineService("customerprofiles", [ "2020-08-15" ]);

AWS.apiLoader.services["customerprofiles"]["2020-08-15"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-08-15",
        endpointPrefix: "profile",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceAbbreviation: "Customer Profiles",
        serviceFullName: "Amazon Connect Customer Profiles",
        serviceId: "Customer Profiles",
        signatureVersion: "v4",
        signingName: "profile",
        uid: "customer-profiles-2020-08-15"
    },
    operations: {
        AddProfileKey: {
            http: {
                requestUri: "/domains/{DomainName}/profiles/keys"
            },
            input: {
                type: "structure",
                required: [ "ProfileId", "KeyName", "Values", "DomainName" ],
                members: {
                    ProfileId: {},
                    KeyName: {},
                    Values: {
                        shape: "S4"
                    },
                    DomainName: {
                        location: "uri",
                        locationName: "DomainName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    KeyName: {},
                    Values: {
                        shape: "S4"
                    }
                }
            }
        },
        CreateDomain: {
            http: {
                requestUri: "/domains/{DomainName}"
            },
            input: {
                type: "structure",
                required: [ "DomainName", "DefaultExpirationDays" ],
                members: {
                    DomainName: {
                        location: "uri",
                        locationName: "DomainName"
                    },
                    DefaultExpirationDays: {
                        type: "integer"
                    },
                    DefaultEncryptionKey: {},
                    DeadLetterQueueUrl: {},
                    Matching: {
                        shape: "Sb"
                    },
                    Tags: {
                        shape: "Sd"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "DomainName", "DefaultExpirationDays", "CreatedAt", "LastUpdatedAt" ],
                members: {
                    DomainName: {},
                    DefaultExpirationDays: {
                        type: "integer"
                    },
                    DefaultEncryptionKey: {},
                    DeadLetterQueueUrl: {},
                    Matching: {
                        shape: "Sh"
                    },
                    CreatedAt: {
                        type: "timestamp"
                    },
                    LastUpdatedAt: {
                        type: "timestamp"
                    },
                    Tags: {
                        shape: "Sd"
                    }
                }
            }
        },
        CreateProfile: {
            http: {
                requestUri: "/domains/{DomainName}/profiles"
            },
            input: {
                type: "structure",
                required: [ "DomainName" ],
                members: {
                    DomainName: {
                        location: "uri",
                        locationName: "DomainName"
                    },
                    AccountNumber: {},
                    AdditionalInformation: {},
                    PartyType: {},
                    BusinessName: {},
                    FirstName: {},
                    MiddleName: {},
                    LastName: {},
                    BirthDate: {},
                    Gender: {},
                    PhoneNumber: {},
                    MobilePhoneNumber: {},
                    HomePhoneNumber: {},
                    BusinessPhoneNumber: {},
                    EmailAddress: {},
                    PersonalEmailAddress: {},
                    BusinessEmailAddress: {},
                    Address: {
                        shape: "Sn"
                    },
                    ShippingAddress: {
                        shape: "Sn"
                    },
                    MailingAddress: {
                        shape: "Sn"
                    },
                    BillingAddress: {
                        shape: "Sn"
                    },
                    Attributes: {
                        shape: "So"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "ProfileId" ],
                members: {
                    ProfileId: {}
                }
            }
        },
        DeleteDomain: {
            http: {
                method: "DELETE",
                requestUri: "/domains/{DomainName}"
            },
            input: {
                type: "structure",
                required: [ "DomainName" ],
                members: {
                    DomainName: {
                        location: "uri",
                        locationName: "DomainName"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "Message" ],
                members: {
                    Message: {}
                }
            }
        },
        DeleteIntegration: {
            http: {
                requestUri: "/domains/{DomainName}/integrations/delete"
            },
            input: {
                type: "structure",
                required: [ "DomainName", "Uri" ],
                members: {
                    DomainName: {
                        location: "uri",
                        locationName: "DomainName"
                    },
                    Uri: {}
                }
            },
            output: {
                type: "structure",
                required: [ "Message" ],
                members: {
                    Message: {}
                }
            }
        },
        DeleteProfile: {
            http: {
                requestUri: "/domains/{DomainName}/profiles/delete"
            },
            input: {
                type: "structure",
                required: [ "ProfileId", "DomainName" ],
                members: {
                    ProfileId: {},
                    DomainName: {
                        location: "uri",
                        locationName: "DomainName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Message: {}
                }
            }
        },
        DeleteProfileKey: {
            http: {
                requestUri: "/domains/{DomainName}/profiles/keys/delete"
            },
            input: {
                type: "structure",
                required: [ "ProfileId", "KeyName", "Values", "DomainName" ],
                members: {
                    ProfileId: {},
                    KeyName: {},
                    Values: {
                        shape: "S4"
                    },
                    DomainName: {
                        location: "uri",
                        locationName: "DomainName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Message: {}
                }
            }
        },
        DeleteProfileObject: {
            http: {
                requestUri: "/domains/{DomainName}/profiles/objects/delete"
            },
            input: {
                type: "structure",
                required: [ "ProfileId", "ProfileObjectUniqueKey", "ObjectTypeName", "DomainName" ],
                members: {
                    ProfileId: {},
                    ProfileObjectUniqueKey: {},
                    ObjectTypeName: {},
                    DomainName: {
                        location: "uri",
                        locationName: "DomainName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Message: {}
                }
            }
        },
        DeleteProfileObjectType: {
            http: {
                method: "DELETE",
                requestUri: "/domains/{DomainName}/object-types/{ObjectTypeName}"
            },
            input: {
                type: "structure",
                required: [ "DomainName", "ObjectTypeName" ],
                members: {
                    DomainName: {
                        location: "uri",
                        locationName: "DomainName"
                    },
                    ObjectTypeName: {
                        location: "uri",
                        locationName: "ObjectTypeName"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "Message" ],
                members: {
                    Message: {}
                }
            }
        },
        GetDomain: {
            http: {
                method: "GET",
                requestUri: "/domains/{DomainName}"
            },
            input: {
                type: "structure",
                required: [ "DomainName" ],
                members: {
                    DomainName: {
                        location: "uri",
                        locationName: "DomainName"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "DomainName", "CreatedAt", "LastUpdatedAt" ],
                members: {
                    DomainName: {},
                    DefaultExpirationDays: {
                        type: "integer"
                    },
                    DefaultEncryptionKey: {},
                    DeadLetterQueueUrl: {},
                    Stats: {
                        type: "structure",
                        members: {
                            ProfileCount: {
                                type: "long"
                            },
                            MeteringProfileCount: {
                                type: "long"
                            },
                            ObjectCount: {
                                type: "long"
                            },
                            TotalSize: {
                                type: "long"
                            }
                        }
                    },
                    Matching: {
                        shape: "Sh"
                    },
                    CreatedAt: {
                        type: "timestamp"
                    },
                    LastUpdatedAt: {
                        type: "timestamp"
                    },
                    Tags: {
                        shape: "Sd"
                    }
                }
            }
        },
        GetIntegration: {
            http: {
                requestUri: "/domains/{DomainName}/integrations"
            },
            input: {
                type: "structure",
                required: [ "DomainName", "Uri" ],
                members: {
                    DomainName: {
                        location: "uri",
                        locationName: "DomainName"
                    },
                    Uri: {}
                }
            },
            output: {
                type: "structure",
                required: [ "DomainName", "Uri", "ObjectTypeName", "CreatedAt", "LastUpdatedAt" ],
                members: {
                    DomainName: {},
                    Uri: {},
                    ObjectTypeName: {},
                    CreatedAt: {
                        type: "timestamp"
                    },
                    LastUpdatedAt: {
                        type: "timestamp"
                    },
                    Tags: {
                        shape: "Sd"
                    }
                }
            }
        },
        GetMatches: {
            http: {
                method: "GET",
                requestUri: "/domains/{DomainName}/matches"
            },
            input: {
                type: "structure",
                required: [ "DomainName" ],
                members: {
                    NextToken: {
                        location: "querystring",
                        locationName: "next-token"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "max-results",
                        type: "integer"
                    },
                    DomainName: {
                        location: "uri",
                        locationName: "DomainName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    NextToken: {},
                    MatchGenerationDate: {
                        type: "timestamp"
                    },
                    PotentialMatches: {
                        type: "integer"
                    },
                    Matches: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                MatchId: {},
                                ProfileIds: {
                                    type: "list",
                                    member: {}
                                }
                            }
                        }
                    }
                }
            }
        },
        GetProfileObjectType: {
            http: {
                method: "GET",
                requestUri: "/domains/{DomainName}/object-types/{ObjectTypeName}"
            },
            input: {
                type: "structure",
                required: [ "DomainName", "ObjectTypeName" ],
                members: {
                    DomainName: {
                        location: "uri",
                        locationName: "DomainName"
                    },
                    ObjectTypeName: {
                        location: "uri",
                        locationName: "ObjectTypeName"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "ObjectTypeName", "Description" ],
                members: {
                    ObjectTypeName: {},
                    Description: {},
                    TemplateId: {},
                    ExpirationDays: {
                        type: "integer"
                    },
                    EncryptionKey: {},
                    AllowProfileCreation: {
                        type: "boolean"
                    },
                    Fields: {
                        shape: "S1m"
                    },
                    Keys: {
                        shape: "S1p"
                    },
                    CreatedAt: {
                        type: "timestamp"
                    },
                    LastUpdatedAt: {
                        type: "timestamp"
                    },
                    Tags: {
                        shape: "Sd"
                    }
                }
            }
        },
        GetProfileObjectTypeTemplate: {
            http: {
                method: "GET",
                requestUri: "/templates/{TemplateId}"
            },
            input: {
                type: "structure",
                required: [ "TemplateId" ],
                members: {
                    TemplateId: {
                        location: "uri",
                        locationName: "TemplateId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    TemplateId: {},
                    SourceName: {},
                    SourceObject: {},
                    AllowProfileCreation: {
                        type: "boolean"
                    },
                    Fields: {
                        shape: "S1m"
                    },
                    Keys: {
                        shape: "S1p"
                    }
                }
            }
        },
        ListAccountIntegrations: {
            http: {
                requestUri: "/integrations"
            },
            input: {
                type: "structure",
                required: [ "Uri" ],
                members: {
                    Uri: {},
                    NextToken: {
                        location: "querystring",
                        locationName: "next-token"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "max-results",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Items: {
                        shape: "S1z"
                    },
                    NextToken: {}
                }
            }
        },
        ListDomains: {
            http: {
                method: "GET",
                requestUri: "/domains"
            },
            input: {
                type: "structure",
                members: {
                    NextToken: {
                        location: "querystring",
                        locationName: "next-token"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "max-results",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Items: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "DomainName", "CreatedAt", "LastUpdatedAt" ],
                            members: {
                                DomainName: {},
                                CreatedAt: {
                                    type: "timestamp"
                                },
                                LastUpdatedAt: {
                                    type: "timestamp"
                                },
                                Tags: {
                                    shape: "Sd"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListIntegrations: {
            http: {
                method: "GET",
                requestUri: "/domains/{DomainName}/integrations"
            },
            input: {
                type: "structure",
                required: [ "DomainName" ],
                members: {
                    DomainName: {
                        location: "uri",
                        locationName: "DomainName"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "next-token"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "max-results",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Items: {
                        shape: "S1z"
                    },
                    NextToken: {}
                }
            }
        },
        ListProfileObjectTypeTemplates: {
            http: {
                method: "GET",
                requestUri: "/templates"
            },
            input: {
                type: "structure",
                members: {
                    NextToken: {
                        location: "querystring",
                        locationName: "next-token"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "max-results",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Items: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                TemplateId: {},
                                SourceName: {},
                                SourceObject: {}
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListProfileObjectTypes: {
            http: {
                method: "GET",
                requestUri: "/domains/{DomainName}/object-types"
            },
            input: {
                type: "structure",
                required: [ "DomainName" ],
                members: {
                    DomainName: {
                        location: "uri",
                        locationName: "DomainName"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "next-token"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "max-results",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Items: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "ObjectTypeName", "Description" ],
                            members: {
                                ObjectTypeName: {},
                                Description: {},
                                CreatedAt: {
                                    type: "timestamp"
                                },
                                LastUpdatedAt: {
                                    type: "timestamp"
                                },
                                Tags: {
                                    shape: "Sd"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListProfileObjects: {
            http: {
                requestUri: "/domains/{DomainName}/profiles/objects"
            },
            input: {
                type: "structure",
                required: [ "DomainName", "ObjectTypeName", "ProfileId" ],
                members: {
                    NextToken: {
                        location: "querystring",
                        locationName: "next-token"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "max-results",
                        type: "integer"
                    },
                    DomainName: {
                        location: "uri",
                        locationName: "DomainName"
                    },
                    ObjectTypeName: {},
                    ProfileId: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    Items: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                ObjectTypeName: {},
                                ProfileObjectUniqueKey: {},
                                Object: {}
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
                requestUri: "/tags/{resourceArn}"
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
                        shape: "Sd"
                    }
                }
            }
        },
        MergeProfiles: {
            http: {
                requestUri: "/domains/{DomainName}/profiles/objects/merge"
            },
            input: {
                type: "structure",
                required: [ "DomainName", "MainProfileId", "ProfileIdsToBeMerged" ],
                members: {
                    DomainName: {
                        location: "uri",
                        locationName: "DomainName"
                    },
                    MainProfileId: {},
                    ProfileIdsToBeMerged: {
                        type: "list",
                        member: {}
                    },
                    FieldSourceProfileIds: {
                        type: "structure",
                        members: {
                            AccountNumber: {},
                            AdditionalInformation: {},
                            PartyType: {},
                            BusinessName: {},
                            FirstName: {},
                            MiddleName: {},
                            LastName: {},
                            BirthDate: {},
                            Gender: {},
                            PhoneNumber: {},
                            MobilePhoneNumber: {},
                            HomePhoneNumber: {},
                            BusinessPhoneNumber: {},
                            EmailAddress: {},
                            PersonalEmailAddress: {},
                            BusinessEmailAddress: {},
                            Address: {},
                            ShippingAddress: {},
                            MailingAddress: {},
                            BillingAddress: {},
                            Attributes: {
                                type: "map",
                                key: {},
                                value: {}
                            }
                        }
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Message: {}
                }
            }
        },
        PutIntegration: {
            http: {
                method: "PUT",
                requestUri: "/domains/{DomainName}/integrations"
            },
            input: {
                type: "structure",
                required: [ "DomainName", "ObjectTypeName" ],
                members: {
                    DomainName: {
                        location: "uri",
                        locationName: "DomainName"
                    },
                    Uri: {},
                    ObjectTypeName: {},
                    Tags: {
                        shape: "Sd"
                    },
                    FlowDefinition: {
                        type: "structure",
                        required: [ "FlowName", "KmsArn", "SourceFlowConfig", "Tasks", "TriggerConfig" ],
                        members: {
                            Description: {},
                            FlowName: {},
                            KmsArn: {},
                            SourceFlowConfig: {
                                type: "structure",
                                required: [ "ConnectorType", "SourceConnectorProperties" ],
                                members: {
                                    ConnectorProfileName: {},
                                    ConnectorType: {},
                                    IncrementalPullConfig: {
                                        type: "structure",
                                        members: {
                                            DatetimeTypeFieldName: {}
                                        }
                                    },
                                    SourceConnectorProperties: {
                                        type: "structure",
                                        members: {
                                            Marketo: {
                                                type: "structure",
                                                required: [ "Object" ],
                                                members: {
                                                    Object: {}
                                                }
                                            },
                                            S3: {
                                                type: "structure",
                                                required: [ "BucketName" ],
                                                members: {
                                                    BucketName: {},
                                                    BucketPrefix: {}
                                                }
                                            },
                                            Salesforce: {
                                                type: "structure",
                                                required: [ "Object" ],
                                                members: {
                                                    Object: {},
                                                    EnableDynamicFieldUpdate: {
                                                        type: "boolean"
                                                    },
                                                    IncludeDeletedRecords: {
                                                        type: "boolean"
                                                    }
                                                }
                                            },
                                            ServiceNow: {
                                                type: "structure",
                                                required: [ "Object" ],
                                                members: {
                                                    Object: {}
                                                }
                                            },
                                            Zendesk: {
                                                type: "structure",
                                                required: [ "Object" ],
                                                members: {
                                                    Object: {}
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            Tasks: {
                                type: "list",
                                member: {
                                    type: "structure",
                                    required: [ "SourceFields", "TaskType" ],
                                    members: {
                                        ConnectorOperator: {
                                            type: "structure",
                                            members: {
                                                Marketo: {},
                                                S3: {},
                                                Salesforce: {},
                                                ServiceNow: {},
                                                Zendesk: {}
                                            }
                                        },
                                        DestinationField: {},
                                        SourceFields: {
                                            type: "list",
                                            member: {}
                                        },
                                        TaskProperties: {
                                            type: "map",
                                            key: {},
                                            value: {}
                                        },
                                        TaskType: {}
                                    }
                                }
                            },
                            TriggerConfig: {
                                type: "structure",
                                required: [ "TriggerType" ],
                                members: {
                                    TriggerType: {},
                                    TriggerProperties: {
                                        type: "structure",
                                        members: {
                                            Scheduled: {
                                                type: "structure",
                                                required: [ "ScheduleExpression" ],
                                                members: {
                                                    ScheduleExpression: {},
                                                    DataPullMode: {},
                                                    ScheduleStartTime: {
                                                        type: "timestamp"
                                                    },
                                                    ScheduleEndTime: {
                                                        type: "timestamp"
                                                    },
                                                    Timezone: {},
                                                    ScheduleOffset: {
                                                        type: "long"
                                                    },
                                                    FirstExecutionFrom: {
                                                        type: "timestamp"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "DomainName", "Uri", "ObjectTypeName", "CreatedAt", "LastUpdatedAt" ],
                members: {
                    DomainName: {},
                    Uri: {},
                    ObjectTypeName: {},
                    CreatedAt: {
                        type: "timestamp"
                    },
                    LastUpdatedAt: {
                        type: "timestamp"
                    },
                    Tags: {
                        shape: "Sd"
                    }
                }
            }
        },
        PutProfileObject: {
            http: {
                method: "PUT",
                requestUri: "/domains/{DomainName}/profiles/objects"
            },
            input: {
                type: "structure",
                required: [ "ObjectTypeName", "Object", "DomainName" ],
                members: {
                    ObjectTypeName: {},
                    Object: {},
                    DomainName: {
                        location: "uri",
                        locationName: "DomainName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    ProfileObjectUniqueKey: {}
                }
            }
        },
        PutProfileObjectType: {
            http: {
                method: "PUT",
                requestUri: "/domains/{DomainName}/object-types/{ObjectTypeName}"
            },
            input: {
                type: "structure",
                required: [ "DomainName", "ObjectTypeName", "Description" ],
                members: {
                    DomainName: {
                        location: "uri",
                        locationName: "DomainName"
                    },
                    ObjectTypeName: {
                        location: "uri",
                        locationName: "ObjectTypeName"
                    },
                    Description: {},
                    TemplateId: {},
                    ExpirationDays: {
                        type: "integer"
                    },
                    EncryptionKey: {},
                    AllowProfileCreation: {
                        type: "boolean"
                    },
                    Fields: {
                        shape: "S1m"
                    },
                    Keys: {
                        shape: "S1p"
                    },
                    Tags: {
                        shape: "Sd"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "ObjectTypeName", "Description" ],
                members: {
                    ObjectTypeName: {},
                    Description: {},
                    TemplateId: {},
                    ExpirationDays: {
                        type: "integer"
                    },
                    EncryptionKey: {},
                    AllowProfileCreation: {
                        type: "boolean"
                    },
                    Fields: {
                        shape: "S1m"
                    },
                    Keys: {
                        shape: "S1p"
                    },
                    CreatedAt: {
                        type: "timestamp"
                    },
                    LastUpdatedAt: {
                        type: "timestamp"
                    },
                    Tags: {
                        shape: "Sd"
                    }
                }
            }
        },
        SearchProfiles: {
            http: {
                requestUri: "/domains/{DomainName}/profiles/search"
            },
            input: {
                type: "structure",
                required: [ "DomainName", "KeyName", "Values" ],
                members: {
                    NextToken: {
                        location: "querystring",
                        locationName: "next-token"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "max-results",
                        type: "integer"
                    },
                    DomainName: {
                        location: "uri",
                        locationName: "DomainName"
                    },
                    KeyName: {},
                    Values: {
                        shape: "S4"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Items: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                ProfileId: {},
                                AccountNumber: {},
                                AdditionalInformation: {},
                                PartyType: {},
                                BusinessName: {},
                                FirstName: {},
                                MiddleName: {},
                                LastName: {},
                                BirthDate: {},
                                Gender: {},
                                PhoneNumber: {},
                                MobilePhoneNumber: {},
                                HomePhoneNumber: {},
                                BusinessPhoneNumber: {},
                                EmailAddress: {},
                                PersonalEmailAddress: {},
                                BusinessEmailAddress: {},
                                Address: {
                                    shape: "Sn"
                                },
                                ShippingAddress: {
                                    shape: "Sn"
                                },
                                MailingAddress: {
                                    shape: "Sn"
                                },
                                BillingAddress: {
                                    shape: "Sn"
                                },
                                Attributes: {
                                    shape: "So"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        TagResource: {
            http: {
                requestUri: "/tags/{resourceArn}"
            },
            input: {
                type: "structure",
                required: [ "resourceArn", "tags" ],
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    tags: {
                        shape: "Sd"
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
                requestUri: "/tags/{resourceArn}"
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
            }
        },
        UpdateDomain: {
            http: {
                method: "PUT",
                requestUri: "/domains/{DomainName}"
            },
            input: {
                type: "structure",
                required: [ "DomainName" ],
                members: {
                    DomainName: {
                        location: "uri",
                        locationName: "DomainName"
                    },
                    DefaultExpirationDays: {
                        type: "integer"
                    },
                    DefaultEncryptionKey: {},
                    DeadLetterQueueUrl: {},
                    Matching: {
                        shape: "Sb"
                    },
                    Tags: {
                        shape: "Sd"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "DomainName", "CreatedAt", "LastUpdatedAt" ],
                members: {
                    DomainName: {},
                    DefaultExpirationDays: {
                        type: "integer"
                    },
                    DefaultEncryptionKey: {},
                    DeadLetterQueueUrl: {},
                    Matching: {
                        shape: "Sh"
                    },
                    CreatedAt: {
                        type: "timestamp"
                    },
                    LastUpdatedAt: {
                        type: "timestamp"
                    },
                    Tags: {
                        shape: "Sd"
                    }
                }
            }
        },
        UpdateProfile: {
            http: {
                method: "PUT",
                requestUri: "/domains/{DomainName}/profiles"
            },
            input: {
                type: "structure",
                required: [ "DomainName", "ProfileId" ],
                members: {
                    DomainName: {
                        location: "uri",
                        locationName: "DomainName"
                    },
                    ProfileId: {},
                    AdditionalInformation: {},
                    AccountNumber: {},
                    PartyType: {},
                    BusinessName: {},
                    FirstName: {},
                    MiddleName: {},
                    LastName: {},
                    BirthDate: {},
                    Gender: {},
                    PhoneNumber: {},
                    MobilePhoneNumber: {},
                    HomePhoneNumber: {},
                    BusinessPhoneNumber: {},
                    EmailAddress: {},
                    PersonalEmailAddress: {},
                    BusinessEmailAddress: {},
                    Address: {
                        shape: "S4i"
                    },
                    ShippingAddress: {
                        shape: "S4i"
                    },
                    MailingAddress: {
                        shape: "S4i"
                    },
                    BillingAddress: {
                        shape: "S4i"
                    },
                    Attributes: {
                        type: "map",
                        key: {},
                        value: {}
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "ProfileId" ],
                members: {
                    ProfileId: {}
                }
            }
        }
    },
    shapes: {
        S4: {
            type: "list",
            member: {}
        },
        Sb: {
            type: "structure",
            required: [ "Enabled" ],
            members: {
                Enabled: {
                    type: "boolean"
                }
            }
        },
        Sd: {
            type: "map",
            key: {},
            value: {}
        },
        Sh: {
            type: "structure",
            members: {
                Enabled: {
                    type: "boolean"
                }
            }
        },
        Sn: {
            type: "structure",
            members: {
                Address1: {},
                Address2: {},
                Address3: {},
                Address4: {},
                City: {},
                County: {},
                State: {},
                Province: {},
                Country: {},
                PostalCode: {}
            }
        },
        So: {
            type: "map",
            key: {},
            value: {}
        },
        S1m: {
            type: "map",
            key: {},
            value: {
                type: "structure",
                members: {
                    Source: {},
                    Target: {},
                    ContentType: {}
                }
            }
        },
        S1p: {
            type: "map",
            key: {},
            value: {
                type: "list",
                member: {
                    type: "structure",
                    members: {
                        StandardIdentifiers: {
                            type: "list",
                            member: {}
                        },
                        FieldNames: {
                            type: "list",
                            member: {}
                        }
                    }
                }
            }
        },
        S1z: {
            type: "list",
            member: {
                type: "structure",
                required: [ "DomainName", "Uri", "ObjectTypeName", "CreatedAt", "LastUpdatedAt" ],
                members: {
                    DomainName: {},
                    Uri: {},
                    ObjectTypeName: {},
                    CreatedAt: {
                        type: "timestamp"
                    },
                    LastUpdatedAt: {
                        type: "timestamp"
                    },
                    Tags: {
                        shape: "Sd"
                    }
                }
            }
        },
        S4i: {
            type: "structure",
            members: {
                Address1: {},
                Address2: {},
                Address3: {},
                Address4: {},
                City: {},
                County: {},
                State: {},
                Province: {},
                Country: {},
                PostalCode: {}
            }
        }
    },
    paginators: {}
};

AWS.apiLoader.services["auditmanager"] = {};

AWS.AuditManager = AWS.Service.defineService("auditmanager", [ "2017-07-25" ]);

AWS.apiLoader.services["auditmanager"]["2017-07-25"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2017-07-25",
        endpointPrefix: "auditmanager",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceFullName: "AWS Audit Manager",
        serviceId: "AuditManager",
        signatureVersion: "v4",
        signingName: "auditmanager",
        uid: "auditmanager-2017-07-25"
    },
    operations: {
        AssociateAssessmentReportEvidenceFolder: {
            http: {
                method: "PUT",
                requestUri: "/assessments/{assessmentId}/associateToAssessmentReport"
            },
            input: {
                type: "structure",
                required: [ "assessmentId", "evidenceFolderId" ],
                members: {
                    assessmentId: {
                        location: "uri",
                        locationName: "assessmentId"
                    },
                    evidenceFolderId: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        BatchAssociateAssessmentReportEvidence: {
            http: {
                method: "PUT",
                requestUri: "/assessments/{assessmentId}/batchAssociateToAssessmentReport"
            },
            input: {
                type: "structure",
                required: [ "assessmentId", "evidenceFolderId", "evidenceIds" ],
                members: {
                    assessmentId: {
                        location: "uri",
                        locationName: "assessmentId"
                    },
                    evidenceFolderId: {},
                    evidenceIds: {
                        shape: "S5"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    evidenceIds: {
                        shape: "S5"
                    },
                    errors: {
                        shape: "S7"
                    }
                }
            }
        },
        BatchCreateDelegationByAssessment: {
            http: {
                requestUri: "/assessments/{assessmentId}/delegations"
            },
            input: {
                type: "structure",
                required: [ "createDelegationRequests", "assessmentId" ],
                members: {
                    createDelegationRequests: {
                        type: "list",
                        member: {
                            shape: "Sd"
                        }
                    },
                    assessmentId: {
                        location: "uri",
                        locationName: "assessmentId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    delegations: {
                        shape: "Sj"
                    },
                    errors: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                createDelegationRequest: {
                                    shape: "Sd"
                                },
                                errorCode: {},
                                errorMessage: {}
                            }
                        }
                    }
                }
            }
        },
        BatchDeleteDelegationByAssessment: {
            http: {
                method: "PUT",
                requestUri: "/assessments/{assessmentId}/delegations"
            },
            input: {
                type: "structure",
                required: [ "delegationIds", "assessmentId" ],
                members: {
                    delegationIds: {
                        type: "list",
                        member: {}
                    },
                    assessmentId: {
                        location: "uri",
                        locationName: "assessmentId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    errors: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                delegationId: {},
                                errorCode: {},
                                errorMessage: {}
                            }
                        }
                    }
                }
            }
        },
        BatchDisassociateAssessmentReportEvidence: {
            http: {
                method: "PUT",
                requestUri: "/assessments/{assessmentId}/batchDisassociateFromAssessmentReport"
            },
            input: {
                type: "structure",
                required: [ "assessmentId", "evidenceFolderId", "evidenceIds" ],
                members: {
                    assessmentId: {
                        location: "uri",
                        locationName: "assessmentId"
                    },
                    evidenceFolderId: {},
                    evidenceIds: {
                        shape: "S5"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    evidenceIds: {
                        shape: "S5"
                    },
                    errors: {
                        shape: "S7"
                    }
                }
            }
        },
        BatchImportEvidenceToAssessmentControl: {
            http: {
                requestUri: "/assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}/evidence"
            },
            input: {
                type: "structure",
                required: [ "assessmentId", "controlSetId", "controlId", "manualEvidence" ],
                members: {
                    assessmentId: {
                        location: "uri",
                        locationName: "assessmentId"
                    },
                    controlSetId: {
                        location: "uri",
                        locationName: "controlSetId"
                    },
                    controlId: {
                        location: "uri",
                        locationName: "controlId"
                    },
                    manualEvidence: {
                        type: "list",
                        member: {
                            shape: "S10"
                        }
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    errors: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                manualEvidence: {
                                    shape: "S10"
                                },
                                errorCode: {},
                                errorMessage: {}
                            }
                        }
                    }
                }
            }
        },
        CreateAssessment: {
            http: {
                requestUri: "/assessments"
            },
            input: {
                type: "structure",
                required: [ "name", "assessmentReportsDestination", "scope", "roles", "frameworkId" ],
                members: {
                    name: {},
                    description: {},
                    assessmentReportsDestination: {
                        shape: "S17"
                    },
                    scope: {
                        shape: "S19"
                    },
                    roles: {
                        shape: "S1i"
                    },
                    frameworkId: {},
                    tags: {
                        shape: "S1k"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    assessment: {
                        shape: "S1o"
                    }
                }
            }
        },
        CreateAssessmentFramework: {
            http: {
                requestUri: "/assessmentFrameworks"
            },
            input: {
                type: "structure",
                required: [ "name", "controlSets" ],
                members: {
                    name: {},
                    description: {},
                    complianceType: {},
                    controlSets: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "name" ],
                            members: {
                                name: {},
                                controls: {
                                    shape: "S2j"
                                }
                            }
                        }
                    },
                    tags: {
                        shape: "S1k"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    framework: {
                        shape: "S2m"
                    }
                }
            }
        },
        CreateAssessmentReport: {
            http: {
                requestUri: "/assessments/{assessmentId}/reports"
            },
            input: {
                type: "structure",
                required: [ "name", "assessmentId" ],
                members: {
                    name: {},
                    description: {},
                    assessmentId: {
                        location: "uri",
                        locationName: "assessmentId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    assessmentReport: {
                        type: "structure",
                        members: {
                            id: {},
                            name: {},
                            description: {},
                            awsAccountId: {},
                            assessmentId: {},
                            assessmentName: {},
                            author: {},
                            status: {},
                            creationTime: {
                                type: "timestamp"
                            }
                        }
                    }
                }
            }
        },
        CreateControl: {
            http: {
                requestUri: "/controls"
            },
            input: {
                type: "structure",
                required: [ "name", "controlMappingSources" ],
                members: {
                    name: {},
                    description: {},
                    testingInformation: {},
                    actionPlanTitle: {},
                    actionPlanInstructions: {},
                    controlMappingSources: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                sourceName: {},
                                sourceDescription: {},
                                sourceSetUpOption: {},
                                sourceType: {},
                                sourceKeyword: {
                                    shape: "S33"
                                },
                                sourceFrequency: {},
                                troubleshootingText: {}
                            }
                        }
                    },
                    tags: {
                        shape: "S1k"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    control: {
                        shape: "S2s"
                    }
                }
            }
        },
        DeleteAssessment: {
            http: {
                method: "DELETE",
                requestUri: "/assessments/{assessmentId}"
            },
            input: {
                type: "structure",
                required: [ "assessmentId" ],
                members: {
                    assessmentId: {
                        location: "uri",
                        locationName: "assessmentId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DeleteAssessmentFramework: {
            http: {
                method: "DELETE",
                requestUri: "/assessmentFrameworks/{frameworkId}"
            },
            input: {
                type: "structure",
                required: [ "frameworkId" ],
                members: {
                    frameworkId: {
                        location: "uri",
                        locationName: "frameworkId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DeleteAssessmentReport: {
            http: {
                method: "DELETE",
                requestUri: "/assessments/{assessmentId}/reports/{assessmentReportId}"
            },
            input: {
                type: "structure",
                required: [ "assessmentId", "assessmentReportId" ],
                members: {
                    assessmentId: {
                        location: "uri",
                        locationName: "assessmentId"
                    },
                    assessmentReportId: {
                        location: "uri",
                        locationName: "assessmentReportId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DeleteControl: {
            http: {
                method: "DELETE",
                requestUri: "/controls/{controlId}"
            },
            input: {
                type: "structure",
                required: [ "controlId" ],
                members: {
                    controlId: {
                        location: "uri",
                        locationName: "controlId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DeregisterAccount: {
            http: {
                requestUri: "/account/deregisterAccount"
            },
            input: {
                type: "structure",
                members: {}
            },
            output: {
                type: "structure",
                members: {
                    status: {}
                }
            }
        },
        DeregisterOrganizationAdminAccount: {
            http: {
                requestUri: "/account/deregisterOrganizationAdminAccount"
            },
            input: {
                type: "structure",
                members: {
                    adminAccountId: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DisassociateAssessmentReportEvidenceFolder: {
            http: {
                method: "PUT",
                requestUri: "/assessments/{assessmentId}/disassociateFromAssessmentReport"
            },
            input: {
                type: "structure",
                required: [ "assessmentId", "evidenceFolderId" ],
                members: {
                    assessmentId: {
                        location: "uri",
                        locationName: "assessmentId"
                    },
                    evidenceFolderId: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        GetAccountStatus: {
            http: {
                method: "GET",
                requestUri: "/account/status"
            },
            input: {
                type: "structure",
                members: {}
            },
            output: {
                type: "structure",
                members: {
                    status: {}
                }
            }
        },
        GetAssessment: {
            http: {
                method: "GET",
                requestUri: "/assessments/{assessmentId}"
            },
            input: {
                type: "structure",
                required: [ "assessmentId" ],
                members: {
                    assessmentId: {
                        location: "uri",
                        locationName: "assessmentId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    assessment: {
                        shape: "S1o"
                    },
                    userRole: {
                        shape: "S1j"
                    }
                }
            }
        },
        GetAssessmentFramework: {
            http: {
                method: "GET",
                requestUri: "/assessmentFrameworks/{frameworkId}"
            },
            input: {
                type: "structure",
                required: [ "frameworkId" ],
                members: {
                    frameworkId: {
                        location: "uri",
                        locationName: "frameworkId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    framework: {
                        shape: "S2m"
                    }
                }
            }
        },
        GetAssessmentReportUrl: {
            http: {
                method: "GET",
                requestUri: "/assessments/{assessmentId}/reports/{assessmentReportId}/url"
            },
            input: {
                type: "structure",
                required: [ "assessmentReportId", "assessmentId" ],
                members: {
                    assessmentReportId: {
                        location: "uri",
                        locationName: "assessmentReportId"
                    },
                    assessmentId: {
                        location: "uri",
                        locationName: "assessmentId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    preSignedUrl: {
                        type: "structure",
                        members: {
                            hyperlinkName: {},
                            link: {}
                        }
                    }
                }
            }
        },
        GetChangeLogs: {
            http: {
                method: "GET",
                requestUri: "/assessments/{assessmentId}/changelogs"
            },
            input: {
                type: "structure",
                required: [ "assessmentId" ],
                members: {
                    assessmentId: {
                        location: "uri",
                        locationName: "assessmentId"
                    },
                    controlSetId: {
                        location: "querystring",
                        locationName: "controlSetId"
                    },
                    controlId: {
                        location: "querystring",
                        locationName: "controlId"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    changeLogs: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                objectType: {},
                                objectName: {},
                                action: {},
                                createdAt: {
                                    type: "timestamp"
                                },
                                createdBy: {}
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        GetControl: {
            http: {
                method: "GET",
                requestUri: "/controls/{controlId}"
            },
            input: {
                type: "structure",
                required: [ "controlId" ],
                members: {
                    controlId: {
                        location: "uri",
                        locationName: "controlId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    control: {
                        shape: "S2s"
                    }
                }
            }
        },
        GetDelegations: {
            http: {
                method: "GET",
                requestUri: "/delegations"
            },
            input: {
                type: "structure",
                members: {
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    delegations: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                id: {},
                                assessmentName: {},
                                assessmentId: {},
                                status: {},
                                roleArn: {},
                                creationTime: {
                                    type: "timestamp"
                                },
                                controlSetName: {}
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        GetEvidence: {
            http: {
                method: "GET",
                requestUri: "/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence/{evidenceId}"
            },
            input: {
                type: "structure",
                required: [ "assessmentId", "controlSetId", "evidenceFolderId", "evidenceId" ],
                members: {
                    assessmentId: {
                        location: "uri",
                        locationName: "assessmentId"
                    },
                    controlSetId: {
                        location: "uri",
                        locationName: "controlSetId"
                    },
                    evidenceFolderId: {
                        location: "uri",
                        locationName: "evidenceFolderId"
                    },
                    evidenceId: {
                        location: "uri",
                        locationName: "evidenceId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    evidence: {
                        shape: "S4p"
                    }
                }
            }
        },
        GetEvidenceByEvidenceFolder: {
            http: {
                method: "GET",
                requestUri: "/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence"
            },
            input: {
                type: "structure",
                required: [ "assessmentId", "controlSetId", "evidenceFolderId" ],
                members: {
                    assessmentId: {
                        location: "uri",
                        locationName: "assessmentId"
                    },
                    controlSetId: {
                        location: "uri",
                        locationName: "controlSetId"
                    },
                    evidenceFolderId: {
                        location: "uri",
                        locationName: "evidenceFolderId"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    evidence: {
                        type: "list",
                        member: {
                            shape: "S4p"
                        }
                    },
                    nextToken: {}
                }
            }
        },
        GetEvidenceFolder: {
            http: {
                method: "GET",
                requestUri: "/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}"
            },
            input: {
                type: "structure",
                required: [ "assessmentId", "controlSetId", "evidenceFolderId" ],
                members: {
                    assessmentId: {
                        location: "uri",
                        locationName: "assessmentId"
                    },
                    controlSetId: {
                        location: "uri",
                        locationName: "controlSetId"
                    },
                    evidenceFolderId: {
                        location: "uri",
                        locationName: "evidenceFolderId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    evidenceFolder: {
                        shape: "S53"
                    }
                }
            }
        },
        GetEvidenceFoldersByAssessment: {
            http: {
                method: "GET",
                requestUri: "/assessments/{assessmentId}/evidenceFolders"
            },
            input: {
                type: "structure",
                required: [ "assessmentId" ],
                members: {
                    assessmentId: {
                        location: "uri",
                        locationName: "assessmentId"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    evidenceFolders: {
                        shape: "S57"
                    },
                    nextToken: {}
                }
            }
        },
        GetEvidenceFoldersByAssessmentControl: {
            http: {
                method: "GET",
                requestUri: "/assessments/{assessmentId}/evidenceFolders-by-assessment-control/{controlSetId}/{controlId}"
            },
            input: {
                type: "structure",
                required: [ "assessmentId", "controlSetId", "controlId" ],
                members: {
                    assessmentId: {
                        location: "uri",
                        locationName: "assessmentId"
                    },
                    controlSetId: {
                        location: "uri",
                        locationName: "controlSetId"
                    },
                    controlId: {
                        location: "uri",
                        locationName: "controlId"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    evidenceFolders: {
                        shape: "S57"
                    },
                    nextToken: {}
                }
            }
        },
        GetOrganizationAdminAccount: {
            http: {
                method: "GET",
                requestUri: "/account/organizationAdminAccount"
            },
            input: {
                type: "structure",
                members: {}
            },
            output: {
                type: "structure",
                members: {
                    adminAccountId: {},
                    organizationId: {}
                }
            }
        },
        GetServicesInScope: {
            http: {
                method: "GET",
                requestUri: "/services"
            },
            input: {
                type: "structure",
                members: {}
            },
            output: {
                type: "structure",
                members: {
                    serviceMetadata: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                name: {},
                                displayName: {},
                                description: {},
                                category: {}
                            }
                        }
                    }
                }
            }
        },
        GetSettings: {
            http: {
                method: "GET",
                requestUri: "/settings/{attribute}"
            },
            input: {
                type: "structure",
                required: [ "attribute" ],
                members: {
                    attribute: {
                        location: "uri",
                        locationName: "attribute"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    settings: {
                        shape: "S5k"
                    }
                }
            }
        },
        ListAssessmentFrameworks: {
            http: {
                method: "GET",
                requestUri: "/assessmentFrameworks"
            },
            input: {
                type: "structure",
                required: [ "frameworkType" ],
                members: {
                    frameworkType: {
                        location: "querystring",
                        locationName: "frameworkType"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    frameworkMetadataList: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                arn: {},
                                id: {},
                                type: {},
                                name: {},
                                description: {},
                                logo: {},
                                complianceType: {},
                                controlsCount: {
                                    type: "integer"
                                },
                                controlSetsCount: {
                                    type: "integer"
                                },
                                createdAt: {
                                    type: "timestamp"
                                },
                                lastUpdatedAt: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListAssessmentReports: {
            http: {
                method: "GET",
                requestUri: "/assessmentReports"
            },
            input: {
                type: "structure",
                members: {
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    assessmentReports: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                id: {},
                                name: {},
                                description: {},
                                assessmentId: {},
                                assessmentName: {},
                                author: {},
                                status: {},
                                creationTime: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListAssessments: {
            http: {
                method: "GET",
                requestUri: "/assessments"
            },
            input: {
                type: "structure",
                members: {
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    assessmentMetadata: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                name: {},
                                id: {},
                                complianceType: {},
                                status: {},
                                roles: {
                                    shape: "S1i"
                                },
                                delegations: {
                                    shape: "Sj"
                                },
                                creationTime: {
                                    type: "timestamp"
                                },
                                lastUpdated: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListControls: {
            http: {
                method: "GET",
                requestUri: "/controls"
            },
            input: {
                type: "structure",
                required: [ "controlType" ],
                members: {
                    controlType: {
                        location: "querystring",
                        locationName: "controlType"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    controlMetadataList: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                arn: {},
                                id: {},
                                name: {},
                                controlSources: {},
                                createdAt: {
                                    type: "timestamp"
                                },
                                lastUpdatedAt: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListKeywordsForDataSource: {
            http: {
                method: "GET",
                requestUri: "/dataSourceKeywords"
            },
            input: {
                type: "structure",
                required: [ "source" ],
                members: {
                    source: {
                        location: "querystring",
                        locationName: "source"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    keywords: {
                        type: "list",
                        member: {}
                    },
                    nextToken: {}
                }
            }
        },
        ListNotifications: {
            http: {
                method: "GET",
                requestUri: "/notifications"
            },
            input: {
                type: "structure",
                members: {
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    notifications: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                id: {},
                                assessmentId: {},
                                assessmentName: {},
                                controlSetId: {},
                                controlSetName: {},
                                description: {},
                                eventTime: {
                                    type: "timestamp"
                                },
                                source: {}
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListTagsForResource: {
            http: {
                method: "GET",
                requestUri: "/tags/{resourceArn}"
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
                        shape: "S1k"
                    }
                }
            }
        },
        RegisterAccount: {
            http: {
                requestUri: "/account/registerAccount"
            },
            input: {
                type: "structure",
                members: {
                    kmsKey: {},
                    delegatedAdminAccount: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    status: {}
                }
            }
        },
        RegisterOrganizationAdminAccount: {
            http: {
                requestUri: "/account/registerOrganizationAdminAccount"
            },
            input: {
                type: "structure",
                required: [ "adminAccountId" ],
                members: {
                    adminAccountId: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    adminAccountId: {},
                    organizationId: {}
                }
            }
        },
        TagResource: {
            http: {
                requestUri: "/tags/{resourceArn}"
            },
            input: {
                type: "structure",
                required: [ "resourceArn", "tags" ],
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    tags: {
                        shape: "S1k"
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
                requestUri: "/tags/{resourceArn}"
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
            }
        },
        UpdateAssessment: {
            http: {
                method: "PUT",
                requestUri: "/assessments/{assessmentId}"
            },
            input: {
                type: "structure",
                required: [ "assessmentId", "scope" ],
                members: {
                    assessmentId: {
                        location: "uri",
                        locationName: "assessmentId"
                    },
                    assessmentName: {},
                    assessmentDescription: {},
                    scope: {
                        shape: "S19"
                    },
                    assessmentReportsDestination: {
                        shape: "S17"
                    },
                    roles: {
                        shape: "S1i"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    assessment: {
                        shape: "S1o"
                    }
                }
            }
        },
        UpdateAssessmentControl: {
            http: {
                method: "PUT",
                requestUri: "/assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}"
            },
            input: {
                type: "structure",
                required: [ "assessmentId", "controlSetId", "controlId" ],
                members: {
                    assessmentId: {
                        location: "uri",
                        locationName: "assessmentId"
                    },
                    controlSetId: {
                        location: "uri",
                        locationName: "controlSetId"
                    },
                    controlId: {
                        location: "uri",
                        locationName: "controlId"
                    },
                    controlStatus: {},
                    commentBody: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    control: {
                        shape: "S22"
                    }
                }
            }
        },
        UpdateAssessmentControlSetStatus: {
            http: {
                method: "PUT",
                requestUri: "/assessments/{assessmentId}/controlSets/{controlSetId}/status"
            },
            input: {
                type: "structure",
                required: [ "assessmentId", "controlSetId", "status", "comment" ],
                members: {
                    assessmentId: {
                        location: "uri",
                        locationName: "assessmentId"
                    },
                    controlSetId: {
                        location: "uri",
                        locationName: "controlSetId"
                    },
                    status: {},
                    comment: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    controlSet: {
                        shape: "S1y"
                    }
                }
            }
        },
        UpdateAssessmentFramework: {
            http: {
                method: "PUT",
                requestUri: "/assessmentFrameworks/{frameworkId}"
            },
            input: {
                type: "structure",
                required: [ "frameworkId", "name", "controlSets" ],
                members: {
                    frameworkId: {
                        location: "uri",
                        locationName: "frameworkId"
                    },
                    name: {},
                    description: {},
                    complianceType: {},
                    controlSets: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "name" ],
                            members: {
                                id: {},
                                name: {},
                                controls: {
                                    shape: "S2j"
                                }
                            }
                        }
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    framework: {
                        shape: "S2m"
                    }
                }
            }
        },
        UpdateAssessmentStatus: {
            http: {
                method: "PUT",
                requestUri: "/assessments/{assessmentId}/status"
            },
            input: {
                type: "structure",
                required: [ "assessmentId", "status" ],
                members: {
                    assessmentId: {
                        location: "uri",
                        locationName: "assessmentId"
                    },
                    status: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    assessment: {
                        shape: "S1o"
                    }
                }
            }
        },
        UpdateControl: {
            http: {
                method: "PUT",
                requestUri: "/controls/{controlId}"
            },
            input: {
                type: "structure",
                required: [ "controlId", "name", "controlMappingSources" ],
                members: {
                    controlId: {
                        location: "uri",
                        locationName: "controlId"
                    },
                    name: {},
                    description: {},
                    testingInformation: {},
                    actionPlanTitle: {},
                    actionPlanInstructions: {},
                    controlMappingSources: {
                        shape: "S2x"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    control: {
                        shape: "S2s"
                    }
                }
            }
        },
        UpdateSettings: {
            http: {
                method: "PUT",
                requestUri: "/settings"
            },
            input: {
                type: "structure",
                members: {
                    snsTopic: {},
                    defaultAssessmentReportsDestination: {
                        shape: "S17"
                    },
                    defaultProcessOwners: {
                        shape: "S1i"
                    },
                    kmsKey: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    settings: {
                        shape: "S5k"
                    }
                }
            }
        },
        ValidateAssessmentReportIntegrity: {
            http: {
                requestUri: "/assessmentReports/integrity"
            },
            input: {
                type: "structure",
                required: [ "s3RelativePath" ],
                members: {
                    s3RelativePath: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    signatureValid: {
                        type: "boolean"
                    },
                    signatureAlgorithm: {},
                    signatureDateTime: {},
                    signatureKeyId: {},
                    validationErrors: {
                        type: "list",
                        member: {}
                    }
                }
            }
        }
    },
    shapes: {
        S5: {
            type: "list",
            member: {}
        },
        S7: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    evidenceId: {},
                    errorCode: {},
                    errorMessage: {}
                }
            }
        },
        Sd: {
            type: "structure",
            members: {
                comment: {},
                controlSetId: {},
                roleArn: {},
                roleType: {}
            }
        },
        Sj: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    id: {},
                    assessmentName: {},
                    assessmentId: {},
                    status: {},
                    roleArn: {},
                    roleType: {},
                    creationTime: {
                        type: "timestamp"
                    },
                    lastUpdated: {
                        type: "timestamp"
                    },
                    controlSetId: {},
                    comment: {},
                    createdBy: {}
                }
            }
        },
        S10: {
            type: "structure",
            members: {
                s3ResourcePath: {}
            }
        },
        S17: {
            type: "structure",
            members: {
                destinationType: {},
                destination: {}
            }
        },
        S19: {
            type: "structure",
            members: {
                awsAccounts: {
                    type: "list",
                    member: {
                        shape: "S1b"
                    }
                },
                awsServices: {
                    type: "list",
                    member: {
                        type: "structure",
                        members: {
                            serviceName: {}
                        }
                    }
                }
            }
        },
        S1b: {
            type: "structure",
            members: {
                id: {},
                emailAddress: {},
                name: {}
            }
        },
        S1i: {
            type: "list",
            member: {
                shape: "S1j"
            }
        },
        S1j: {
            type: "structure",
            members: {
                roleType: {},
                roleArn: {}
            }
        },
        S1k: {
            type: "map",
            key: {},
            value: {}
        },
        S1o: {
            type: "structure",
            members: {
                arn: {},
                awsAccount: {
                    shape: "S1b"
                },
                metadata: {
                    type: "structure",
                    members: {
                        name: {},
                        id: {},
                        description: {},
                        complianceType: {},
                        status: {},
                        assessmentReportsDestination: {
                            shape: "S17"
                        },
                        scope: {
                            shape: "S19"
                        },
                        roles: {
                            shape: "S1i"
                        },
                        delegations: {
                            shape: "Sj"
                        },
                        creationTime: {
                            type: "timestamp"
                        },
                        lastUpdated: {
                            type: "timestamp"
                        }
                    }
                },
                framework: {
                    type: "structure",
                    members: {
                        id: {},
                        arn: {},
                        metadata: {
                            type: "structure",
                            members: {
                                name: {},
                                description: {},
                                logo: {},
                                complianceType: {}
                            }
                        },
                        controlSets: {
                            type: "list",
                            member: {
                                shape: "S1y"
                            }
                        }
                    }
                },
                tags: {
                    shape: "S1k"
                }
            }
        },
        S1y: {
            type: "structure",
            members: {
                id: {},
                description: {},
                status: {},
                roles: {
                    shape: "S1i"
                },
                controls: {
                    type: "list",
                    member: {
                        shape: "S22"
                    }
                },
                delegations: {
                    shape: "Sj"
                },
                systemEvidenceCount: {
                    type: "integer"
                },
                manualEvidenceCount: {
                    type: "integer"
                }
            }
        },
        S22: {
            type: "structure",
            members: {
                id: {},
                name: {},
                description: {},
                status: {},
                response: {},
                comments: {
                    type: "list",
                    member: {
                        type: "structure",
                        members: {
                            authorName: {},
                            commentBody: {},
                            postedDate: {
                                type: "timestamp"
                            }
                        }
                    }
                },
                evidenceSources: {
                    type: "list",
                    member: {}
                },
                evidenceCount: {
                    type: "integer"
                },
                assessmentReportEvidenceCount: {
                    type: "integer"
                }
            }
        },
        S2j: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    id: {}
                }
            }
        },
        S2m: {
            type: "structure",
            members: {
                arn: {},
                id: {},
                name: {},
                type: {},
                complianceType: {},
                description: {},
                logo: {},
                controlSources: {},
                controlSets: {
                    type: "list",
                    member: {
                        type: "structure",
                        members: {
                            id: {},
                            name: {},
                            controls: {
                                type: "list",
                                member: {
                                    shape: "S2s"
                                }
                            }
                        }
                    }
                },
                createdAt: {
                    type: "timestamp"
                },
                lastUpdatedAt: {
                    type: "timestamp"
                },
                createdBy: {},
                lastUpdatedBy: {},
                tags: {
                    shape: "S1k"
                }
            }
        },
        S2s: {
            type: "structure",
            members: {
                arn: {},
                id: {},
                type: {},
                name: {},
                description: {},
                testingInformation: {},
                actionPlanTitle: {},
                actionPlanInstructions: {},
                controlSources: {},
                controlMappingSources: {
                    shape: "S2x"
                },
                createdAt: {
                    type: "timestamp"
                },
                lastUpdatedAt: {
                    type: "timestamp"
                },
                createdBy: {},
                lastUpdatedBy: {},
                tags: {
                    shape: "S1k"
                }
            }
        },
        S2x: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    sourceId: {},
                    sourceName: {},
                    sourceDescription: {},
                    sourceSetUpOption: {},
                    sourceType: {},
                    sourceKeyword: {
                        shape: "S33"
                    },
                    sourceFrequency: {},
                    troubleshootingText: {}
                }
            }
        },
        S33: {
            type: "structure",
            members: {
                keywordInputType: {},
                keywordValue: {}
            }
        },
        S4p: {
            type: "structure",
            members: {
                dataSource: {},
                evidenceAwsAccountId: {},
                time: {
                    type: "timestamp"
                },
                eventSource: {},
                eventName: {},
                evidenceByType: {},
                resourcesIncluded: {
                    type: "list",
                    member: {
                        type: "structure",
                        members: {
                            arn: {},
                            value: {}
                        }
                    }
                },
                attributes: {
                    type: "map",
                    key: {},
                    value: {}
                },
                iamId: {},
                complianceCheck: {},
                awsOrganization: {},
                awsAccountId: {},
                evidenceFolderId: {},
                id: {},
                assessmentReportSelection: {}
            }
        },
        S53: {
            type: "structure",
            members: {
                name: {},
                date: {
                    type: "timestamp"
                },
                assessmentId: {},
                controlSetId: {},
                controlId: {},
                id: {},
                dataSource: {},
                author: {},
                totalEvidence: {
                    type: "integer"
                },
                assessmentReportSelectionCount: {
                    type: "integer"
                },
                controlName: {},
                evidenceResourcesIncludedCount: {
                    type: "integer"
                },
                evidenceByTypeConfigurationDataCount: {
                    type: "integer"
                },
                evidenceByTypeManualCount: {
                    type: "integer"
                },
                evidenceByTypeComplianceCheckCount: {
                    type: "integer"
                },
                evidenceByTypeComplianceCheckIssuesCount: {
                    type: "integer"
                },
                evidenceByTypeUserActivityCount: {
                    type: "integer"
                },
                evidenceAwsServiceSourceCount: {
                    type: "integer"
                }
            }
        },
        S57: {
            type: "list",
            member: {
                shape: "S53"
            }
        },
        S5k: {
            type: "structure",
            members: {
                isAwsOrgEnabled: {
                    type: "boolean"
                },
                snsTopic: {},
                defaultAssessmentReportsDestination: {
                    shape: "S17"
                },
                defaultProcessOwners: {
                    shape: "S1i"
                },
                kmsKey: {}
            }
        }
    },
    paginators: {
        GetChangeLogs: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        GetDelegations: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        GetEvidenceByEvidenceFolder: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        GetEvidenceFoldersByAssessment: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        GetEvidenceFoldersByAssessmentControl: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListAssessmentFrameworks: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListAssessmentReports: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListAssessments: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListControls: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListKeywordsForDataSource: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListNotifications: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        }
    }
};

AWS.apiLoader.services["emrcontainers"] = {};

AWS.EMRcontainers = AWS.Service.defineService("emrcontainers", [ "2020-10-01" ]);

AWS.apiLoader.services["emrcontainers"]["2020-10-01"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-10-01",
        endpointPrefix: "emr-containers",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceFullName: "Amazon EMR Containers",
        serviceId: "EMR containers",
        signatureVersion: "v4",
        signingName: "emr-containers",
        uid: "emr-containers-2020-10-01"
    },
    operations: {
        CancelJobRun: {
            http: {
                method: "DELETE",
                requestUri: "/virtualclusters/{virtualClusterId}/jobruns/{jobRunId}"
            },
            input: {
                type: "structure",
                required: [ "id", "virtualClusterId" ],
                members: {
                    id: {
                        location: "uri",
                        locationName: "jobRunId"
                    },
                    virtualClusterId: {
                        location: "uri",
                        locationName: "virtualClusterId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    id: {},
                    virtualClusterId: {}
                }
            }
        },
        CreateManagedEndpoint: {
            http: {
                requestUri: "/virtualclusters/{virtualClusterId}/endpoints"
            },
            input: {
                type: "structure",
                required: [ "name", "virtualClusterId", "type", "releaseLabel", "executionRoleArn", "certificateArn", "clientToken" ],
                members: {
                    name: {},
                    virtualClusterId: {
                        location: "uri",
                        locationName: "virtualClusterId"
                    },
                    type: {},
                    releaseLabel: {},
                    executionRoleArn: {},
                    certificateArn: {},
                    configurationOverrides: {
                        shape: "Sa"
                    },
                    clientToken: {
                        idempotencyToken: true
                    },
                    tags: {
                        shape: "Sn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    id: {},
                    name: {},
                    arn: {},
                    virtualClusterId: {}
                }
            }
        },
        CreateVirtualCluster: {
            http: {
                requestUri: "/virtualclusters"
            },
            input: {
                type: "structure",
                required: [ "name", "containerProvider", "clientToken" ],
                members: {
                    name: {},
                    containerProvider: {
                        shape: "St"
                    },
                    clientToken: {
                        idempotencyToken: true
                    },
                    tags: {
                        shape: "Sn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    id: {},
                    name: {},
                    arn: {}
                }
            }
        },
        DeleteManagedEndpoint: {
            http: {
                method: "DELETE",
                requestUri: "/virtualclusters/{virtualClusterId}/endpoints/{endpointId}"
            },
            input: {
                type: "structure",
                required: [ "id", "virtualClusterId" ],
                members: {
                    id: {
                        location: "uri",
                        locationName: "endpointId"
                    },
                    virtualClusterId: {
                        location: "uri",
                        locationName: "virtualClusterId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    id: {},
                    virtualClusterId: {}
                }
            }
        },
        DeleteVirtualCluster: {
            http: {
                method: "DELETE",
                requestUri: "/virtualclusters/{virtualClusterId}"
            },
            input: {
                type: "structure",
                required: [ "id" ],
                members: {
                    id: {
                        location: "uri",
                        locationName: "virtualClusterId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    id: {}
                }
            }
        },
        DescribeJobRun: {
            http: {
                method: "GET",
                requestUri: "/virtualclusters/{virtualClusterId}/jobruns/{jobRunId}"
            },
            input: {
                type: "structure",
                required: [ "id", "virtualClusterId" ],
                members: {
                    id: {
                        location: "uri",
                        locationName: "jobRunId"
                    },
                    virtualClusterId: {
                        location: "uri",
                        locationName: "virtualClusterId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    jobRun: {
                        shape: "S15"
                    }
                }
            }
        },
        DescribeManagedEndpoint: {
            http: {
                method: "GET",
                requestUri: "/virtualclusters/{virtualClusterId}/endpoints/{endpointId}"
            },
            input: {
                type: "structure",
                required: [ "id", "virtualClusterId" ],
                members: {
                    id: {
                        location: "uri",
                        locationName: "endpointId"
                    },
                    virtualClusterId: {
                        location: "uri",
                        locationName: "virtualClusterId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    endpoint: {
                        shape: "S1j"
                    }
                }
            }
        },
        DescribeVirtualCluster: {
            http: {
                method: "GET",
                requestUri: "/virtualclusters/{virtualClusterId}"
            },
            input: {
                type: "structure",
                required: [ "id" ],
                members: {
                    id: {
                        location: "uri",
                        locationName: "virtualClusterId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    virtualCluster: {
                        shape: "S1o"
                    }
                }
            }
        },
        ListJobRuns: {
            http: {
                method: "GET",
                requestUri: "/virtualclusters/{virtualClusterId}/jobruns"
            },
            input: {
                type: "structure",
                required: [ "virtualClusterId" ],
                members: {
                    virtualClusterId: {
                        location: "uri",
                        locationName: "virtualClusterId"
                    },
                    createdBefore: {
                        shape: "S1e",
                        location: "querystring",
                        locationName: "createdBefore"
                    },
                    createdAfter: {
                        shape: "S1e",
                        location: "querystring",
                        locationName: "createdAfter"
                    },
                    name: {
                        location: "querystring",
                        locationName: "name"
                    },
                    states: {
                        location: "querystring",
                        locationName: "states",
                        type: "list",
                        member: {}
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
                members: {
                    jobRuns: {
                        type: "list",
                        member: {
                            shape: "S15"
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListManagedEndpoints: {
            http: {
                method: "GET",
                requestUri: "/virtualclusters/{virtualClusterId}/endpoints"
            },
            input: {
                type: "structure",
                required: [ "virtualClusterId" ],
                members: {
                    virtualClusterId: {
                        location: "uri",
                        locationName: "virtualClusterId"
                    },
                    createdBefore: {
                        shape: "S1e",
                        location: "querystring",
                        locationName: "createdBefore"
                    },
                    createdAfter: {
                        shape: "S1e",
                        location: "querystring",
                        locationName: "createdAfter"
                    },
                    types: {
                        location: "querystring",
                        locationName: "types",
                        type: "list",
                        member: {}
                    },
                    states: {
                        location: "querystring",
                        locationName: "states",
                        type: "list",
                        member: {}
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
                members: {
                    endpoints: {
                        type: "list",
                        member: {
                            shape: "S1j"
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListTagsForResource: {
            http: {
                method: "GET",
                requestUri: "/tags/{resourceArn}"
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
                        shape: "Sn"
                    }
                }
            }
        },
        ListVirtualClusters: {
            http: {
                method: "GET",
                requestUri: "/virtualclusters"
            },
            input: {
                type: "structure",
                members: {
                    containerProviderId: {
                        location: "querystring",
                        locationName: "containerProviderId"
                    },
                    containerProviderType: {
                        location: "querystring",
                        locationName: "containerProviderType"
                    },
                    createdAfter: {
                        shape: "S1e",
                        location: "querystring",
                        locationName: "createdAfter"
                    },
                    createdBefore: {
                        shape: "S1e",
                        location: "querystring",
                        locationName: "createdBefore"
                    },
                    states: {
                        location: "querystring",
                        locationName: "states",
                        type: "list",
                        member: {}
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
                members: {
                    virtualClusters: {
                        type: "list",
                        member: {
                            shape: "S1o"
                        }
                    },
                    nextToken: {}
                }
            }
        },
        StartJobRun: {
            http: {
                requestUri: "/virtualclusters/{virtualClusterId}/jobruns"
            },
            input: {
                type: "structure",
                required: [ "virtualClusterId", "clientToken", "executionRoleArn", "releaseLabel", "jobDriver" ],
                members: {
                    name: {},
                    virtualClusterId: {
                        location: "uri",
                        locationName: "virtualClusterId"
                    },
                    clientToken: {
                        idempotencyToken: true
                    },
                    executionRoleArn: {},
                    releaseLabel: {},
                    jobDriver: {
                        shape: "S18"
                    },
                    configurationOverrides: {
                        shape: "Sa"
                    },
                    tags: {
                        shape: "Sn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    id: {},
                    name: {},
                    arn: {},
                    virtualClusterId: {}
                }
            }
        },
        TagResource: {
            http: {
                requestUri: "/tags/{resourceArn}"
            },
            input: {
                type: "structure",
                required: [ "resourceArn", "tags" ],
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    tags: {
                        shape: "Sn"
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
                requestUri: "/tags/{resourceArn}"
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
            }
        }
    },
    shapes: {
        Sa: {
            type: "structure",
            members: {
                applicationConfiguration: {
                    shape: "Sb"
                },
                monitoringConfiguration: {
                    type: "structure",
                    members: {
                        persistentAppUI: {},
                        cloudWatchMonitoringConfiguration: {
                            type: "structure",
                            required: [ "logGroupName" ],
                            members: {
                                logGroupName: {},
                                logStreamNamePrefix: {}
                            }
                        },
                        s3MonitoringConfiguration: {
                            type: "structure",
                            required: [ "logUri" ],
                            members: {
                                logUri: {}
                            }
                        }
                    }
                }
            }
        },
        Sb: {
            type: "list",
            member: {
                type: "structure",
                required: [ "classification" ],
                members: {
                    classification: {},
                    properties: {
                        type: "map",
                        key: {},
                        value: {},
                        sensitive: true
                    },
                    configurations: {
                        shape: "Sb"
                    }
                }
            }
        },
        Sn: {
            type: "map",
            key: {},
            value: {}
        },
        St: {
            type: "structure",
            required: [ "type", "id" ],
            members: {
                type: {},
                id: {},
                info: {
                    type: "structure",
                    members: {
                        eksInfo: {
                            type: "structure",
                            members: {
                                namespace: {}
                            }
                        }
                    },
                    union: true
                }
            }
        },
        S15: {
            type: "structure",
            members: {
                id: {},
                name: {},
                virtualClusterId: {},
                arn: {},
                state: {},
                clientToken: {},
                executionRoleArn: {},
                releaseLabel: {},
                configurationOverrides: {
                    shape: "Sa"
                },
                jobDriver: {
                    shape: "S18"
                },
                createdAt: {
                    shape: "S1e"
                },
                createdBy: {},
                finishedAt: {
                    shape: "S1e"
                },
                stateDetails: {},
                failureReason: {},
                tags: {
                    shape: "Sn"
                }
            }
        },
        S18: {
            type: "structure",
            members: {
                sparkSubmitJobDriver: {
                    type: "structure",
                    required: [ "entryPoint" ],
                    members: {
                        entryPoint: {
                            type: "string",
                            sensitive: true
                        },
                        entryPointArguments: {
                            type: "list",
                            member: {
                                type: "string",
                                sensitive: true
                            }
                        },
                        sparkSubmitParameters: {
                            type: "string",
                            sensitive: true
                        }
                    }
                }
            }
        },
        S1e: {
            type: "timestamp",
            timestampFormat: "iso8601"
        },
        S1j: {
            type: "structure",
            members: {
                id: {},
                name: {},
                arn: {},
                virtualClusterId: {},
                type: {},
                state: {},
                releaseLabel: {},
                executionRoleArn: {},
                certificateArn: {},
                configurationOverrides: {
                    shape: "Sa"
                },
                serverUrl: {},
                createdAt: {
                    shape: "S1e"
                },
                securityGroup: {},
                subnetIds: {
                    type: "list",
                    member: {}
                },
                tags: {
                    shape: "Sn"
                }
            }
        },
        S1o: {
            type: "structure",
            members: {
                id: {},
                name: {},
                arn: {},
                state: {},
                containerProvider: {
                    shape: "St"
                },
                createdAt: {
                    shape: "S1e"
                },
                tags: {
                    shape: "Sn"
                }
            }
        }
    },
    paginators: {
        ListJobRuns: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "jobRuns"
        },
        ListManagedEndpoints: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "endpoints"
        },
        ListVirtualClusters: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "virtualClusters"
        }
    }
};

AWS.apiLoader.services["healthlake"] = {};

AWS.HealthLake = AWS.Service.defineService("healthlake", [ "2017-07-01" ]);

AWS.apiLoader.services["healthlake"]["2017-07-01"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2017-07-01",
        endpointPrefix: "healthlake",
        jsonVersion: "1.0",
        protocol: "json",
        serviceAbbreviation: "HealthLake",
        serviceFullName: "Amazon HealthLake",
        serviceId: "HealthLake",
        signatureVersion: "v4",
        signingName: "healthlake",
        targetPrefix: "HealthLake",
        uid: "healthlake-2017-07-01"
    },
    operations: {
        CreateFHIRDatastore: {
            input: {
                type: "structure",
                required: [ "DatastoreTypeVersion" ],
                members: {
                    DatastoreName: {},
                    DatastoreTypeVersion: {},
                    PreloadDataConfig: {
                        shape: "S4"
                    },
                    ClientToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "DatastoreId", "DatastoreArn", "DatastoreStatus", "DatastoreEndpoint" ],
                members: {
                    DatastoreId: {},
                    DatastoreArn: {},
                    DatastoreStatus: {},
                    DatastoreEndpoint: {}
                }
            }
        },
        DeleteFHIRDatastore: {
            input: {
                type: "structure",
                members: {
                    DatastoreId: {}
                }
            },
            output: {
                type: "structure",
                required: [ "DatastoreId", "DatastoreArn", "DatastoreStatus", "DatastoreEndpoint" ],
                members: {
                    DatastoreId: {},
                    DatastoreArn: {},
                    DatastoreStatus: {},
                    DatastoreEndpoint: {}
                }
            }
        },
        DescribeFHIRDatastore: {
            input: {
                type: "structure",
                members: {
                    DatastoreId: {}
                }
            },
            output: {
                type: "structure",
                required: [ "DatastoreProperties" ],
                members: {
                    DatastoreProperties: {
                        shape: "Sg"
                    }
                }
            }
        },
        DescribeFHIRExportJob: {
            input: {
                type: "structure",
                required: [ "DatastoreId", "JobId" ],
                members: {
                    DatastoreId: {},
                    JobId: {}
                }
            },
            output: {
                type: "structure",
                required: [ "ExportJobProperties" ],
                members: {
                    ExportJobProperties: {
                        type: "structure",
                        required: [ "JobId", "JobStatus", "SubmitTime", "DatastoreId", "OutputDataConfig" ],
                        members: {
                            JobId: {},
                            JobName: {},
                            JobStatus: {},
                            SubmitTime: {
                                type: "timestamp"
                            },
                            EndTime: {
                                type: "timestamp"
                            },
                            DatastoreId: {},
                            OutputDataConfig: {
                                shape: "Sp"
                            },
                            DataAccessRoleArn: {},
                            Message: {}
                        }
                    }
                }
            }
        },
        DescribeFHIRImportJob: {
            input: {
                type: "structure",
                required: [ "DatastoreId", "JobId" ],
                members: {
                    DatastoreId: {},
                    JobId: {}
                }
            },
            output: {
                type: "structure",
                required: [ "ImportJobProperties" ],
                members: {
                    ImportJobProperties: {
                        type: "structure",
                        required: [ "JobId", "JobStatus", "SubmitTime", "DatastoreId", "InputDataConfig" ],
                        members: {
                            JobId: {},
                            JobName: {},
                            JobStatus: {},
                            SubmitTime: {
                                type: "timestamp"
                            },
                            EndTime: {
                                type: "timestamp"
                            },
                            DatastoreId: {},
                            InputDataConfig: {
                                shape: "Sw"
                            },
                            DataAccessRoleArn: {},
                            Message: {}
                        }
                    }
                }
            }
        },
        ListFHIRDatastores: {
            input: {
                type: "structure",
                members: {
                    Filter: {
                        type: "structure",
                        members: {
                            DatastoreName: {},
                            DatastoreStatus: {},
                            CreatedBefore: {
                                type: "timestamp"
                            },
                            CreatedAfter: {
                                type: "timestamp"
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
                required: [ "DatastorePropertiesList" ],
                members: {
                    DatastorePropertiesList: {
                        type: "list",
                        member: {
                            shape: "Sg"
                        }
                    },
                    NextToken: {}
                }
            }
        },
        StartFHIRExportJob: {
            input: {
                type: "structure",
                required: [ "OutputDataConfig", "DatastoreId", "DataAccessRoleArn", "ClientToken" ],
                members: {
                    JobName: {},
                    OutputDataConfig: {
                        shape: "Sp"
                    },
                    DatastoreId: {},
                    DataAccessRoleArn: {},
                    ClientToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "JobId", "JobStatus" ],
                members: {
                    JobId: {},
                    JobStatus: {},
                    DatastoreId: {}
                }
            }
        },
        StartFHIRImportJob: {
            input: {
                type: "structure",
                required: [ "InputDataConfig", "DatastoreId", "DataAccessRoleArn", "ClientToken" ],
                members: {
                    JobName: {},
                    InputDataConfig: {
                        shape: "Sw"
                    },
                    DatastoreId: {},
                    DataAccessRoleArn: {},
                    ClientToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "JobId", "JobStatus" ],
                members: {
                    JobId: {},
                    JobStatus: {},
                    DatastoreId: {}
                }
            }
        }
    },
    shapes: {
        S4: {
            type: "structure",
            required: [ "PreloadDataType" ],
            members: {
                PreloadDataType: {}
            }
        },
        Sg: {
            type: "structure",
            required: [ "DatastoreId", "DatastoreArn", "DatastoreStatus", "DatastoreTypeVersion", "DatastoreEndpoint" ],
            members: {
                DatastoreId: {},
                DatastoreArn: {},
                DatastoreName: {},
                DatastoreStatus: {},
                CreatedAt: {
                    type: "timestamp"
                },
                DatastoreTypeVersion: {},
                DatastoreEndpoint: {},
                PreloadDataConfig: {
                    shape: "S4"
                }
            }
        },
        Sp: {
            type: "structure",
            members: {
                S3Uri: {}
            },
            union: true
        },
        Sw: {
            type: "structure",
            members: {
                S3Uri: {}
            },
            union: true
        }
    },
    paginators: {
        ListFHIRDatastores: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        }
    }
};

AWS.apiLoader.services["sagemakeredge"] = {};

AWS.SagemakerEdge = AWS.Service.defineService("sagemakeredge", [ "2020-09-23" ]);

AWS.apiLoader.services["sagemakeredge"]["2020-09-23"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-09-23",
        endpointPrefix: "edge.sagemaker",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceFullName: "Amazon Sagemaker Edge Manager",
        serviceId: "Sagemaker Edge",
        signatureVersion: "v4",
        signingName: "sagemaker",
        uid: "sagemaker-edge-2020-09-23"
    },
    operations: {
        GetDeviceRegistration: {
            http: {
                requestUri: "/GetDeviceRegistration"
            },
            input: {
                type: "structure",
                required: [ "DeviceName", "DeviceFleetName" ],
                members: {
                    DeviceName: {},
                    DeviceFleetName: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    DeviceRegistration: {},
                    CacheTTL: {}
                }
            }
        },
        SendHeartbeat: {
            http: {
                requestUri: "/SendHeartbeat"
            },
            input: {
                type: "structure",
                required: [ "AgentVersion", "DeviceName", "DeviceFleetName" ],
                members: {
                    AgentMetrics: {
                        shape: "S8"
                    },
                    Models: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                ModelName: {},
                                ModelVersion: {},
                                LatestSampleTime: {
                                    type: "timestamp"
                                },
                                LatestInference: {
                                    type: "timestamp"
                                },
                                ModelMetrics: {
                                    shape: "S8"
                                }
                            }
                        }
                    },
                    AgentVersion: {},
                    DeviceName: {},
                    DeviceFleetName: {}
                }
            }
        }
    },
    shapes: {
        S8: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    Dimension: {},
                    MetricName: {},
                    Value: {
                        type: "double"
                    },
                    Timestamp: {
                        type: "timestamp"
                    }
                }
            }
        }
    },
    paginators: {}
};

AWS.apiLoader.services["amp"] = {};

AWS.Amp = AWS.Service.defineService("amp", [ "2020-08-01" ]);

AWS.apiLoader.services["amp"]["2020-08-01"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-08-01",
        endpointPrefix: "aps",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceFullName: "Amazon Prometheus Service",
        serviceId: "amp",
        signatureVersion: "v4",
        signingName: "aps",
        uid: "amp-2020-08-01"
    },
    operations: {
        CreateWorkspace: {
            http: {
                requestUri: "/workspaces",
                responseCode: 202
            },
            input: {
                type: "structure",
                members: {
                    alias: {},
                    clientToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "arn", "status", "workspaceId" ],
                members: {
                    arn: {},
                    status: {
                        shape: "S6"
                    },
                    workspaceId: {}
                }
            },
            idempotent: true
        },
        DeleteWorkspace: {
            http: {
                method: "DELETE",
                requestUri: "/workspaces/{workspaceId}",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "workspaceId" ],
                members: {
                    clientToken: {
                        idempotencyToken: true,
                        location: "querystring",
                        locationName: "clientToken"
                    },
                    workspaceId: {
                        location: "uri",
                        locationName: "workspaceId"
                    }
                }
            },
            idempotent: true
        },
        DescribeWorkspace: {
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
                required: [ "workspace" ],
                members: {
                    workspace: {
                        type: "structure",
                        required: [ "arn", "createdAt", "status", "workspaceId" ],
                        members: {
                            alias: {},
                            arn: {},
                            createdAt: {
                                type: "timestamp"
                            },
                            prometheusEndpoint: {},
                            status: {
                                shape: "S6"
                            },
                            workspaceId: {}
                        }
                    }
                }
            }
        },
        ListWorkspaces: {
            http: {
                method: "GET",
                requestUri: "/workspaces",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    alias: {
                        location: "querystring",
                        locationName: "alias"
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
                required: [ "workspaces" ],
                members: {
                    nextToken: {},
                    workspaces: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "arn", "createdAt", "status", "workspaceId" ],
                            members: {
                                alias: {},
                                arn: {},
                                createdAt: {
                                    type: "timestamp"
                                },
                                status: {
                                    shape: "S6"
                                },
                                workspaceId: {}
                            }
                        }
                    }
                }
            }
        },
        UpdateWorkspaceAlias: {
            http: {
                requestUri: "/workspaces/{workspaceId}/alias",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "workspaceId" ],
                members: {
                    alias: {},
                    clientToken: {
                        idempotencyToken: true
                    },
                    workspaceId: {
                        location: "uri",
                        locationName: "workspaceId"
                    }
                }
            },
            idempotent: true
        }
    },
    shapes: {
        S6: {
            type: "structure",
            required: [ "statusCode" ],
            members: {
                statusCode: {}
            }
        }
    },
    paginators: {
        ListWorkspaces: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "workspaces"
        }
    }
};

AWS.apiLoader.services["greengrassv2"] = {};

AWS.GreengrassV2 = AWS.Service.defineService("greengrassv2", [ "2020-11-30" ]);

AWS.apiLoader.services["greengrassv2"]["2020-11-30"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-11-30",
        endpointPrefix: "greengrass",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceAbbreviation: "AWS GreengrassV2",
        serviceFullName: "AWS IoT Greengrass V2",
        serviceId: "GreengrassV2",
        signatureVersion: "v4",
        uid: "greengrassv2-2020-11-30"
    },
    operations: {
        CancelDeployment: {
            http: {
                requestUri: "/greengrass/v2/deployments/{deploymentId}/cancel"
            },
            input: {
                type: "structure",
                required: [ "deploymentId" ],
                members: {
                    deploymentId: {
                        location: "uri",
                        locationName: "deploymentId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    message: {}
                }
            }
        },
        CreateComponentVersion: {
            http: {
                requestUri: "/greengrass/v2/createComponentVersion",
                responseCode: 201
            },
            input: {
                type: "structure",
                members: {
                    inlineRecipe: {
                        type: "blob"
                    },
                    lambdaFunction: {
                        type: "structure",
                        required: [ "lambdaArn" ],
                        members: {
                            lambdaArn: {},
                            componentName: {},
                            componentVersion: {},
                            componentPlatforms: {
                                shape: "Sa"
                            },
                            componentDependencies: {
                                type: "map",
                                key: {},
                                value: {
                                    type: "structure",
                                    members: {
                                        versionRequirement: {},
                                        dependencyType: {}
                                    }
                                }
                            },
                            componentLambdaParameters: {
                                type: "structure",
                                members: {
                                    eventSources: {
                                        type: "list",
                                        member: {
                                            type: "structure",
                                            required: [ "topic", "type" ],
                                            members: {
                                                topic: {},
                                                type: {}
                                            }
                                        }
                                    },
                                    maxQueueSize: {
                                        type: "integer"
                                    },
                                    maxInstancesCount: {
                                        type: "integer"
                                    },
                                    maxIdleTimeInSeconds: {
                                        type: "integer"
                                    },
                                    timeoutInSeconds: {
                                        type: "integer"
                                    },
                                    statusTimeoutInSeconds: {
                                        type: "integer"
                                    },
                                    pinned: {
                                        type: "boolean"
                                    },
                                    inputPayloadEncodingType: {},
                                    execArgs: {
                                        type: "list",
                                        member: {}
                                    },
                                    environmentVariables: {
                                        type: "map",
                                        key: {},
                                        value: {}
                                    },
                                    linuxProcessParams: {
                                        type: "structure",
                                        members: {
                                            isolationMode: {},
                                            containerParams: {
                                                type: "structure",
                                                members: {
                                                    memorySizeInKB: {
                                                        type: "integer"
                                                    },
                                                    mountROSysfs: {
                                                        type: "boolean"
                                                    },
                                                    volumes: {
                                                        type: "list",
                                                        member: {
                                                            type: "structure",
                                                            required: [ "sourcePath", "destinationPath" ],
                                                            members: {
                                                                sourcePath: {},
                                                                destinationPath: {},
                                                                permission: {},
                                                                addGroupOwner: {
                                                                    type: "boolean"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    devices: {
                                                        type: "list",
                                                        member: {
                                                            type: "structure",
                                                            required: [ "path" ],
                                                            members: {
                                                                path: {},
                                                                permission: {},
                                                                addGroupOwner: {
                                                                    type: "boolean"
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    tags: {
                        shape: "S11"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "componentName", "componentVersion", "creationTimestamp", "status" ],
                members: {
                    arn: {},
                    componentName: {},
                    componentVersion: {},
                    creationTimestamp: {
                        type: "timestamp"
                    },
                    status: {
                        shape: "S17"
                    }
                }
            }
        },
        CreateDeployment: {
            http: {
                requestUri: "/greengrass/v2/deployments",
                responseCode: 201
            },
            input: {
                type: "structure",
                required: [ "targetArn" ],
                members: {
                    targetArn: {},
                    deploymentName: {},
                    components: {
                        shape: "S1c"
                    },
                    iotJobConfiguration: {
                        shape: "S1j"
                    },
                    deploymentPolicies: {
                        shape: "S20"
                    },
                    tags: {
                        shape: "S11"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    deploymentId: {},
                    iotJobId: {},
                    iotJobArn: {}
                }
            }
        },
        DeleteComponent: {
            http: {
                method: "DELETE",
                requestUri: "/greengrass/v2/components/{arn}",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "arn" ],
                members: {
                    arn: {
                        location: "uri",
                        locationName: "arn"
                    }
                }
            }
        },
        DeleteCoreDevice: {
            http: {
                method: "DELETE",
                requestUri: "/greengrass/v2/coreDevices/{coreDeviceThingName}",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "coreDeviceThingName" ],
                members: {
                    coreDeviceThingName: {
                        location: "uri",
                        locationName: "coreDeviceThingName"
                    }
                }
            }
        },
        DescribeComponent: {
            http: {
                method: "GET",
                requestUri: "/greengrass/v2/components/{arn}/metadata"
            },
            input: {
                type: "structure",
                required: [ "arn" ],
                members: {
                    arn: {
                        location: "uri",
                        locationName: "arn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    arn: {},
                    componentName: {},
                    componentVersion: {},
                    creationTimestamp: {
                        type: "timestamp"
                    },
                    publisher: {},
                    description: {},
                    status: {
                        shape: "S17"
                    },
                    platforms: {
                        shape: "Sa"
                    },
                    tags: {
                        shape: "S11"
                    }
                }
            }
        },
        GetComponent: {
            http: {
                method: "GET",
                requestUri: "/greengrass/v2/components/{arn}"
            },
            input: {
                type: "structure",
                required: [ "arn" ],
                members: {
                    recipeOutputFormat: {
                        location: "querystring",
                        locationName: "recipeOutputFormat"
                    },
                    arn: {
                        location: "uri",
                        locationName: "arn"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "recipeOutputFormat", "recipe" ],
                members: {
                    recipeOutputFormat: {},
                    recipe: {
                        type: "blob"
                    },
                    tags: {
                        shape: "S11"
                    }
                }
            }
        },
        GetComponentVersionArtifact: {
            http: {
                method: "GET",
                requestUri: "/greengrass/v2/components/{arn}/artifacts/{artifactName+}"
            },
            input: {
                type: "structure",
                required: [ "arn", "artifactName" ],
                members: {
                    arn: {
                        location: "uri",
                        locationName: "arn"
                    },
                    artifactName: {
                        location: "uri",
                        locationName: "artifactName"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "preSignedUrl" ],
                members: {
                    preSignedUrl: {}
                }
            }
        },
        GetCoreDevice: {
            http: {
                method: "GET",
                requestUri: "/greengrass/v2/coreDevices/{coreDeviceThingName}"
            },
            input: {
                type: "structure",
                required: [ "coreDeviceThingName" ],
                members: {
                    coreDeviceThingName: {
                        location: "uri",
                        locationName: "coreDeviceThingName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    coreDeviceThingName: {},
                    coreVersion: {},
                    platform: {},
                    architecture: {},
                    status: {},
                    lastStatusUpdateTimestamp: {
                        type: "timestamp"
                    },
                    tags: {
                        shape: "S11"
                    }
                }
            }
        },
        GetDeployment: {
            http: {
                method: "GET",
                requestUri: "/greengrass/v2/deployments/{deploymentId}"
            },
            input: {
                type: "structure",
                required: [ "deploymentId" ],
                members: {
                    deploymentId: {
                        location: "uri",
                        locationName: "deploymentId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    targetArn: {},
                    revisionId: {},
                    deploymentId: {},
                    deploymentName: {},
                    deploymentStatus: {},
                    iotJobId: {},
                    iotJobArn: {},
                    components: {
                        shape: "S1c"
                    },
                    deploymentPolicies: {
                        shape: "S20"
                    },
                    iotJobConfiguration: {
                        shape: "S1j"
                    },
                    creationTimestamp: {
                        type: "timestamp"
                    },
                    isLatestForTarget: {
                        type: "boolean"
                    },
                    tags: {
                        shape: "S11"
                    }
                }
            }
        },
        ListComponentVersions: {
            http: {
                method: "GET",
                requestUri: "/greengrass/v2/components/{arn}/versions"
            },
            input: {
                type: "structure",
                required: [ "arn" ],
                members: {
                    arn: {
                        location: "uri",
                        locationName: "arn"
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
                members: {
                    componentVersions: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                componentName: {},
                                componentVersion: {},
                                arn: {}
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListComponents: {
            http: {
                method: "GET",
                requestUri: "/greengrass/v2/components"
            },
            input: {
                type: "structure",
                members: {
                    scope: {
                        location: "querystring",
                        locationName: "scope"
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
                members: {
                    components: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                arn: {},
                                componentName: {},
                                latestVersion: {
                                    type: "structure",
                                    members: {
                                        arn: {},
                                        componentVersion: {},
                                        creationTimestamp: {
                                            type: "timestamp"
                                        },
                                        description: {},
                                        publisher: {},
                                        platforms: {
                                            shape: "Sa"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListCoreDevices: {
            http: {
                method: "GET",
                requestUri: "/greengrass/v2/coreDevices"
            },
            input: {
                type: "structure",
                members: {
                    thingGroupArn: {
                        location: "querystring",
                        locationName: "thingGroupArn"
                    },
                    status: {
                        location: "querystring",
                        locationName: "status"
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
                members: {
                    coreDevices: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                coreDeviceThingName: {},
                                status: {},
                                lastStatusUpdateTimestamp: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListDeployments: {
            http: {
                method: "GET",
                requestUri: "/greengrass/v2/deployments"
            },
            input: {
                type: "structure",
                members: {
                    targetArn: {
                        location: "querystring",
                        locationName: "targetArn"
                    },
                    historyFilter: {
                        location: "querystring",
                        locationName: "historyFilter"
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
                members: {
                    deployments: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                targetArn: {},
                                revisionId: {},
                                deploymentId: {},
                                deploymentName: {},
                                creationTimestamp: {
                                    type: "timestamp"
                                },
                                deploymentStatus: {},
                                isLatestForTarget: {
                                    type: "boolean"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListEffectiveDeployments: {
            http: {
                method: "GET",
                requestUri: "/greengrass/v2/coreDevices/{coreDeviceThingName}/effectiveDeployments"
            },
            input: {
                type: "structure",
                required: [ "coreDeviceThingName" ],
                members: {
                    coreDeviceThingName: {
                        location: "uri",
                        locationName: "coreDeviceThingName"
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
                members: {
                    effectiveDeployments: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "deploymentId", "deploymentName", "targetArn", "coreDeviceExecutionStatus", "creationTimestamp", "modifiedTimestamp" ],
                            members: {
                                deploymentId: {},
                                deploymentName: {},
                                iotJobId: {},
                                iotJobArn: {},
                                description: {},
                                targetArn: {},
                                coreDeviceExecutionStatus: {},
                                reason: {},
                                creationTimestamp: {
                                    type: "timestamp"
                                },
                                modifiedTimestamp: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListInstalledComponents: {
            http: {
                method: "GET",
                requestUri: "/greengrass/v2/coreDevices/{coreDeviceThingName}/installedComponents"
            },
            input: {
                type: "structure",
                required: [ "coreDeviceThingName" ],
                members: {
                    coreDeviceThingName: {
                        location: "uri",
                        locationName: "coreDeviceThingName"
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
                members: {
                    installedComponents: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                componentName: {},
                                componentVersion: {},
                                lifecycleState: {},
                                lifecycleStateDetails: {},
                                isRoot: {
                                    type: "boolean"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListTagsForResource: {
            http: {
                method: "GET",
                requestUri: "/tags/{resourceArn}"
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
                        shape: "S11"
                    }
                }
            }
        },
        ResolveComponentCandidates: {
            http: {
                requestUri: "/greengrass/v2/resolveComponentCandidates"
            },
            input: {
                type: "structure",
                required: [ "platform", "componentCandidates" ],
                members: {
                    platform: {
                        shape: "Sb"
                    },
                    componentCandidates: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                componentName: {},
                                componentVersion: {},
                                versionRequirements: {
                                    type: "map",
                                    key: {},
                                    value: {}
                                }
                            }
                        }
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    resolvedComponentVersions: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                arn: {},
                                componentName: {},
                                componentVersion: {},
                                recipe: {
                                    type: "blob"
                                }
                            }
                        }
                    }
                }
            }
        },
        TagResource: {
            http: {
                requestUri: "/tags/{resourceArn}"
            },
            input: {
                type: "structure",
                required: [ "resourceArn", "tags" ],
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    tags: {
                        shape: "S11"
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
                requestUri: "/tags/{resourceArn}"
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
            members: {
                name: {},
                attributes: {
                    type: "map",
                    key: {},
                    value: {}
                }
            }
        },
        S11: {
            type: "map",
            key: {},
            value: {}
        },
        S17: {
            type: "structure",
            members: {
                componentState: {},
                message: {},
                errors: {
                    type: "map",
                    key: {},
                    value: {}
                }
            }
        },
        S1c: {
            type: "map",
            key: {},
            value: {
                type: "structure",
                members: {
                    componentVersion: {},
                    configurationUpdate: {
                        type: "structure",
                        members: {
                            merge: {},
                            reset: {
                                type: "list",
                                member: {}
                            }
                        }
                    },
                    runWith: {
                        type: "structure",
                        members: {
                            posixUser: {}
                        }
                    }
                }
            }
        },
        S1j: {
            type: "structure",
            members: {
                jobExecutionsRolloutConfig: {
                    type: "structure",
                    members: {
                        exponentialRate: {
                            type: "structure",
                            required: [ "baseRatePerMinute", "incrementFactor", "rateIncreaseCriteria" ],
                            members: {
                                baseRatePerMinute: {
                                    type: "integer"
                                },
                                incrementFactor: {
                                    type: "double"
                                },
                                rateIncreaseCriteria: {
                                    type: "structure",
                                    members: {
                                        numberOfNotifiedThings: {
                                            type: "integer"
                                        },
                                        numberOfSucceededThings: {
                                            type: "integer"
                                        }
                                    }
                                }
                            }
                        },
                        maximumPerMinute: {
                            type: "integer"
                        }
                    }
                },
                abortConfig: {
                    type: "structure",
                    required: [ "criteriaList" ],
                    members: {
                        criteriaList: {
                            type: "list",
                            member: {
                                type: "structure",
                                required: [ "failureType", "action", "thresholdPercentage", "minNumberOfExecutedThings" ],
                                members: {
                                    failureType: {},
                                    action: {},
                                    thresholdPercentage: {
                                        type: "double"
                                    },
                                    minNumberOfExecutedThings: {
                                        type: "integer"
                                    }
                                }
                            }
                        }
                    }
                },
                timeoutConfig: {
                    type: "structure",
                    members: {
                        inProgressTimeoutInMinutes: {
                            type: "long"
                        }
                    }
                }
            }
        },
        S20: {
            type: "structure",
            members: {
                failureHandlingPolicy: {},
                componentUpdatePolicy: {
                    type: "structure",
                    members: {
                        timeoutInSeconds: {
                            type: "integer"
                        },
                        action: {}
                    }
                },
                configurationValidationPolicy: {
                    type: "structure",
                    members: {
                        timeoutInSeconds: {
                            type: "integer"
                        }
                    }
                }
            }
        }
    },
    paginators: {
        ListComponentVersions: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "componentVersions"
        },
        ListComponents: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "components"
        },
        ListCoreDevices: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "coreDevices"
        },
        ListDeployments: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "deployments"
        },
        ListEffectiveDeployments: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "effectiveDeployments"
        },
        ListInstalledComponents: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "installedComponents"
        }
    }
};

AWS.apiLoader.services["iotdeviceadvisor"] = {};

AWS.IotDeviceAdvisor = AWS.Service.defineService("iotdeviceadvisor", [ "2020-09-18" ]);

AWS.apiLoader.services["iotdeviceadvisor"]["2020-09-18"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-09-18",
        endpointPrefix: "api.iotdeviceadvisor",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceAbbreviation: "AWSIoTDeviceAdvisor",
        serviceFullName: "AWS IoT Core Device Advisor",
        serviceId: "IotDeviceAdvisor",
        signatureVersion: "v4",
        signingName: "iotdeviceadvisor",
        uid: "iotdeviceadvisor-2020-09-18"
    },
    operations: {
        CreateSuiteDefinition: {
            http: {
                requestUri: "/suiteDefinitions"
            },
            input: {
                type: "structure",
                members: {
                    suiteDefinitionConfiguration: {
                        shape: "S2"
                    },
                    tags: {
                        shape: "S9"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    suiteDefinitionId: {},
                    suiteDefinitionArn: {},
                    suiteDefinitionName: {},
                    createdAt: {
                        type: "timestamp"
                    }
                }
            }
        },
        DeleteSuiteDefinition: {
            http: {
                method: "DELETE",
                requestUri: "/suiteDefinitions/{suiteDefinitionId}"
            },
            input: {
                type: "structure",
                required: [ "suiteDefinitionId" ],
                members: {
                    suiteDefinitionId: {
                        location: "uri",
                        locationName: "suiteDefinitionId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        GetSuiteDefinition: {
            http: {
                method: "GET",
                requestUri: "/suiteDefinitions/{suiteDefinitionId}"
            },
            input: {
                type: "structure",
                required: [ "suiteDefinitionId" ],
                members: {
                    suiteDefinitionId: {
                        location: "uri",
                        locationName: "suiteDefinitionId"
                    },
                    suiteDefinitionVersion: {
                        location: "querystring",
                        locationName: "suiteDefinitionVersion"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    suiteDefinitionId: {},
                    suiteDefinitionArn: {},
                    suiteDefinitionVersion: {},
                    latestVersion: {},
                    suiteDefinitionConfiguration: {
                        shape: "S2"
                    },
                    createdAt: {
                        type: "timestamp"
                    },
                    lastModifiedAt: {
                        type: "timestamp"
                    },
                    tags: {
                        shape: "S9"
                    }
                }
            }
        },
        GetSuiteRun: {
            http: {
                method: "GET",
                requestUri: "/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}"
            },
            input: {
                type: "structure",
                required: [ "suiteDefinitionId", "suiteRunId" ],
                members: {
                    suiteDefinitionId: {
                        location: "uri",
                        locationName: "suiteDefinitionId"
                    },
                    suiteRunId: {
                        location: "uri",
                        locationName: "suiteRunId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    suiteDefinitionId: {},
                    suiteDefinitionVersion: {},
                    suiteRunId: {},
                    suiteRunArn: {},
                    suiteRunConfiguration: {
                        shape: "Sm"
                    },
                    testResult: {
                        type: "structure",
                        members: {
                            groups: {
                                type: "list",
                                member: {
                                    type: "structure",
                                    members: {
                                        groupId: {},
                                        groupName: {},
                                        tests: {
                                            type: "list",
                                            member: {
                                                type: "structure",
                                                members: {
                                                    testCaseRunId: {},
                                                    testCaseDefinitionId: {},
                                                    testCaseDefinitionName: {},
                                                    status: {},
                                                    startTime: {
                                                        type: "timestamp"
                                                    },
                                                    endTime: {
                                                        type: "timestamp"
                                                    },
                                                    logUrl: {},
                                                    warnings: {},
                                                    failure: {}
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    startTime: {
                        type: "timestamp"
                    },
                    endTime: {
                        type: "timestamp"
                    },
                    status: {},
                    errorReason: {},
                    tags: {
                        shape: "S9"
                    }
                }
            }
        },
        GetSuiteRunReport: {
            http: {
                method: "GET",
                requestUri: "/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/report"
            },
            input: {
                type: "structure",
                required: [ "suiteDefinitionId", "suiteRunId" ],
                members: {
                    suiteDefinitionId: {
                        location: "uri",
                        locationName: "suiteDefinitionId"
                    },
                    suiteRunId: {
                        location: "uri",
                        locationName: "suiteRunId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    qualificationReportDownloadUrl: {}
                }
            }
        },
        ListSuiteDefinitions: {
            http: {
                method: "GET",
                requestUri: "/suiteDefinitions"
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
                    suiteDefinitionInformationList: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                suiteDefinitionId: {},
                                suiteDefinitionName: {},
                                defaultDevices: {
                                    shape: "S4"
                                },
                                intendedForQualification: {
                                    type: "boolean"
                                },
                                createdAt: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListSuiteRuns: {
            http: {
                method: "GET",
                requestUri: "/suiteRuns"
            },
            input: {
                type: "structure",
                members: {
                    suiteDefinitionId: {
                        location: "querystring",
                        locationName: "suiteDefinitionId"
                    },
                    suiteDefinitionVersion: {
                        location: "querystring",
                        locationName: "suiteDefinitionVersion"
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
                members: {
                    suiteRunsList: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                suiteDefinitionId: {},
                                suiteDefinitionVersion: {},
                                suiteDefinitionName: {},
                                suiteRunId: {},
                                createdAt: {
                                    type: "timestamp"
                                },
                                startedAt: {
                                    type: "timestamp"
                                },
                                endAt: {
                                    type: "timestamp"
                                },
                                status: {},
                                passed: {
                                    type: "integer"
                                },
                                failed: {
                                    type: "integer"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListTagsForResource: {
            http: {
                method: "GET",
                requestUri: "/tags/{resourceArn}"
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
                        shape: "S9"
                    }
                }
            }
        },
        StartSuiteRun: {
            http: {
                requestUri: "/suiteDefinitions/{suiteDefinitionId}/suiteRuns"
            },
            input: {
                type: "structure",
                required: [ "suiteDefinitionId" ],
                members: {
                    suiteDefinitionId: {
                        location: "uri",
                        locationName: "suiteDefinitionId"
                    },
                    suiteDefinitionVersion: {},
                    suiteRunConfiguration: {
                        shape: "Sm"
                    },
                    tags: {
                        shape: "S9"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    suiteRunId: {},
                    suiteRunArn: {},
                    createdAt: {
                        type: "timestamp"
                    }
                }
            }
        },
        StopSuiteRun: {
            http: {
                requestUri: "/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/stop"
            },
            input: {
                type: "structure",
                required: [ "suiteDefinitionId", "suiteRunId" ],
                members: {
                    suiteDefinitionId: {
                        location: "uri",
                        locationName: "suiteDefinitionId"
                    },
                    suiteRunId: {
                        location: "uri",
                        locationName: "suiteRunId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        TagResource: {
            http: {
                requestUri: "/tags/{resourceArn}"
            },
            input: {
                type: "structure",
                required: [ "resourceArn", "tags" ],
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    tags: {
                        shape: "S9"
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
                requestUri: "/tags/{resourceArn}"
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
            }
        },
        UpdateSuiteDefinition: {
            http: {
                method: "PATCH",
                requestUri: "/suiteDefinitions/{suiteDefinitionId}"
            },
            input: {
                type: "structure",
                required: [ "suiteDefinitionId" ],
                members: {
                    suiteDefinitionId: {
                        location: "uri",
                        locationName: "suiteDefinitionId"
                    },
                    suiteDefinitionConfiguration: {
                        shape: "S2"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    suiteDefinitionId: {},
                    suiteDefinitionArn: {},
                    suiteDefinitionName: {},
                    suiteDefinitionVersion: {},
                    createdAt: {
                        type: "timestamp"
                    },
                    lastUpdatedAt: {
                        type: "timestamp"
                    }
                }
            }
        }
    },
    shapes: {
        S2: {
            type: "structure",
            members: {
                suiteDefinitionName: {},
                devices: {
                    shape: "S4"
                },
                intendedForQualification: {
                    type: "boolean"
                },
                rootGroup: {},
                devicePermissionRoleArn: {}
            }
        },
        S4: {
            type: "list",
            member: {
                shape: "S5"
            }
        },
        S5: {
            type: "structure",
            members: {
                thingArn: {},
                certificateArn: {}
            }
        },
        S9: {
            type: "map",
            key: {},
            value: {}
        },
        Sm: {
            type: "structure",
            members: {
                primaryDevice: {
                    shape: "S5"
                },
                selectedTestList: {
                    type: "list",
                    member: {}
                }
            }
        }
    },
    paginators: {
        ListSuiteDefinitions: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListSuiteRuns: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        }
    }
};

AWS.apiLoader.services["iotfleethub"] = {};

AWS.IoTFleetHub = AWS.Service.defineService("iotfleethub", [ "2020-11-03" ]);

AWS.apiLoader.services["iotfleethub"]["2020-11-03"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-11-03",
        endpointPrefix: "api.fleethub.iot",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceFullName: "AWS IoT Fleet Hub",
        serviceId: "IoTFleetHub",
        signatureVersion: "v4",
        signingName: "iotfleethub",
        uid: "iotfleethub-2020-11-03"
    },
    operations: {
        CreateApplication: {
            http: {
                requestUri: "/applications",
                responseCode: 201
            },
            input: {
                type: "structure",
                required: [ "applicationName", "roleArn" ],
                members: {
                    applicationName: {},
                    applicationDescription: {},
                    clientToken: {
                        idempotencyToken: true
                    },
                    roleArn: {},
                    tags: {
                        shape: "S6"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "applicationId", "applicationArn" ],
                members: {
                    applicationId: {},
                    applicationArn: {}
                }
            }
        },
        DeleteApplication: {
            http: {
                method: "DELETE",
                requestUri: "/applications/{applicationId}",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "applicationId" ],
                members: {
                    applicationId: {
                        location: "uri",
                        locationName: "applicationId"
                    },
                    clientToken: {
                        idempotencyToken: true,
                        location: "querystring",
                        locationName: "clientToken"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DescribeApplication: {
            http: {
                method: "GET",
                requestUri: "/applications/{applicationId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "applicationId" ],
                members: {
                    applicationId: {
                        location: "uri",
                        locationName: "applicationId"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "applicationId", "applicationArn", "applicationName", "applicationUrl", "applicationState", "applicationCreationDate", "applicationLastUpdateDate", "roleArn" ],
                members: {
                    applicationId: {},
                    applicationArn: {},
                    applicationName: {},
                    applicationDescription: {},
                    applicationUrl: {},
                    applicationState: {},
                    applicationCreationDate: {
                        type: "long"
                    },
                    applicationLastUpdateDate: {
                        type: "long"
                    },
                    roleArn: {},
                    ssoClientId: {},
                    errorMessage: {},
                    tags: {
                        shape: "S6"
                    }
                }
            }
        },
        ListApplications: {
            http: {
                method: "GET",
                requestUri: "/applications",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    applicationSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "applicationId", "applicationName", "applicationUrl" ],
                            members: {
                                applicationId: {},
                                applicationName: {},
                                applicationDescription: {},
                                applicationUrl: {},
                                applicationCreationDate: {
                                    type: "long"
                                },
                                applicationLastUpdateDate: {
                                    type: "long"
                                },
                                applicationState: {}
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListTagsForResource: {
            http: {
                method: "GET",
                requestUri: "/tags/{resourceArn}"
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
                        shape: "S6"
                    }
                }
            }
        },
        TagResource: {
            http: {
                requestUri: "/tags/{resourceArn}"
            },
            input: {
                type: "structure",
                required: [ "resourceArn", "tags" ],
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    tags: {
                        shape: "S6"
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
                requestUri: "/tags/{resourceArn}"
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
            }
        },
        UpdateApplication: {
            http: {
                method: "PATCH",
                requestUri: "/applications/{applicationId}",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "applicationId" ],
                members: {
                    applicationId: {
                        location: "uri",
                        locationName: "applicationId"
                    },
                    applicationName: {},
                    applicationDescription: {},
                    clientToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        }
    },
    shapes: {
        S6: {
            type: "map",
            key: {},
            value: {}
        }
    },
    paginators: {
        ListApplications: {
            input_token: "nextToken",
            output_token: "nextToken",
            result_key: "applicationSummaries"
        }
    }
};

AWS.apiLoader.services["iotwireless"] = {};

AWS.IoTWireless = AWS.Service.defineService("iotwireless", [ "2020-11-22" ]);

AWS.apiLoader.services["iotwireless"]["2020-11-22"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-11-22",
        endpointPrefix: "api.iotwireless",
        protocol: "rest-json",
        serviceFullName: "AWS IoT Wireless",
        serviceId: "IoT Wireless",
        signatureVersion: "v4",
        signingName: "iotwireless",
        uid: "iotwireless-2020-11-22"
    },
    operations: {
        AssociateAwsAccountWithPartnerAccount: {
            http: {
                requestUri: "/partner-accounts"
            },
            input: {
                type: "structure",
                required: [ "Sidewalk" ],
                members: {
                    Sidewalk: {
                        shape: "S2"
                    },
                    ClientRequestToken: {
                        idempotencyToken: true
                    },
                    Tags: {
                        shape: "S6"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Sidewalk: {
                        shape: "S2"
                    },
                    Arn: {}
                }
            }
        },
        AssociateWirelessDeviceWithThing: {
            http: {
                method: "PUT",
                requestUri: "/wireless-devices/{Id}/thing",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "Id", "ThingArn" ],
                members: {
                    Id: {
                        location: "uri",
                        locationName: "Id"
                    },
                    ThingArn: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        AssociateWirelessGatewayWithCertificate: {
            http: {
                method: "PUT",
                requestUri: "/wireless-gateways/{Id}/certificate"
            },
            input: {
                type: "structure",
                required: [ "Id", "IotCertificateId" ],
                members: {
                    Id: {
                        location: "uri",
                        locationName: "Id"
                    },
                    IotCertificateId: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    IotCertificateId: {}
                }
            }
        },
        AssociateWirelessGatewayWithThing: {
            http: {
                method: "PUT",
                requestUri: "/wireless-gateways/{Id}/thing",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "Id", "ThingArn" ],
                members: {
                    Id: {
                        location: "uri",
                        locationName: "Id"
                    },
                    ThingArn: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        CreateDestination: {
            http: {
                requestUri: "/destinations",
                responseCode: 201
            },
            input: {
                type: "structure",
                required: [ "Name", "ExpressionType", "Expression", "RoleArn" ],
                members: {
                    Name: {},
                    ExpressionType: {},
                    Expression: {},
                    Description: {},
                    RoleArn: {},
                    Tags: {
                        shape: "S6"
                    },
                    ClientRequestToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Arn: {},
                    Name: {}
                }
            }
        },
        CreateDeviceProfile: {
            http: {
                requestUri: "/device-profiles",
                responseCode: 201
            },
            input: {
                type: "structure",
                members: {
                    Name: {},
                    LoRaWAN: {
                        shape: "Sw"
                    },
                    Tags: {
                        shape: "S6"
                    },
                    ClientRequestToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Arn: {},
                    Id: {}
                }
            }
        },
        CreateServiceProfile: {
            http: {
                requestUri: "/service-profiles",
                responseCode: 201
            },
            input: {
                type: "structure",
                members: {
                    Name: {},
                    LoRaWAN: {
                        type: "structure",
                        members: {
                            AddGwMetadata: {
                                type: "boolean"
                            }
                        }
                    },
                    Tags: {
                        shape: "S6"
                    },
                    ClientRequestToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Arn: {},
                    Id: {}
                }
            }
        },
        CreateWirelessDevice: {
            http: {
                requestUri: "/wireless-devices",
                responseCode: 201
            },
            input: {
                type: "structure",
                required: [ "Type", "DestinationName" ],
                members: {
                    Type: {},
                    Name: {},
                    Description: {},
                    DestinationName: {},
                    ClientRequestToken: {
                        idempotencyToken: true
                    },
                    LoRaWAN: {
                        shape: "S1u"
                    },
                    Tags: {
                        shape: "S6"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Arn: {},
                    Id: {}
                }
            }
        },
        CreateWirelessGateway: {
            http: {
                requestUri: "/wireless-gateways",
                responseCode: 201
            },
            input: {
                type: "structure",
                required: [ "LoRaWAN" ],
                members: {
                    Name: {},
                    Description: {},
                    LoRaWAN: {
                        shape: "S2g"
                    },
                    Tags: {
                        shape: "S6"
                    },
                    ClientRequestToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Arn: {},
                    Id: {}
                }
            }
        },
        CreateWirelessGatewayTask: {
            http: {
                requestUri: "/wireless-gateways/{Id}/tasks",
                responseCode: 201
            },
            input: {
                type: "structure",
                required: [ "Id", "WirelessGatewayTaskDefinitionId" ],
                members: {
                    Id: {
                        location: "uri",
                        locationName: "Id"
                    },
                    WirelessGatewayTaskDefinitionId: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    WirelessGatewayTaskDefinitionId: {},
                    Status: {}
                }
            }
        },
        CreateWirelessGatewayTaskDefinition: {
            http: {
                requestUri: "/wireless-gateway-task-definitions",
                responseCode: 201
            },
            input: {
                type: "structure",
                required: [ "AutoCreateTasks" ],
                members: {
                    AutoCreateTasks: {
                        type: "boolean"
                    },
                    Name: {},
                    Update: {
                        shape: "S2x"
                    },
                    ClientRequestToken: {
                        idempotencyToken: true
                    },
                    Tags: {
                        shape: "S6"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Id: {},
                    Arn: {}
                }
            }
        },
        DeleteDestination: {
            http: {
                method: "DELETE",
                requestUri: "/destinations/{Name}",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "Name" ],
                members: {
                    Name: {
                        location: "uri",
                        locationName: "Name"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DeleteDeviceProfile: {
            http: {
                method: "DELETE",
                requestUri: "/device-profiles/{Id}",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "Id" ],
                members: {
                    Id: {
                        location: "uri",
                        locationName: "Id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DeleteServiceProfile: {
            http: {
                method: "DELETE",
                requestUri: "/service-profiles/{Id}",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "Id" ],
                members: {
                    Id: {
                        location: "uri",
                        locationName: "Id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DeleteWirelessDevice: {
            http: {
                method: "DELETE",
                requestUri: "/wireless-devices/{Id}",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "Id" ],
                members: {
                    Id: {
                        location: "uri",
                        locationName: "Id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DeleteWirelessGateway: {
            http: {
                method: "DELETE",
                requestUri: "/wireless-gateways/{Id}",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "Id" ],
                members: {
                    Id: {
                        location: "uri",
                        locationName: "Id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DeleteWirelessGatewayTask: {
            http: {
                method: "DELETE",
                requestUri: "/wireless-gateways/{Id}/tasks",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "Id" ],
                members: {
                    Id: {
                        location: "uri",
                        locationName: "Id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DeleteWirelessGatewayTaskDefinition: {
            http: {
                method: "DELETE",
                requestUri: "/wireless-gateway-task-definitions/{Id}",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "Id" ],
                members: {
                    Id: {
                        location: "uri",
                        locationName: "Id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DisassociateAwsAccountFromPartnerAccount: {
            http: {
                method: "DELETE",
                requestUri: "/partner-accounts/{PartnerAccountId}",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "PartnerAccountId", "PartnerType" ],
                members: {
                    PartnerAccountId: {
                        location: "uri",
                        locationName: "PartnerAccountId"
                    },
                    PartnerType: {
                        location: "querystring",
                        locationName: "partnerType"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DisassociateWirelessDeviceFromThing: {
            http: {
                method: "DELETE",
                requestUri: "/wireless-devices/{Id}/thing",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "Id" ],
                members: {
                    Id: {
                        location: "uri",
                        locationName: "Id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DisassociateWirelessGatewayFromCertificate: {
            http: {
                method: "DELETE",
                requestUri: "/wireless-gateways/{Id}/certificate",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "Id" ],
                members: {
                    Id: {
                        location: "uri",
                        locationName: "Id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DisassociateWirelessGatewayFromThing: {
            http: {
                method: "DELETE",
                requestUri: "/wireless-gateways/{Id}/thing",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "Id" ],
                members: {
                    Id: {
                        location: "uri",
                        locationName: "Id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        GetDestination: {
            http: {
                method: "GET",
                requestUri: "/destinations/{Name}"
            },
            input: {
                type: "structure",
                required: [ "Name" ],
                members: {
                    Name: {
                        location: "uri",
                        locationName: "Name"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Arn: {},
                    Name: {},
                    Expression: {},
                    ExpressionType: {},
                    Description: {},
                    RoleArn: {}
                }
            }
        },
        GetDeviceProfile: {
            http: {
                method: "GET",
                requestUri: "/device-profiles/{Id}"
            },
            input: {
                type: "structure",
                required: [ "Id" ],
                members: {
                    Id: {
                        location: "uri",
                        locationName: "Id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Arn: {},
                    Name: {},
                    Id: {},
                    LoRaWAN: {
                        shape: "Sw"
                    }
                }
            }
        },
        GetPartnerAccount: {
            http: {
                method: "GET",
                requestUri: "/partner-accounts/{PartnerAccountId}"
            },
            input: {
                type: "structure",
                required: [ "PartnerAccountId", "PartnerType" ],
                members: {
                    PartnerAccountId: {
                        location: "uri",
                        locationName: "PartnerAccountId"
                    },
                    PartnerType: {
                        location: "querystring",
                        locationName: "partnerType"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Sidewalk: {
                        shape: "S42"
                    },
                    AccountLinked: {
                        type: "boolean"
                    }
                }
            }
        },
        GetServiceEndpoint: {
            http: {
                method: "GET",
                requestUri: "/service-endpoint"
            },
            input: {
                type: "structure",
                members: {
                    ServiceType: {
                        location: "querystring",
                        locationName: "serviceType"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    ServiceType: {},
                    ServiceEndpoint: {},
                    ServerTrust: {}
                }
            }
        },
        GetServiceProfile: {
            http: {
                method: "GET",
                requestUri: "/service-profiles/{Id}"
            },
            input: {
                type: "structure",
                required: [ "Id" ],
                members: {
                    Id: {
                        location: "uri",
                        locationName: "Id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Arn: {},
                    Name: {},
                    Id: {},
                    LoRaWAN: {
                        type: "structure",
                        members: {
                            UlRate: {
                                type: "integer"
                            },
                            UlBucketSize: {
                                type: "integer"
                            },
                            UlRatePolicy: {},
                            DlRate: {
                                type: "integer"
                            },
                            DlBucketSize: {
                                type: "integer"
                            },
                            DlRatePolicy: {},
                            AddGwMetadata: {
                                type: "boolean"
                            },
                            DevStatusReqFreq: {
                                type: "integer"
                            },
                            ReportDevStatusBattery: {
                                type: "boolean"
                            },
                            ReportDevStatusMargin: {
                                type: "boolean"
                            },
                            DrMin: {
                                type: "integer"
                            },
                            DrMax: {
                                type: "integer"
                            },
                            ChannelMask: {},
                            PrAllowed: {
                                type: "boolean"
                            },
                            HrAllowed: {
                                type: "boolean"
                            },
                            RaAllowed: {
                                type: "boolean"
                            },
                            NwkGeoLoc: {
                                type: "boolean"
                            },
                            TargetPer: {
                                type: "integer"
                            },
                            MinGwDiversity: {
                                type: "integer"
                            }
                        }
                    }
                }
            }
        },
        GetWirelessDevice: {
            http: {
                method: "GET",
                requestUri: "/wireless-devices/{Identifier}"
            },
            input: {
                type: "structure",
                required: [ "Identifier", "IdentifierType" ],
                members: {
                    Identifier: {
                        location: "uri",
                        locationName: "Identifier"
                    },
                    IdentifierType: {
                        location: "querystring",
                        locationName: "identifierType"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Type: {},
                    Name: {},
                    Description: {},
                    DestinationName: {},
                    Id: {},
                    Arn: {},
                    ThingName: {},
                    ThingArn: {},
                    LoRaWAN: {
                        shape: "S1u"
                    },
                    Sidewalk: {
                        type: "structure",
                        members: {
                            SidewalkId: {},
                            SidewalkManufacturingSn: {},
                            DeviceCertificates: {
                                shape: "S53"
                            }
                        }
                    }
                }
            }
        },
        GetWirelessDeviceStatistics: {
            http: {
                method: "GET",
                requestUri: "/wireless-devices/{Id}/statistics",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "WirelessDeviceId" ],
                members: {
                    WirelessDeviceId: {
                        location: "uri",
                        locationName: "Id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WirelessDeviceId: {},
                    LastUplinkReceivedAt: {},
                    LoRaWAN: {
                        type: "structure",
                        members: {
                            DevEui: {},
                            FPort: {
                                type: "integer"
                            },
                            DataRate: {
                                type: "integer"
                            },
                            Frequency: {
                                type: "integer"
                            },
                            Timestamp: {},
                            Gateways: {
                                type: "list",
                                member: {
                                    type: "structure",
                                    members: {
                                        GatewayEui: {},
                                        Snr: {
                                            type: "double"
                                        },
                                        Rssi: {
                                            type: "double"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    Sidewalk: {
                        type: "structure",
                        members: {
                            Rssi: {
                                type: "integer"
                            },
                            BatteryLevel: {},
                            Event: {},
                            DeviceState: {}
                        }
                    }
                }
            }
        },
        GetWirelessGateway: {
            http: {
                method: "GET",
                requestUri: "/wireless-gateways/{Identifier}"
            },
            input: {
                type: "structure",
                required: [ "Identifier", "IdentifierType" ],
                members: {
                    Identifier: {
                        location: "uri",
                        locationName: "Identifier"
                    },
                    IdentifierType: {
                        location: "querystring",
                        locationName: "identifierType"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Name: {},
                    Id: {},
                    Description: {},
                    LoRaWAN: {
                        shape: "S2g"
                    },
                    Arn: {},
                    ThingName: {},
                    ThingArn: {}
                }
            }
        },
        GetWirelessGatewayCertificate: {
            http: {
                method: "GET",
                requestUri: "/wireless-gateways/{Id}/certificate"
            },
            input: {
                type: "structure",
                required: [ "Id" ],
                members: {
                    Id: {
                        location: "uri",
                        locationName: "Id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    IotCertificateId: {},
                    LoRaWANNetworkServerCertificateId: {}
                }
            }
        },
        GetWirelessGatewayFirmwareInformation: {
            http: {
                method: "GET",
                requestUri: "/wireless-gateways/{Id}/firmware-information"
            },
            input: {
                type: "structure",
                required: [ "Id" ],
                members: {
                    Id: {
                        location: "uri",
                        locationName: "Id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    LoRaWAN: {
                        type: "structure",
                        members: {
                            CurrentVersion: {
                                shape: "S32"
                            }
                        }
                    }
                }
            }
        },
        GetWirelessGatewayStatistics: {
            http: {
                method: "GET",
                requestUri: "/wireless-gateways/{Id}/statistics",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "WirelessGatewayId" ],
                members: {
                    WirelessGatewayId: {
                        location: "uri",
                        locationName: "Id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WirelessGatewayId: {},
                    LastUplinkReceivedAt: {},
                    ConnectionStatus: {}
                }
            }
        },
        GetWirelessGatewayTask: {
            http: {
                method: "GET",
                requestUri: "/wireless-gateways/{Id}/tasks"
            },
            input: {
                type: "structure",
                required: [ "Id" ],
                members: {
                    Id: {
                        location: "uri",
                        locationName: "Id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WirelessGatewayId: {},
                    WirelessGatewayTaskDefinitionId: {},
                    LastUplinkReceivedAt: {},
                    TaskCreatedAt: {},
                    Status: {}
                }
            }
        },
        GetWirelessGatewayTaskDefinition: {
            http: {
                method: "GET",
                requestUri: "/wireless-gateway-task-definitions/{Id}"
            },
            input: {
                type: "structure",
                required: [ "Id" ],
                members: {
                    Id: {
                        location: "uri",
                        locationName: "Id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    AutoCreateTasks: {
                        type: "boolean"
                    },
                    Name: {},
                    Update: {
                        shape: "S2x"
                    },
                    Arn: {}
                }
            }
        },
        ListDestinations: {
            http: {
                method: "GET",
                requestUri: "/destinations"
            },
            input: {
                type: "structure",
                members: {
                    MaxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    NextToken: {},
                    DestinationList: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Arn: {},
                                Name: {},
                                ExpressionType: {},
                                Expression: {},
                                Description: {},
                                RoleArn: {}
                            }
                        }
                    }
                }
            }
        },
        ListDeviceProfiles: {
            http: {
                method: "GET",
                requestUri: "/device-profiles"
            },
            input: {
                type: "structure",
                members: {
                    NextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    NextToken: {},
                    DeviceProfileList: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Arn: {},
                                Name: {},
                                Id: {}
                            }
                        }
                    }
                }
            }
        },
        ListPartnerAccounts: {
            http: {
                method: "GET",
                requestUri: "/partner-accounts"
            },
            input: {
                type: "structure",
                members: {
                    NextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    NextToken: {},
                    Sidewalk: {
                        type: "list",
                        member: {
                            shape: "S42"
                        }
                    }
                }
            }
        },
        ListServiceProfiles: {
            http: {
                method: "GET",
                requestUri: "/service-profiles"
            },
            input: {
                type: "structure",
                members: {
                    NextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    NextToken: {},
                    ServiceProfileList: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Arn: {},
                                Name: {},
                                Id: {}
                            }
                        }
                    }
                }
            }
        },
        ListTagsForResource: {
            http: {
                method: "GET",
                requestUri: "/tags"
            },
            input: {
                type: "structure",
                required: [ "ResourceArn" ],
                members: {
                    ResourceArn: {
                        location: "querystring",
                        locationName: "resourceArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Tags: {
                        shape: "S6"
                    }
                }
            }
        },
        ListWirelessDevices: {
            http: {
                method: "GET",
                requestUri: "/wireless-devices"
            },
            input: {
                type: "structure",
                members: {
                    MaxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    DestinationName: {
                        location: "querystring",
                        locationName: "destinationName"
                    },
                    DeviceProfileId: {
                        location: "querystring",
                        locationName: "deviceProfileId"
                    },
                    ServiceProfileId: {
                        location: "querystring",
                        locationName: "serviceProfileId"
                    },
                    WirelessDeviceType: {
                        location: "querystring",
                        locationName: "wirelessDeviceType"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    NextToken: {},
                    WirelessDeviceList: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Arn: {},
                                Id: {},
                                Type: {},
                                Name: {},
                                DestinationName: {},
                                LastUplinkReceivedAt: {},
                                LoRaWAN: {
                                    type: "structure",
                                    members: {
                                        DevEui: {}
                                    }
                                },
                                Sidewalk: {
                                    type: "structure",
                                    members: {
                                        AmazonId: {},
                                        SidewalkId: {},
                                        SidewalkManufacturingSn: {},
                                        DeviceCertificates: {
                                            shape: "S53"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        ListWirelessGatewayTaskDefinitions: {
            http: {
                method: "GET",
                requestUri: "/wireless-gateway-task-definitions"
            },
            input: {
                type: "structure",
                members: {
                    MaxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    TaskDefinitionType: {
                        location: "querystring",
                        locationName: "taskDefinitionType"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    NextToken: {},
                    TaskDefinitions: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Id: {},
                                LoRaWAN: {
                                    type: "structure",
                                    members: {
                                        CurrentVersion: {
                                            shape: "S32"
                                        },
                                        UpdateVersion: {
                                            shape: "S32"
                                        }
                                    }
                                },
                                Arn: {}
                            }
                        }
                    }
                }
            }
        },
        ListWirelessGateways: {
            http: {
                method: "GET",
                requestUri: "/wireless-gateways"
            },
            input: {
                type: "structure",
                members: {
                    NextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    NextToken: {},
                    WirelessGatewayList: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Arn: {},
                                Id: {},
                                Name: {},
                                Description: {},
                                LoRaWAN: {
                                    shape: "S2g"
                                },
                                LastUplinkReceivedAt: {}
                            }
                        }
                    }
                }
            }
        },
        SendDataToWirelessDevice: {
            http: {
                requestUri: "/wireless-devices/{Id}/data",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "Id", "TransmitMode", "PayloadData" ],
                members: {
                    Id: {
                        location: "uri",
                        locationName: "Id"
                    },
                    TransmitMode: {
                        type: "integer"
                    },
                    PayloadData: {},
                    WirelessMetadata: {
                        type: "structure",
                        members: {
                            LoRaWAN: {
                                type: "structure",
                                members: {
                                    FPort: {
                                        type: "integer"
                                    }
                                }
                            },
                            Sidewalk: {
                                type: "structure",
                                members: {
                                    Seq: {
                                        type: "integer"
                                    },
                                    MessageType: {}
                                }
                            }
                        }
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
        TagResource: {
            http: {
                requestUri: "/tags",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "ResourceArn", "Tags" ],
                members: {
                    ResourceArn: {
                        location: "querystring",
                        locationName: "resourceArn"
                    },
                    Tags: {
                        shape: "S6"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        TestWirelessDevice: {
            http: {
                requestUri: "/wireless-devices/{Id}/test",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "Id" ],
                members: {
                    Id: {
                        location: "uri",
                        locationName: "Id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Result: {}
                }
            }
        },
        UntagResource: {
            http: {
                method: "DELETE",
                requestUri: "/tags",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "ResourceArn", "TagKeys" ],
                members: {
                    ResourceArn: {
                        location: "querystring",
                        locationName: "resourceArn"
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
        UpdateDestination: {
            http: {
                method: "PATCH",
                requestUri: "/destinations/{Name}",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "Name" ],
                members: {
                    Name: {
                        location: "uri",
                        locationName: "Name"
                    },
                    ExpressionType: {},
                    Expression: {},
                    Description: {},
                    RoleArn: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UpdatePartnerAccount: {
            http: {
                method: "PATCH",
                requestUri: "/partner-accounts/{PartnerAccountId}",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "Sidewalk", "PartnerAccountId", "PartnerType" ],
                members: {
                    Sidewalk: {
                        type: "structure",
                        members: {
                            AppServerPrivateKey: {
                                shape: "S4"
                            }
                        }
                    },
                    PartnerAccountId: {
                        location: "uri",
                        locationName: "PartnerAccountId"
                    },
                    PartnerType: {
                        location: "querystring",
                        locationName: "partnerType"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UpdateWirelessDevice: {
            http: {
                method: "PATCH",
                requestUri: "/wireless-devices/{Id}",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "Id" ],
                members: {
                    Id: {
                        location: "uri",
                        locationName: "Id"
                    },
                    DestinationName: {},
                    Name: {},
                    Description: {},
                    LoRaWAN: {
                        type: "structure",
                        members: {
                            DeviceProfileId: {},
                            ServiceProfileId: {}
                        }
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UpdateWirelessGateway: {
            http: {
                method: "PATCH",
                requestUri: "/wireless-gateways/{Id}",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "Id" ],
                members: {
                    Id: {
                        location: "uri",
                        locationName: "Id"
                    },
                    Name: {},
                    Description: {},
                    JoinEuiFilters: {
                        shape: "S2i"
                    },
                    NetIdFilters: {
                        shape: "S2k"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        }
    },
    shapes: {
        S2: {
            type: "structure",
            members: {
                AmazonId: {},
                AppServerPrivateKey: {
                    shape: "S4"
                }
            }
        },
        S4: {
            type: "string",
            sensitive: true
        },
        S6: {
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
        Sw: {
            type: "structure",
            members: {
                SupportsClassB: {
                    type: "boolean"
                },
                ClassBTimeout: {
                    type: "integer"
                },
                PingSlotPeriod: {
                    type: "integer"
                },
                PingSlotDr: {
                    type: "integer"
                },
                PingSlotFreq: {
                    type: "integer"
                },
                SupportsClassC: {
                    type: "boolean"
                },
                ClassCTimeout: {
                    type: "integer"
                },
                MacVersion: {},
                RegParamsRevision: {},
                RxDelay1: {
                    type: "integer"
                },
                RxDrOffset1: {
                    type: "integer"
                },
                RxDataRate2: {
                    type: "integer"
                },
                RxFreq2: {
                    type: "integer"
                },
                FactoryPresetFreqsList: {
                    type: "list",
                    member: {
                        type: "integer"
                    }
                },
                MaxEirp: {
                    type: "integer"
                },
                MaxDutyCycle: {
                    type: "integer"
                },
                RfRegion: {},
                SupportsJoin: {
                    type: "boolean"
                },
                Supports32BitFCnt: {
                    type: "boolean"
                }
            }
        },
        S1u: {
            type: "structure",
            members: {
                DevEui: {},
                DeviceProfileId: {},
                ServiceProfileId: {},
                OtaaV1_1: {
                    type: "structure",
                    members: {
                        AppKey: {},
                        NwkKey: {},
                        JoinEui: {}
                    }
                },
                OtaaV1_0_x: {
                    type: "structure",
                    members: {
                        AppKey: {},
                        AppEui: {}
                    }
                },
                AbpV1_1: {
                    type: "structure",
                    members: {
                        DevAddr: {},
                        SessionKeys: {
                            type: "structure",
                            members: {
                                FNwkSIntKey: {},
                                SNwkSIntKey: {},
                                NwkSEncKey: {},
                                AppSKey: {}
                            }
                        }
                    }
                },
                AbpV1_0_x: {
                    type: "structure",
                    members: {
                        DevAddr: {},
                        SessionKeys: {
                            type: "structure",
                            members: {
                                NwkSKey: {},
                                AppSKey: {}
                            }
                        }
                    }
                }
            }
        },
        S2g: {
            type: "structure",
            members: {
                GatewayEui: {},
                RfRegion: {},
                JoinEuiFilters: {
                    shape: "S2i"
                },
                NetIdFilters: {
                    shape: "S2k"
                },
                SubBands: {
                    type: "list",
                    member: {
                        type: "integer"
                    }
                }
            }
        },
        S2i: {
            type: "list",
            member: {
                type: "list",
                member: {}
            }
        },
        S2k: {
            type: "list",
            member: {}
        },
        S2x: {
            type: "structure",
            members: {
                UpdateDataSource: {},
                UpdateDataRole: {},
                LoRaWAN: {
                    type: "structure",
                    members: {
                        UpdateSignature: {},
                        SigKeyCrc: {
                            type: "long"
                        },
                        CurrentVersion: {
                            shape: "S32"
                        },
                        UpdateVersion: {
                            shape: "S32"
                        }
                    }
                }
            }
        },
        S32: {
            type: "structure",
            members: {
                PackageVersion: {},
                Model: {},
                Station: {}
            }
        },
        S42: {
            type: "structure",
            members: {
                AmazonId: {},
                Fingerprint: {
                    type: "string",
                    sensitive: true
                },
                Arn: {}
            }
        },
        S53: {
            type: "list",
            member: {
                type: "structure",
                required: [ "SigningAlg", "Value" ],
                members: {
                    SigningAlg: {},
                    Value: {}
                }
            }
        }
    },
    paginators: {
        ListDestinations: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListDeviceProfiles: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListServiceProfiles: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListWirelessDevices: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListWirelessGateways: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        }
    }
};

AWS.apiLoader.services["location"] = {};

AWS.Location = AWS.Service.defineService("location", [ "2020-11-19" ]);

AWS.apiLoader.services["location"]["2020-11-19"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-11-19",
        endpointPrefix: "geo",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceFullName: "Amazon Location Service",
        serviceId: "Location",
        signatureVersion: "v4",
        signingName: "geo",
        uid: "location-2020-11-19"
    },
    operations: {
        AssociateTrackerConsumer: {
            http: {
                requestUri: "/tracking/v0/trackers/{TrackerName}/consumers",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "ConsumerArn", "TrackerName" ],
                members: {
                    ConsumerArn: {},
                    TrackerName: {
                        location: "uri",
                        locationName: "TrackerName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            endpoint: {
                hostPrefix: "tracking."
            }
        },
        BatchDeleteGeofence: {
            http: {
                requestUri: "/geofencing/v0/collections/{CollectionName}/delete-geofences",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "CollectionName", "GeofenceIds" ],
                members: {
                    CollectionName: {
                        location: "uri",
                        locationName: "CollectionName"
                    },
                    GeofenceIds: {
                        type: "list",
                        member: {}
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "Errors" ],
                members: {
                    Errors: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "Error", "GeofenceId" ],
                            members: {
                                Error: {
                                    shape: "Sb"
                                },
                                GeofenceId: {}
                            }
                        }
                    }
                }
            },
            endpoint: {
                hostPrefix: "geofencing."
            }
        },
        BatchEvaluateGeofences: {
            http: {
                requestUri: "/geofencing/v0/collections/{CollectionName}/positions",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "CollectionName", "DevicePositionUpdates" ],
                members: {
                    CollectionName: {
                        location: "uri",
                        locationName: "CollectionName"
                    },
                    DevicePositionUpdates: {
                        type: "list",
                        member: {
                            shape: "Sg"
                        }
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "Errors" ],
                members: {
                    Errors: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "DeviceId", "Error", "SampleTime" ],
                            members: {
                                DeviceId: {},
                                Error: {
                                    shape: "Sb"
                                },
                                SampleTime: {
                                    shape: "Sj"
                                }
                            }
                        }
                    }
                }
            },
            endpoint: {
                hostPrefix: "geofencing."
            }
        },
        BatchGetDevicePosition: {
            http: {
                requestUri: "/tracking/v0/trackers/{TrackerName}/get-positions",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "DeviceIds", "TrackerName" ],
                members: {
                    DeviceIds: {
                        type: "list",
                        member: {}
                    },
                    TrackerName: {
                        location: "uri",
                        locationName: "TrackerName"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "DevicePositions", "Errors" ],
                members: {
                    DevicePositions: {
                        shape: "Sr"
                    },
                    Errors: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "DeviceId", "Error" ],
                            members: {
                                DeviceId: {},
                                Error: {
                                    shape: "Sb"
                                }
                            }
                        }
                    }
                }
            },
            endpoint: {
                hostPrefix: "tracking."
            }
        },
        BatchPutGeofence: {
            http: {
                requestUri: "/geofencing/v0/collections/{CollectionName}/put-geofences",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "CollectionName", "Entries" ],
                members: {
                    CollectionName: {
                        location: "uri",
                        locationName: "CollectionName"
                    },
                    Entries: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "GeofenceId", "Geometry" ],
                            members: {
                                GeofenceId: {},
                                Geometry: {
                                    shape: "Sy"
                                }
                            }
                        }
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "Errors", "Successes" ],
                members: {
                    Errors: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "Error", "GeofenceId" ],
                            members: {
                                Error: {
                                    shape: "Sb"
                                },
                                GeofenceId: {}
                            }
                        }
                    },
                    Successes: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "CreateTime", "GeofenceId", "UpdateTime" ],
                            members: {
                                CreateTime: {
                                    shape: "Sj"
                                },
                                GeofenceId: {},
                                UpdateTime: {
                                    shape: "Sj"
                                }
                            }
                        }
                    }
                }
            },
            endpoint: {
                hostPrefix: "geofencing."
            }
        },
        BatchUpdateDevicePosition: {
            http: {
                requestUri: "/tracking/v0/trackers/{TrackerName}/positions",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "TrackerName", "Updates" ],
                members: {
                    TrackerName: {
                        location: "uri",
                        locationName: "TrackerName"
                    },
                    Updates: {
                        type: "list",
                        member: {
                            shape: "Sg"
                        }
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "Errors" ],
                members: {
                    Errors: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "DeviceId", "Error", "SampleTime" ],
                            members: {
                                DeviceId: {},
                                Error: {
                                    shape: "Sb"
                                },
                                SampleTime: {
                                    shape: "Sj"
                                }
                            }
                        }
                    }
                }
            },
            endpoint: {
                hostPrefix: "tracking."
            }
        },
        CreateGeofenceCollection: {
            http: {
                requestUri: "/geofencing/v0/collections",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "CollectionName", "PricingPlan" ],
                members: {
                    CollectionName: {},
                    Description: {},
                    PricingPlan: {},
                    PricingPlanDataSource: {}
                }
            },
            output: {
                type: "structure",
                required: [ "CollectionArn", "CollectionName", "CreateTime" ],
                members: {
                    CollectionArn: {},
                    CollectionName: {},
                    CreateTime: {
                        shape: "Sj"
                    }
                }
            },
            endpoint: {
                hostPrefix: "geofencing."
            },
            idempotent: true
        },
        CreateMap: {
            http: {
                requestUri: "/maps/v0/maps",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "Configuration", "MapName", "PricingPlan" ],
                members: {
                    Configuration: {
                        shape: "S1g"
                    },
                    Description: {},
                    MapName: {},
                    PricingPlan: {}
                }
            },
            output: {
                type: "structure",
                required: [ "CreateTime", "MapArn", "MapName" ],
                members: {
                    CreateTime: {
                        shape: "Sj"
                    },
                    MapArn: {},
                    MapName: {}
                }
            },
            endpoint: {
                hostPrefix: "maps."
            },
            idempotent: true
        },
        CreatePlaceIndex: {
            http: {
                requestUri: "/places/v0/indexes",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "DataSource", "IndexName", "PricingPlan" ],
                members: {
                    DataSource: {},
                    DataSourceConfiguration: {
                        shape: "S1k"
                    },
                    Description: {},
                    IndexName: {},
                    PricingPlan: {}
                }
            },
            output: {
                type: "structure",
                required: [ "CreateTime", "IndexArn", "IndexName" ],
                members: {
                    CreateTime: {
                        shape: "Sj"
                    },
                    IndexArn: {},
                    IndexName: {}
                }
            },
            endpoint: {
                hostPrefix: "places."
            },
            idempotent: true
        },
        CreateTracker: {
            http: {
                requestUri: "/tracking/v0/trackers",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "PricingPlan", "TrackerName" ],
                members: {
                    Description: {},
                    PricingPlan: {},
                    PricingPlanDataSource: {},
                    TrackerName: {}
                }
            },
            output: {
                type: "structure",
                required: [ "CreateTime", "TrackerArn", "TrackerName" ],
                members: {
                    CreateTime: {
                        shape: "Sj"
                    },
                    TrackerArn: {},
                    TrackerName: {}
                }
            },
            endpoint: {
                hostPrefix: "tracking."
            },
            idempotent: true
        },
        DeleteGeofenceCollection: {
            http: {
                method: "DELETE",
                requestUri: "/geofencing/v0/collections/{CollectionName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "CollectionName" ],
                members: {
                    CollectionName: {
                        location: "uri",
                        locationName: "CollectionName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            endpoint: {
                hostPrefix: "geofencing."
            },
            idempotent: true
        },
        DeleteMap: {
            http: {
                method: "DELETE",
                requestUri: "/maps/v0/maps/{MapName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "MapName" ],
                members: {
                    MapName: {
                        location: "uri",
                        locationName: "MapName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            endpoint: {
                hostPrefix: "maps."
            },
            idempotent: true
        },
        DeletePlaceIndex: {
            http: {
                method: "DELETE",
                requestUri: "/places/v0/indexes/{IndexName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "IndexName" ],
                members: {
                    IndexName: {
                        location: "uri",
                        locationName: "IndexName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            endpoint: {
                hostPrefix: "places."
            },
            idempotent: true
        },
        DeleteTracker: {
            http: {
                method: "DELETE",
                requestUri: "/tracking/v0/trackers/{TrackerName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "TrackerName" ],
                members: {
                    TrackerName: {
                        location: "uri",
                        locationName: "TrackerName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            endpoint: {
                hostPrefix: "tracking."
            },
            idempotent: true
        },
        DescribeGeofenceCollection: {
            http: {
                method: "GET",
                requestUri: "/geofencing/v0/collections/{CollectionName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "CollectionName" ],
                members: {
                    CollectionName: {
                        location: "uri",
                        locationName: "CollectionName"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "CollectionArn", "CollectionName", "CreateTime", "Description", "PricingPlan", "UpdateTime" ],
                members: {
                    CollectionArn: {},
                    CollectionName: {},
                    CreateTime: {
                        shape: "Sj"
                    },
                    Description: {},
                    PricingPlan: {},
                    PricingPlanDataSource: {},
                    UpdateTime: {
                        shape: "Sj"
                    }
                }
            },
            endpoint: {
                hostPrefix: "geofencing."
            }
        },
        DescribeMap: {
            http: {
                method: "GET",
                requestUri: "/maps/v0/maps/{MapName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "MapName" ],
                members: {
                    MapName: {
                        location: "uri",
                        locationName: "MapName"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "Configuration", "CreateTime", "DataSource", "Description", "MapArn", "MapName", "PricingPlan", "UpdateTime" ],
                members: {
                    Configuration: {
                        shape: "S1g"
                    },
                    CreateTime: {
                        shape: "Sj"
                    },
                    DataSource: {},
                    Description: {},
                    MapArn: {},
                    MapName: {},
                    PricingPlan: {},
                    UpdateTime: {
                        shape: "Sj"
                    }
                }
            },
            endpoint: {
                hostPrefix: "maps."
            }
        },
        DescribePlaceIndex: {
            http: {
                method: "GET",
                requestUri: "/places/v0/indexes/{IndexName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "IndexName" ],
                members: {
                    IndexName: {
                        location: "uri",
                        locationName: "IndexName"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "CreateTime", "DataSource", "DataSourceConfiguration", "Description", "IndexArn", "IndexName", "PricingPlan", "UpdateTime" ],
                members: {
                    CreateTime: {
                        shape: "Sj"
                    },
                    DataSource: {},
                    DataSourceConfiguration: {
                        shape: "S1k"
                    },
                    Description: {},
                    IndexArn: {},
                    IndexName: {},
                    PricingPlan: {},
                    UpdateTime: {
                        shape: "Sj"
                    }
                }
            },
            endpoint: {
                hostPrefix: "places."
            }
        },
        DescribeTracker: {
            http: {
                method: "GET",
                requestUri: "/tracking/v0/trackers/{TrackerName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "TrackerName" ],
                members: {
                    TrackerName: {
                        location: "uri",
                        locationName: "TrackerName"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "CreateTime", "Description", "PricingPlan", "TrackerArn", "TrackerName", "UpdateTime" ],
                members: {
                    CreateTime: {
                        shape: "Sj"
                    },
                    Description: {},
                    PricingPlan: {},
                    PricingPlanDataSource: {},
                    TrackerArn: {},
                    TrackerName: {},
                    UpdateTime: {
                        shape: "Sj"
                    }
                }
            },
            endpoint: {
                hostPrefix: "tracking."
            }
        },
        DisassociateTrackerConsumer: {
            http: {
                method: "DELETE",
                requestUri: "/tracking/v0/trackers/{TrackerName}/consumers/{ConsumerArn}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "ConsumerArn", "TrackerName" ],
                members: {
                    ConsumerArn: {
                        location: "uri",
                        locationName: "ConsumerArn"
                    },
                    TrackerName: {
                        location: "uri",
                        locationName: "TrackerName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            endpoint: {
                hostPrefix: "tracking."
            }
        },
        GetDevicePosition: {
            http: {
                method: "GET",
                requestUri: "/tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/positions/latest",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "DeviceId", "TrackerName" ],
                members: {
                    DeviceId: {
                        location: "uri",
                        locationName: "DeviceId"
                    },
                    TrackerName: {
                        location: "uri",
                        locationName: "TrackerName"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "Position", "ReceivedTime", "SampleTime" ],
                members: {
                    DeviceId: {},
                    Position: {
                        shape: "Sh"
                    },
                    ReceivedTime: {
                        shape: "Sj"
                    },
                    SampleTime: {
                        shape: "Sj"
                    }
                }
            },
            endpoint: {
                hostPrefix: "tracking."
            }
        },
        GetDevicePositionHistory: {
            http: {
                requestUri: "/tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/list-positions",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "DeviceId", "TrackerName" ],
                members: {
                    DeviceId: {
                        location: "uri",
                        locationName: "DeviceId"
                    },
                    EndTimeExclusive: {
                        shape: "Sj"
                    },
                    NextToken: {},
                    StartTimeInclusive: {
                        shape: "Sj"
                    },
                    TrackerName: {
                        location: "uri",
                        locationName: "TrackerName"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "DevicePositions" ],
                members: {
                    DevicePositions: {
                        shape: "Sr"
                    },
                    NextToken: {}
                }
            },
            endpoint: {
                hostPrefix: "tracking."
            }
        },
        GetGeofence: {
            http: {
                method: "GET",
                requestUri: "/geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "CollectionName", "GeofenceId" ],
                members: {
                    CollectionName: {
                        location: "uri",
                        locationName: "CollectionName"
                    },
                    GeofenceId: {
                        location: "uri",
                        locationName: "GeofenceId"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "CreateTime", "GeofenceId", "Geometry", "Status", "UpdateTime" ],
                members: {
                    CreateTime: {
                        shape: "Sj"
                    },
                    GeofenceId: {},
                    Geometry: {
                        shape: "Sy"
                    },
                    Status: {},
                    UpdateTime: {
                        shape: "Sj"
                    }
                }
            },
            endpoint: {
                hostPrefix: "geofencing."
            }
        },
        GetMapGlyphs: {
            http: {
                method: "GET",
                requestUri: "/maps/v0/maps/{MapName}/glyphs/{FontStack}/{FontUnicodeRange}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "FontStack", "FontUnicodeRange", "MapName" ],
                members: {
                    FontStack: {
                        location: "uri",
                        locationName: "FontStack"
                    },
                    FontUnicodeRange: {
                        location: "uri",
                        locationName: "FontUnicodeRange"
                    },
                    MapName: {
                        location: "uri",
                        locationName: "MapName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Blob: {
                        type: "blob"
                    },
                    ContentType: {
                        location: "header",
                        locationName: "Content-Type"
                    }
                },
                payload: "Blob"
            },
            endpoint: {
                hostPrefix: "maps."
            }
        },
        GetMapSprites: {
            http: {
                method: "GET",
                requestUri: "/maps/v0/maps/{MapName}/sprites/{FileName}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "FileName", "MapName" ],
                members: {
                    FileName: {
                        location: "uri",
                        locationName: "FileName"
                    },
                    MapName: {
                        location: "uri",
                        locationName: "MapName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Blob: {
                        type: "blob"
                    },
                    ContentType: {
                        location: "header",
                        locationName: "Content-Type"
                    }
                },
                payload: "Blob"
            },
            endpoint: {
                hostPrefix: "maps."
            }
        },
        GetMapStyleDescriptor: {
            http: {
                method: "GET",
                requestUri: "/maps/v0/maps/{MapName}/style-descriptor",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "MapName" ],
                members: {
                    MapName: {
                        location: "uri",
                        locationName: "MapName"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Blob: {
                        type: "blob"
                    },
                    ContentType: {
                        location: "header",
                        locationName: "Content-Type"
                    }
                },
                payload: "Blob"
            },
            endpoint: {
                hostPrefix: "maps."
            }
        },
        GetMapTile: {
            http: {
                method: "GET",
                requestUri: "/maps/v0/maps/{MapName}/tiles/{Z}/{X}/{Y}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "MapName", "X", "Y", "Z" ],
                members: {
                    MapName: {
                        location: "uri",
                        locationName: "MapName"
                    },
                    X: {
                        location: "uri",
                        locationName: "X"
                    },
                    Y: {
                        location: "uri",
                        locationName: "Y"
                    },
                    Z: {
                        location: "uri",
                        locationName: "Z"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Blob: {
                        type: "blob"
                    },
                    ContentType: {
                        location: "header",
                        locationName: "Content-Type"
                    }
                },
                payload: "Blob"
            },
            endpoint: {
                hostPrefix: "maps."
            }
        },
        ListGeofenceCollections: {
            http: {
                requestUri: "/geofencing/v0/list-collections",
                responseCode: 200
            },
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
                required: [ "Entries" ],
                members: {
                    Entries: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "CollectionName", "CreateTime", "Description", "PricingPlan", "UpdateTime" ],
                            members: {
                                CollectionName: {},
                                CreateTime: {
                                    shape: "Sj"
                                },
                                Description: {},
                                PricingPlan: {},
                                PricingPlanDataSource: {},
                                UpdateTime: {
                                    shape: "Sj"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            },
            endpoint: {
                hostPrefix: "geofencing."
            }
        },
        ListGeofences: {
            http: {
                requestUri: "/geofencing/v0/collections/{CollectionName}/list-geofences",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "CollectionName" ],
                members: {
                    CollectionName: {
                        location: "uri",
                        locationName: "CollectionName"
                    },
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                required: [ "Entries" ],
                members: {
                    Entries: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "CreateTime", "GeofenceId", "Geometry", "Status", "UpdateTime" ],
                            members: {
                                CreateTime: {
                                    shape: "Sj"
                                },
                                GeofenceId: {},
                                Geometry: {
                                    shape: "Sy"
                                },
                                Status: {},
                                UpdateTime: {
                                    shape: "Sj"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            },
            endpoint: {
                hostPrefix: "geofencing."
            }
        },
        ListMaps: {
            http: {
                requestUri: "/maps/v0/list-maps",
                responseCode: 200
            },
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
                required: [ "Entries" ],
                members: {
                    Entries: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "CreateTime", "DataSource", "Description", "MapName", "PricingPlan", "UpdateTime" ],
                            members: {
                                CreateTime: {
                                    shape: "Sj"
                                },
                                DataSource: {},
                                Description: {},
                                MapName: {},
                                PricingPlan: {},
                                UpdateTime: {
                                    shape: "Sj"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            },
            endpoint: {
                hostPrefix: "maps."
            }
        },
        ListPlaceIndexes: {
            http: {
                requestUri: "/places/v0/list-indexes",
                responseCode: 200
            },
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
                required: [ "Entries" ],
                members: {
                    Entries: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "CreateTime", "DataSource", "Description", "IndexName", "PricingPlan", "UpdateTime" ],
                            members: {
                                CreateTime: {
                                    shape: "Sj"
                                },
                                DataSource: {},
                                Description: {},
                                IndexName: {},
                                PricingPlan: {},
                                UpdateTime: {
                                    shape: "Sj"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            },
            endpoint: {
                hostPrefix: "places."
            }
        },
        ListTrackerConsumers: {
            http: {
                requestUri: "/tracking/v0/trackers/{TrackerName}/list-consumers",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "TrackerName" ],
                members: {
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {},
                    TrackerName: {
                        location: "uri",
                        locationName: "TrackerName"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "ConsumerArns" ],
                members: {
                    ConsumerArns: {
                        type: "list",
                        member: {}
                    },
                    NextToken: {}
                }
            },
            endpoint: {
                hostPrefix: "tracking."
            }
        },
        ListTrackers: {
            http: {
                requestUri: "/tracking/v0/list-trackers",
                responseCode: 200
            },
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
                required: [ "Entries" ],
                members: {
                    Entries: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "CreateTime", "Description", "PricingPlan", "TrackerName", "UpdateTime" ],
                            members: {
                                CreateTime: {
                                    shape: "Sj"
                                },
                                Description: {},
                                PricingPlan: {},
                                PricingPlanDataSource: {},
                                TrackerName: {},
                                UpdateTime: {
                                    shape: "Sj"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            },
            endpoint: {
                hostPrefix: "tracking."
            }
        },
        PutGeofence: {
            http: {
                method: "PUT",
                requestUri: "/geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "CollectionName", "GeofenceId", "Geometry" ],
                members: {
                    CollectionName: {
                        location: "uri",
                        locationName: "CollectionName"
                    },
                    GeofenceId: {
                        location: "uri",
                        locationName: "GeofenceId"
                    },
                    Geometry: {
                        shape: "Sy"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "CreateTime", "GeofenceId", "UpdateTime" ],
                members: {
                    CreateTime: {
                        shape: "Sj"
                    },
                    GeofenceId: {},
                    UpdateTime: {
                        shape: "Sj"
                    }
                }
            },
            endpoint: {
                hostPrefix: "geofencing."
            }
        },
        SearchPlaceIndexForPosition: {
            http: {
                requestUri: "/places/v0/indexes/{IndexName}/search/position",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "IndexName", "Position" ],
                members: {
                    IndexName: {
                        location: "uri",
                        locationName: "IndexName"
                    },
                    MaxResults: {
                        type: "integer"
                    },
                    Position: {
                        shape: "Sh"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "Results", "Summary" ],
                members: {
                    Results: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "Place" ],
                            members: {
                                Place: {
                                    shape: "S3r"
                                }
                            }
                        }
                    },
                    Summary: {
                        type: "structure",
                        required: [ "DataSource", "Position" ],
                        members: {
                            DataSource: {},
                            MaxResults: {
                                type: "integer"
                            },
                            Position: {
                                shape: "Sh"
                            }
                        }
                    }
                }
            },
            endpoint: {
                hostPrefix: "places."
            }
        },
        SearchPlaceIndexForText: {
            http: {
                requestUri: "/places/v0/indexes/{IndexName}/search/text",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "IndexName", "Text" ],
                members: {
                    BiasPosition: {
                        shape: "Sh"
                    },
                    FilterBBox: {
                        shape: "S3v"
                    },
                    FilterCountries: {
                        shape: "S3w"
                    },
                    IndexName: {
                        location: "uri",
                        locationName: "IndexName"
                    },
                    MaxResults: {
                        type: "integer"
                    },
                    Text: {
                        type: "string",
                        sensitive: true
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "Results", "Summary" ],
                members: {
                    Results: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "Place" ],
                            members: {
                                Place: {
                                    shape: "S3r"
                                }
                            }
                        }
                    },
                    Summary: {
                        type: "structure",
                        required: [ "DataSource", "Text" ],
                        members: {
                            BiasPosition: {
                                shape: "Sh"
                            },
                            DataSource: {},
                            FilterBBox: {
                                shape: "S3v"
                            },
                            FilterCountries: {
                                shape: "S3w"
                            },
                            MaxResults: {
                                type: "integer"
                            },
                            ResultBBox: {
                                shape: "S3v"
                            },
                            Text: {
                                type: "string",
                                sensitive: true
                            }
                        }
                    }
                }
            },
            endpoint: {
                hostPrefix: "places."
            }
        }
    },
    shapes: {
        Sb: {
            type: "structure",
            members: {
                Code: {},
                Message: {}
            }
        },
        Sg: {
            type: "structure",
            required: [ "DeviceId", "Position", "SampleTime" ],
            members: {
                DeviceId: {},
                Position: {
                    shape: "Sh"
                },
                SampleTime: {
                    shape: "Sj"
                }
            }
        },
        Sh: {
            type: "list",
            member: {
                type: "double"
            },
            sensitive: true
        },
        Sj: {
            type: "timestamp",
            timestampFormat: "iso8601"
        },
        Sr: {
            type: "list",
            member: {
                type: "structure",
                required: [ "Position", "ReceivedTime", "SampleTime" ],
                members: {
                    DeviceId: {},
                    Position: {
                        shape: "Sh"
                    },
                    ReceivedTime: {
                        shape: "Sj"
                    },
                    SampleTime: {
                        shape: "Sj"
                    }
                }
            }
        },
        Sy: {
            type: "structure",
            members: {
                Polygon: {
                    type: "list",
                    member: {
                        type: "list",
                        member: {
                            shape: "Sh"
                        }
                    }
                }
            }
        },
        S1g: {
            type: "structure",
            required: [ "Style" ],
            members: {
                Style: {}
            }
        },
        S1k: {
            type: "structure",
            members: {
                IntendedUse: {}
            }
        },
        S3r: {
            type: "structure",
            required: [ "Geometry" ],
            members: {
                AddressNumber: {},
                Country: {},
                Geometry: {
                    type: "structure",
                    members: {
                        Point: {
                            shape: "Sh"
                        }
                    }
                },
                Label: {},
                Municipality: {},
                Neighborhood: {},
                PostalCode: {},
                Region: {},
                Street: {},
                SubRegion: {}
            }
        },
        S3v: {
            type: "list",
            member: {
                type: "double"
            },
            sensitive: true
        },
        S3w: {
            type: "list",
            member: {}
        }
    },
    paginators: {
        GetDevicePositionHistory: {
            input_token: "NextToken",
            output_token: "NextToken",
            result_key: "DevicePositions"
        },
        ListGeofenceCollections: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "Entries"
        },
        ListGeofences: {
            input_token: "NextToken",
            output_token: "NextToken",
            result_key: "Entries"
        },
        ListMaps: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "Entries"
        },
        ListPlaceIndexes: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "Entries"
        },
        ListTrackerConsumers: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "ConsumerArns"
        },
        ListTrackers: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults",
            result_key: "Entries"
        }
    }
};

AWS.apiLoader.services["wellarchitected"] = {};

AWS.WellArchitected = AWS.Service.defineService("wellarchitected", [ "2020-03-31" ]);

AWS.apiLoader.services["wellarchitected"]["2020-03-31"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-03-31",
        endpointPrefix: "wellarchitected",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceAbbreviation: "Well-Architected",
        serviceFullName: "AWS Well-Architected Tool",
        serviceId: "WellArchitected",
        signatureVersion: "v4",
        signingName: "wellarchitected",
        uid: "wellarchitected-2020-03-31"
    },
    operations: {
        AssociateLenses: {
            http: {
                method: "PATCH",
                requestUri: "/workloads/{WorkloadId}/associateLenses"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "LensAliases" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    LensAliases: {
                        shape: "S3"
                    }
                }
            }
        },
        CreateMilestone: {
            http: {
                requestUri: "/workloads/{WorkloadId}/milestones"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "MilestoneName", "ClientRequestToken" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    MilestoneName: {},
                    ClientRequestToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    MilestoneNumber: {
                        type: "integer"
                    }
                }
            }
        },
        CreateWorkload: {
            http: {
                requestUri: "/workloads"
            },
            input: {
                type: "structure",
                required: [ "WorkloadName", "Description", "Environment", "ReviewOwner", "Lenses", "ClientRequestToken" ],
                members: {
                    WorkloadName: {},
                    Description: {},
                    Environment: {},
                    AccountIds: {
                        shape: "Se"
                    },
                    AwsRegions: {
                        shape: "Sg"
                    },
                    NonAwsRegions: {
                        shape: "Si"
                    },
                    PillarPriorities: {
                        shape: "Sk"
                    },
                    ArchitecturalDesign: {},
                    ReviewOwner: {},
                    IndustryType: {},
                    Industry: {},
                    Lenses: {
                        shape: "Sq"
                    },
                    Notes: {},
                    ClientRequestToken: {
                        idempotencyToken: true
                    },
                    Tags: {
                        shape: "Ss"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    WorkloadArn: {}
                }
            }
        },
        CreateWorkloadShare: {
            http: {
                requestUri: "/workloads/{WorkloadId}/shares"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "SharedWith", "PermissionType", "ClientRequestToken" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    SharedWith: {},
                    PermissionType: {},
                    ClientRequestToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    ShareId: {}
                }
            }
        },
        DeleteWorkload: {
            http: {
                method: "DELETE",
                requestUri: "/workloads/{WorkloadId}"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "ClientRequestToken" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    ClientRequestToken: {
                        idempotencyToken: true,
                        location: "querystring",
                        locationName: "ClientRequestToken"
                    }
                }
            }
        },
        DeleteWorkloadShare: {
            http: {
                method: "DELETE",
                requestUri: "/workloads/{WorkloadId}/shares/{ShareId}"
            },
            input: {
                type: "structure",
                required: [ "ShareId", "WorkloadId", "ClientRequestToken" ],
                members: {
                    ShareId: {
                        location: "uri",
                        locationName: "ShareId"
                    },
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    ClientRequestToken: {
                        idempotencyToken: true,
                        location: "querystring",
                        locationName: "ClientRequestToken"
                    }
                }
            }
        },
        DisassociateLenses: {
            http: {
                method: "PATCH",
                requestUri: "/workloads/{WorkloadId}/disassociateLenses"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "LensAliases" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    LensAliases: {
                        shape: "S3"
                    }
                }
            }
        },
        GetAnswer: {
            http: {
                method: "GET",
                requestUri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "LensAlias", "QuestionId" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    LensAlias: {
                        location: "uri",
                        locationName: "LensAlias"
                    },
                    QuestionId: {
                        location: "uri",
                        locationName: "QuestionId"
                    },
                    MilestoneNumber: {
                        location: "querystring",
                        locationName: "MilestoneNumber",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    MilestoneNumber: {
                        type: "integer"
                    },
                    LensAlias: {},
                    Answer: {
                        shape: "S18"
                    }
                }
            }
        },
        GetLensReview: {
            http: {
                method: "GET",
                requestUri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "LensAlias" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    LensAlias: {
                        location: "uri",
                        locationName: "LensAlias"
                    },
                    MilestoneNumber: {
                        location: "querystring",
                        locationName: "MilestoneNumber",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    MilestoneNumber: {
                        type: "integer"
                    },
                    LensReview: {
                        shape: "S1n"
                    }
                }
            }
        },
        GetLensReviewReport: {
            http: {
                method: "GET",
                requestUri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}/report"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "LensAlias" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    LensAlias: {
                        location: "uri",
                        locationName: "LensAlias"
                    },
                    MilestoneNumber: {
                        location: "querystring",
                        locationName: "MilestoneNumber",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    MilestoneNumber: {
                        type: "integer"
                    },
                    LensReviewReport: {
                        type: "structure",
                        members: {
                            LensAlias: {},
                            Base64String: {}
                        }
                    }
                }
            }
        },
        GetLensVersionDifference: {
            http: {
                method: "GET",
                requestUri: "/lenses/{LensAlias}/versionDifference"
            },
            input: {
                type: "structure",
                required: [ "LensAlias", "BaseLensVersion" ],
                members: {
                    LensAlias: {
                        location: "uri",
                        locationName: "LensAlias"
                    },
                    BaseLensVersion: {
                        location: "querystring",
                        locationName: "BaseLensVersion"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    LensAlias: {},
                    BaseLensVersion: {},
                    LatestLensVersion: {},
                    VersionDifferences: {
                        type: "structure",
                        members: {
                            PillarDifferences: {
                                type: "list",
                                member: {
                                    type: "structure",
                                    members: {
                                        PillarId: {},
                                        DifferenceStatus: {},
                                        QuestionDifferences: {
                                            type: "list",
                                            member: {
                                                type: "structure",
                                                members: {
                                                    QuestionId: {},
                                                    QuestionTitle: {},
                                                    DifferenceStatus: {}
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        GetMilestone: {
            http: {
                method: "GET",
                requestUri: "/workloads/{WorkloadId}/milestones/{MilestoneNumber}"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "MilestoneNumber" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    MilestoneNumber: {
                        location: "uri",
                        locationName: "MilestoneNumber",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    Milestone: {
                        type: "structure",
                        members: {
                            MilestoneNumber: {
                                type: "integer"
                            },
                            MilestoneName: {},
                            RecordedAt: {
                                type: "timestamp"
                            },
                            Workload: {
                                shape: "S2d"
                            }
                        }
                    }
                }
            }
        },
        GetWorkload: {
            http: {
                method: "GET",
                requestUri: "/workloads/{WorkloadId}"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Workload: {
                        shape: "S2d"
                    }
                }
            }
        },
        ListAnswers: {
            http: {
                method: "GET",
                requestUri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "LensAlias" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    LensAlias: {
                        location: "uri",
                        locationName: "LensAlias"
                    },
                    PillarId: {
                        location: "querystring",
                        locationName: "PillarId"
                    },
                    MilestoneNumber: {
                        location: "querystring",
                        locationName: "MilestoneNumber",
                        type: "integer"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "NextToken"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "MaxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    MilestoneNumber: {
                        type: "integer"
                    },
                    LensAlias: {},
                    AnswerSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                QuestionId: {},
                                PillarId: {},
                                QuestionTitle: {},
                                Choices: {
                                    shape: "S1d"
                                },
                                SelectedChoices: {
                                    shape: "S1i"
                                },
                                IsApplicable: {
                                    type: "boolean"
                                },
                                Risk: {}
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListLensReviewImprovements: {
            http: {
                method: "GET",
                requestUri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}/improvements"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "LensAlias" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    LensAlias: {
                        location: "uri",
                        locationName: "LensAlias"
                    },
                    PillarId: {
                        location: "querystring",
                        locationName: "PillarId"
                    },
                    MilestoneNumber: {
                        location: "querystring",
                        locationName: "MilestoneNumber",
                        type: "integer"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "NextToken"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "MaxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    MilestoneNumber: {
                        type: "integer"
                    },
                    LensAlias: {},
                    ImprovementSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                QuestionId: {},
                                PillarId: {},
                                QuestionTitle: {},
                                Risk: {},
                                ImprovementPlanUrl: {}
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListLensReviews: {
            http: {
                method: "GET",
                requestUri: "/workloads/{WorkloadId}/lensReviews"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    MilestoneNumber: {
                        location: "querystring",
                        locationName: "MilestoneNumber",
                        type: "integer"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "NextToken"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "MaxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    MilestoneNumber: {
                        type: "integer"
                    },
                    LensReviewSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                LensAlias: {},
                                LensVersion: {},
                                LensName: {},
                                LensStatus: {},
                                UpdatedAt: {
                                    type: "timestamp"
                                },
                                RiskCounts: {
                                    shape: "S1u"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListLenses: {
            http: {
                method: "GET",
                requestUri: "/lenses"
            },
            input: {
                type: "structure",
                members: {
                    NextToken: {
                        location: "querystring",
                        locationName: "NextToken"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "MaxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    LensSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                LensAlias: {},
                                LensVersion: {},
                                LensName: {},
                                Description: {}
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListMilestones: {
            http: {
                requestUri: "/workloads/{WorkloadId}/milestonesSummaries"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
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
                    WorkloadId: {},
                    MilestoneSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                MilestoneNumber: {
                                    type: "integer"
                                },
                                MilestoneName: {},
                                RecordedAt: {
                                    type: "timestamp"
                                },
                                WorkloadSummary: {
                                    shape: "S37"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListNotifications: {
            http: {
                requestUri: "/notifications"
            },
            input: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    NotificationSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Type: {},
                                LensUpgradeSummary: {
                                    type: "structure",
                                    members: {
                                        WorkloadId: {},
                                        WorkloadName: {},
                                        LensAlias: {},
                                        CurrentLensVersion: {},
                                        LatestLensVersion: {}
                                    }
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListShareInvitations: {
            http: {
                method: "GET",
                requestUri: "/shareInvitations"
            },
            input: {
                type: "structure",
                members: {
                    WorkloadNamePrefix: {
                        location: "querystring",
                        locationName: "WorkloadNamePrefix"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "NextToken"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "MaxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    ShareInvitationSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                ShareInvitationId: {},
                                SharedBy: {},
                                SharedWith: {},
                                PermissionType: {},
                                WorkloadName: {},
                                WorkloadId: {}
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
                requestUri: "/tags/{WorkloadArn}"
            },
            input: {
                type: "structure",
                required: [ "WorkloadArn" ],
                members: {
                    WorkloadArn: {
                        location: "uri",
                        locationName: "WorkloadArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Tags: {
                        shape: "Ss"
                    }
                }
            }
        },
        ListWorkloadShares: {
            http: {
                method: "GET",
                requestUri: "/workloads/{WorkloadId}/shares"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    SharedWithPrefix: {
                        location: "querystring",
                        locationName: "SharedWithPrefix"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "NextToken"
                    },
                    MaxResults: {
                        location: "querystring",
                        locationName: "MaxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    WorkloadShareSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                ShareId: {},
                                SharedWith: {},
                                PermissionType: {},
                                Status: {}
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListWorkloads: {
            http: {
                requestUri: "/workloadsSummaries"
            },
            input: {
                type: "structure",
                members: {
                    WorkloadNamePrefix: {},
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadSummaries: {
                        type: "list",
                        member: {
                            shape: "S37"
                        }
                    },
                    NextToken: {}
                }
            }
        },
        TagResource: {
            http: {
                requestUri: "/tags/{WorkloadArn}"
            },
            input: {
                type: "structure",
                required: [ "WorkloadArn", "Tags" ],
                members: {
                    WorkloadArn: {
                        location: "uri",
                        locationName: "WorkloadArn"
                    },
                    Tags: {
                        shape: "Ss"
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
                requestUri: "/tags/{WorkloadArn}"
            },
            input: {
                type: "structure",
                required: [ "WorkloadArn", "TagKeys" ],
                members: {
                    WorkloadArn: {
                        location: "uri",
                        locationName: "WorkloadArn"
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
        UpdateAnswer: {
            http: {
                method: "PATCH",
                requestUri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "LensAlias", "QuestionId" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    LensAlias: {
                        location: "uri",
                        locationName: "LensAlias"
                    },
                    QuestionId: {
                        location: "uri",
                        locationName: "QuestionId"
                    },
                    SelectedChoices: {
                        shape: "S1i"
                    },
                    Notes: {},
                    IsApplicable: {
                        type: "boolean"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    LensAlias: {},
                    Answer: {
                        shape: "S18"
                    }
                }
            }
        },
        UpdateLensReview: {
            http: {
                method: "PATCH",
                requestUri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "LensAlias" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    LensAlias: {
                        location: "uri",
                        locationName: "LensAlias"
                    },
                    LensNotes: {},
                    PillarNotes: {
                        type: "map",
                        key: {},
                        value: {}
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    LensReview: {
                        shape: "S1n"
                    }
                }
            }
        },
        UpdateShareInvitation: {
            http: {
                method: "PATCH",
                requestUri: "/shareInvitations/{ShareInvitationId}"
            },
            input: {
                type: "structure",
                required: [ "ShareInvitationId", "ShareInvitationAction" ],
                members: {
                    ShareInvitationId: {
                        location: "uri",
                        locationName: "ShareInvitationId"
                    },
                    ShareInvitationAction: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    ShareInvitation: {
                        type: "structure",
                        members: {
                            ShareInvitationId: {},
                            WorkloadId: {}
                        }
                    }
                }
            }
        },
        UpdateWorkload: {
            http: {
                method: "PATCH",
                requestUri: "/workloads/{WorkloadId}"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    WorkloadName: {},
                    Description: {},
                    Environment: {},
                    AccountIds: {
                        shape: "Se"
                    },
                    AwsRegions: {
                        shape: "Sg"
                    },
                    NonAwsRegions: {
                        shape: "Si"
                    },
                    PillarPriorities: {
                        shape: "Sk"
                    },
                    ArchitecturalDesign: {},
                    ReviewOwner: {},
                    IsReviewOwnerUpdateAcknowledged: {
                        type: "boolean"
                    },
                    IndustryType: {},
                    Industry: {},
                    Notes: {},
                    ImprovementStatus: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    Workload: {
                        shape: "S2d"
                    }
                }
            }
        },
        UpdateWorkloadShare: {
            http: {
                method: "PATCH",
                requestUri: "/workloads/{WorkloadId}/shares/{ShareId}"
            },
            input: {
                type: "structure",
                required: [ "ShareId", "WorkloadId", "PermissionType" ],
                members: {
                    ShareId: {
                        location: "uri",
                        locationName: "ShareId"
                    },
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    PermissionType: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    WorkloadId: {},
                    WorkloadShare: {
                        type: "structure",
                        members: {
                            ShareId: {},
                            SharedBy: {},
                            SharedWith: {},
                            PermissionType: {},
                            Status: {},
                            WorkloadName: {},
                            WorkloadId: {}
                        }
                    }
                }
            }
        },
        UpgradeLensReview: {
            http: {
                method: "PUT",
                requestUri: "/workloads/{WorkloadId}/lensReviews/{LensAlias}/upgrade"
            },
            input: {
                type: "structure",
                required: [ "WorkloadId", "LensAlias", "MilestoneName" ],
                members: {
                    WorkloadId: {
                        location: "uri",
                        locationName: "WorkloadId"
                    },
                    LensAlias: {
                        location: "uri",
                        locationName: "LensAlias"
                    },
                    MilestoneName: {},
                    ClientRequestToken: {}
                }
            }
        }
    },
    shapes: {
        S3: {
            type: "list",
            member: {}
        },
        Se: {
            type: "list",
            member: {}
        },
        Sg: {
            type: "list",
            member: {}
        },
        Si: {
            type: "list",
            member: {}
        },
        Sk: {
            type: "list",
            member: {}
        },
        Sq: {
            type: "list",
            member: {}
        },
        Ss: {
            type: "map",
            key: {},
            value: {}
        },
        S18: {
            type: "structure",
            members: {
                QuestionId: {},
                PillarId: {},
                QuestionTitle: {},
                QuestionDescription: {},
                ImprovementPlanUrl: {},
                HelpfulResourceUrl: {},
                Choices: {
                    shape: "S1d"
                },
                SelectedChoices: {
                    shape: "S1i"
                },
                IsApplicable: {
                    type: "boolean"
                },
                Risk: {},
                Notes: {}
            }
        },
        S1d: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    ChoiceId: {},
                    Title: {},
                    Description: {}
                }
            }
        },
        S1i: {
            type: "list",
            member: {}
        },
        S1n: {
            type: "structure",
            members: {
                LensAlias: {},
                LensVersion: {},
                LensName: {},
                LensStatus: {},
                PillarReviewSummaries: {
                    type: "list",
                    member: {
                        type: "structure",
                        members: {
                            PillarId: {},
                            PillarName: {},
                            Notes: {},
                            RiskCounts: {
                                shape: "S1u"
                            }
                        }
                    }
                },
                UpdatedAt: {
                    type: "timestamp"
                },
                Notes: {},
                RiskCounts: {
                    shape: "S1u"
                },
                NextToken: {}
            }
        },
        S1u: {
            type: "map",
            key: {},
            value: {
                type: "integer"
            }
        },
        S2d: {
            type: "structure",
            members: {
                WorkloadId: {},
                WorkloadArn: {},
                WorkloadName: {},
                Description: {},
                Environment: {},
                UpdatedAt: {
                    type: "timestamp"
                },
                AccountIds: {
                    shape: "Se"
                },
                AwsRegions: {
                    shape: "Sg"
                },
                NonAwsRegions: {
                    shape: "Si"
                },
                ArchitecturalDesign: {},
                ReviewOwner: {},
                ReviewRestrictionDate: {
                    type: "timestamp"
                },
                IsReviewOwnerUpdateAcknowledged: {
                    type: "boolean"
                },
                IndustryType: {},
                Industry: {},
                Notes: {},
                ImprovementStatus: {},
                RiskCounts: {
                    shape: "S1u"
                },
                PillarPriorities: {
                    shape: "Sk"
                },
                Lenses: {
                    shape: "Sq"
                },
                Owner: {},
                ShareInvitationId: {},
                Tags: {
                    shape: "Ss"
                }
            }
        },
        S37: {
            type: "structure",
            members: {
                WorkloadId: {},
                WorkloadArn: {},
                WorkloadName: {},
                Owner: {},
                UpdatedAt: {
                    type: "timestamp"
                },
                Lenses: {
                    shape: "Sq"
                },
                RiskCounts: {
                    shape: "S1u"
                },
                ImprovementStatus: {}
            }
        }
    },
    paginators: {
        ListAnswers: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListLensReviewImprovements: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListLensReviews: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListLenses: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListMilestones: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListNotifications: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListShareInvitations: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListWorkloadShares: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListWorkloads: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        }
    }
};

AWS.apiLoader.services["lexmodelsv2"] = {};

AWS.LexModelsV2 = AWS.Service.defineService("lexmodelsv2", [ "2020-08-07" ]);

_xamzrequire = function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof _xamzrequire == "function" && _xamzrequire;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f;
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }
        return n[o].exports;
    }
    var i = typeof _xamzrequire == "function" && _xamzrequire;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s;
}({
    101: [ function(require, module, exports) {
        var AWS = require("../core");
        AWS.util.update(AWS.LexModelsV2.prototype, {
            setupRequestListeners: function setupRequestListeners(request) {
                request.addListener("build", this.modifyContentType);
            },
            modifyContentType: function modifyContentType(request) {
                if (request.httpRequest.headers["Content-Type"] === "application/json") {
                    request.httpRequest.headers["Content-Type"] = "application/x-amz-json-1.1";
                }
            }
        });
    }, {
        "../core": 39
    } ]
}, {}, [ 101 ]);

AWS.apiLoader.services["lexmodelsv2"]["2020-08-07"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-08-07",
        endpointPrefix: "models-v2-lex",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceAbbreviation: "Lex Models V2",
        serviceFullName: "Amazon Lex Model Building V2",
        serviceId: "Lex Models V2",
        signatureVersion: "v4",
        signingName: "lex",
        uid: "models.lex.v2-2020-08-07"
    },
    operations: {
        BuildBotLocale: {
            http: {
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "botId", "botVersion", "localeId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    botLocaleStatus: {},
                    lastBuildSubmittedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        CreateBot: {
            http: {
                method: "PUT",
                requestUri: "/bots/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "botName", "roleArn", "dataPrivacy", "idleSessionTTLInSeconds" ],
                members: {
                    botName: {},
                    description: {},
                    roleArn: {},
                    dataPrivacy: {
                        shape: "Sc"
                    },
                    idleSessionTTLInSeconds: {
                        type: "integer"
                    },
                    botTags: {
                        shape: "Sf"
                    },
                    testBotAliasTags: {
                        shape: "Sf"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botName: {},
                    description: {},
                    roleArn: {},
                    dataPrivacy: {
                        shape: "Sc"
                    },
                    idleSessionTTLInSeconds: {
                        type: "integer"
                    },
                    botStatus: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    botTags: {
                        shape: "Sf"
                    },
                    testBotAliasTags: {
                        shape: "Sf"
                    }
                }
            }
        },
        CreateBotAlias: {
            http: {
                method: "PUT",
                requestUri: "/bots/{botId}/botaliases/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "botAliasName", "botId" ],
                members: {
                    botAliasName: {},
                    description: {},
                    botVersion: {},
                    botAliasLocaleSettings: {
                        shape: "Sm"
                    },
                    conversationLogSettings: {
                        shape: "St"
                    },
                    sentimentAnalysisSettings: {
                        shape: "S16"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    tags: {
                        shape: "Sf"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botAliasId: {},
                    botAliasName: {},
                    description: {},
                    botVersion: {},
                    botAliasLocaleSettings: {
                        shape: "Sm"
                    },
                    conversationLogSettings: {
                        shape: "St"
                    },
                    sentimentAnalysisSettings: {
                        shape: "S16"
                    },
                    botAliasStatus: {},
                    botId: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    tags: {
                        shape: "Sf"
                    }
                }
            }
        },
        CreateBotLocale: {
            http: {
                method: "PUT",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "botId", "botVersion", "localeId", "nluIntentConfidenceThreshold" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {},
                    description: {},
                    nluIntentConfidenceThreshold: {
                        type: "double"
                    },
                    voiceSettings: {
                        shape: "S1c"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botVersion: {},
                    localeName: {},
                    localeId: {},
                    description: {},
                    nluIntentConfidenceThreshold: {
                        type: "double"
                    },
                    voiceSettings: {
                        shape: "S1c"
                    },
                    botLocaleStatus: {},
                    creationDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        CreateBotVersion: {
            http: {
                method: "PUT",
                requestUri: "/bots/{botId}/botversions/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "botId", "botVersionLocaleSpecification" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    description: {},
                    botVersionLocaleSpecification: {
                        shape: "S1h"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    description: {},
                    botVersion: {},
                    botVersionLocaleSpecification: {
                        shape: "S1h"
                    },
                    botStatus: {},
                    creationDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        CreateExport: {
            http: {
                method: "PUT",
                requestUri: "/exports/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "resourceSpecification", "fileFormat" ],
                members: {
                    resourceSpecification: {
                        shape: "S1m"
                    },
                    fileFormat: {},
                    filePassword: {
                        shape: "S1q"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    exportId: {},
                    resourceSpecification: {
                        shape: "S1m"
                    },
                    fileFormat: {},
                    exportStatus: {},
                    creationDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        CreateIntent: {
            http: {
                method: "PUT",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "intentName", "botId", "botVersion", "localeId" ],
                members: {
                    intentName: {},
                    description: {},
                    parentIntentSignature: {},
                    sampleUtterances: {
                        shape: "S1v"
                    },
                    dialogCodeHook: {
                        shape: "S1y"
                    },
                    fulfillmentCodeHook: {
                        shape: "S1z"
                    },
                    intentConfirmationSetting: {
                        shape: "S20"
                    },
                    intentClosingSetting: {
                        shape: "S2m"
                    },
                    inputContexts: {
                        shape: "S2n"
                    },
                    outputContexts: {
                        shape: "S2p"
                    },
                    kendraConfiguration: {
                        shape: "S2t"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    intentId: {},
                    intentName: {},
                    description: {},
                    parentIntentSignature: {},
                    sampleUtterances: {
                        shape: "S1v"
                    },
                    dialogCodeHook: {
                        shape: "S1y"
                    },
                    fulfillmentCodeHook: {
                        shape: "S1z"
                    },
                    intentConfirmationSetting: {
                        shape: "S20"
                    },
                    intentClosingSetting: {
                        shape: "S2m"
                    },
                    inputContexts: {
                        shape: "S2n"
                    },
                    outputContexts: {
                        shape: "S2p"
                    },
                    kendraConfiguration: {
                        shape: "S2t"
                    },
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    creationDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        CreateResourcePolicy: {
            http: {
                requestUri: "/policy/{resourceArn}/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "resourceArn", "policy" ],
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    policy: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    resourceArn: {},
                    revisionId: {}
                }
            }
        },
        CreateResourcePolicyStatement: {
            http: {
                requestUri: "/policy/{resourceArn}/statements/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "resourceArn", "statementId", "effect", "principal", "action" ],
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    statementId: {},
                    effect: {},
                    principal: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                service: {},
                                arn: {}
                            }
                        }
                    },
                    action: {
                        type: "list",
                        member: {}
                    },
                    condition: {
                        type: "map",
                        key: {},
                        value: {
                            type: "map",
                            key: {},
                            value: {}
                        }
                    },
                    expectedRevisionId: {
                        location: "querystring",
                        locationName: "expectedRevisionId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    resourceArn: {},
                    revisionId: {}
                }
            }
        },
        CreateSlot: {
            http: {
                method: "PUT",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "slotName", "slotTypeId", "valueElicitationSetting", "botId", "botVersion", "localeId", "intentId" ],
                members: {
                    slotName: {},
                    description: {},
                    slotTypeId: {},
                    valueElicitationSetting: {
                        shape: "S3i"
                    },
                    obfuscationSetting: {
                        shape: "S3s"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    intentId: {
                        location: "uri",
                        locationName: "intentId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    slotId: {},
                    slotName: {},
                    description: {},
                    slotTypeId: {},
                    valueElicitationSetting: {
                        shape: "S3i"
                    },
                    obfuscationSetting: {
                        shape: "S3s"
                    },
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    intentId: {},
                    creationDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        CreateSlotType: {
            http: {
                method: "PUT",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "slotTypeName", "valueSelectionSetting", "botId", "botVersion", "localeId" ],
                members: {
                    slotTypeName: {},
                    description: {},
                    slotTypeValues: {
                        shape: "S3w"
                    },
                    valueSelectionSetting: {
                        shape: "S41"
                    },
                    parentSlotTypeSignature: {},
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    slotTypeId: {},
                    slotTypeName: {},
                    description: {},
                    slotTypeValues: {
                        shape: "S3w"
                    },
                    valueSelectionSetting: {
                        shape: "S41"
                    },
                    parentSlotTypeSignature: {},
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    creationDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        CreateUploadUrl: {
            http: {
                requestUri: "/createuploadurl/",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {}
            },
            output: {
                type: "structure",
                members: {
                    importId: {},
                    uploadUrl: {}
                }
            }
        },
        DeleteBot: {
            http: {
                method: "DELETE",
                requestUri: "/bots/{botId}/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "botId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    skipResourceInUseCheck: {
                        location: "querystring",
                        locationName: "skipResourceInUseCheck",
                        type: "boolean"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botStatus: {}
                }
            }
        },
        DeleteBotAlias: {
            http: {
                method: "DELETE",
                requestUri: "/bots/{botId}/botaliases/{botAliasId}/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "botAliasId", "botId" ],
                members: {
                    botAliasId: {
                        location: "uri",
                        locationName: "botAliasId"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    skipResourceInUseCheck: {
                        location: "querystring",
                        locationName: "skipResourceInUseCheck",
                        type: "boolean"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botAliasId: {},
                    botId: {},
                    botAliasStatus: {}
                }
            }
        },
        DeleteBotLocale: {
            http: {
                method: "DELETE",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "botId", "botVersion", "localeId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    botLocaleStatus: {}
                }
            }
        },
        DeleteBotVersion: {
            http: {
                method: "DELETE",
                requestUri: "/bots/{botId}/botversions/{botVersion}/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "botId", "botVersion" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    skipResourceInUseCheck: {
                        location: "querystring",
                        locationName: "skipResourceInUseCheck",
                        type: "boolean"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botVersion: {},
                    botStatus: {}
                }
            }
        },
        DeleteExport: {
            http: {
                method: "DELETE",
                requestUri: "/exports/{exportId}/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "exportId" ],
                members: {
                    exportId: {
                        location: "uri",
                        locationName: "exportId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    exportId: {},
                    exportStatus: {}
                }
            }
        },
        DeleteImport: {
            http: {
                method: "DELETE",
                requestUri: "/imports/{importId}/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "importId" ],
                members: {
                    importId: {
                        location: "uri",
                        locationName: "importId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    importId: {},
                    importStatus: {}
                }
            }
        },
        DeleteIntent: {
            http: {
                method: "DELETE",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "intentId", "botId", "botVersion", "localeId" ],
                members: {
                    intentId: {
                        location: "uri",
                        locationName: "intentId"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    }
                }
            }
        },
        DeleteResourcePolicy: {
            http: {
                method: "DELETE",
                requestUri: "/policy/{resourceArn}/",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "resourceArn" ],
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    expectedRevisionId: {
                        location: "querystring",
                        locationName: "expectedRevisionId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    resourceArn: {},
                    revisionId: {}
                }
            }
        },
        DeleteResourcePolicyStatement: {
            http: {
                method: "DELETE",
                requestUri: "/policy/{resourceArn}/statements/{statementId}/",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "resourceArn", "statementId" ],
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    statementId: {
                        location: "uri",
                        locationName: "statementId"
                    },
                    expectedRevisionId: {
                        location: "querystring",
                        locationName: "expectedRevisionId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    resourceArn: {},
                    revisionId: {}
                }
            }
        },
        DeleteSlot: {
            http: {
                method: "DELETE",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}/",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "slotId", "botId", "botVersion", "localeId", "intentId" ],
                members: {
                    slotId: {
                        location: "uri",
                        locationName: "slotId"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    intentId: {
                        location: "uri",
                        locationName: "intentId"
                    }
                }
            }
        },
        DeleteSlotType: {
            http: {
                method: "DELETE",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}/",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "slotTypeId", "botId", "botVersion", "localeId" ],
                members: {
                    slotTypeId: {
                        location: "uri",
                        locationName: "slotTypeId"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    skipResourceInUseCheck: {
                        location: "querystring",
                        locationName: "skipResourceInUseCheck",
                        type: "boolean"
                    }
                }
            }
        },
        DescribeBot: {
            http: {
                method: "GET",
                requestUri: "/bots/{botId}/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "botId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botName: {},
                    description: {},
                    roleArn: {},
                    dataPrivacy: {
                        shape: "Sc"
                    },
                    idleSessionTTLInSeconds: {
                        type: "integer"
                    },
                    botStatus: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        DescribeBotAlias: {
            http: {
                method: "GET",
                requestUri: "/bots/{botId}/botaliases/{botAliasId}/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "botAliasId", "botId" ],
                members: {
                    botAliasId: {
                        location: "uri",
                        locationName: "botAliasId"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botAliasId: {},
                    botAliasName: {},
                    description: {},
                    botVersion: {},
                    botAliasLocaleSettings: {
                        shape: "Sm"
                    },
                    conversationLogSettings: {
                        shape: "St"
                    },
                    sentimentAnalysisSettings: {
                        shape: "S16"
                    },
                    botAliasHistoryEvents: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                botVersion: {},
                                startDate: {
                                    type: "timestamp"
                                },
                                endDate: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    botAliasStatus: {},
                    botId: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        DescribeBotLocale: {
            http: {
                method: "GET",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "botId", "botVersion", "localeId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    localeName: {},
                    description: {},
                    nluIntentConfidenceThreshold: {
                        type: "double"
                    },
                    voiceSettings: {
                        shape: "S1c"
                    },
                    intentsCount: {
                        type: "integer"
                    },
                    slotTypesCount: {
                        type: "integer"
                    },
                    botLocaleStatus: {},
                    failureReasons: {
                        shape: "S54"
                    },
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    },
                    lastBuildSubmittedDateTime: {
                        type: "timestamp"
                    },
                    botLocaleHistoryEvents: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "event", "eventDate" ],
                            members: {
                                event: {},
                                eventDate: {
                                    type: "timestamp"
                                }
                            }
                        }
                    }
                }
            }
        },
        DescribeBotVersion: {
            http: {
                method: "GET",
                requestUri: "/bots/{botId}/botversions/{botVersion}/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "botId", "botVersion" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botName: {},
                    botVersion: {},
                    description: {},
                    roleArn: {},
                    dataPrivacy: {
                        shape: "Sc"
                    },
                    idleSessionTTLInSeconds: {
                        type: "integer"
                    },
                    botStatus: {},
                    failureReasons: {
                        shape: "S54"
                    },
                    creationDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        DescribeExport: {
            http: {
                method: "GET",
                requestUri: "/exports/{exportId}/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "exportId" ],
                members: {
                    exportId: {
                        location: "uri",
                        locationName: "exportId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    exportId: {},
                    resourceSpecification: {
                        shape: "S1m"
                    },
                    fileFormat: {},
                    exportStatus: {},
                    failureReasons: {
                        shape: "S54"
                    },
                    downloadUrl: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        DescribeImport: {
            http: {
                method: "GET",
                requestUri: "/imports/{importId}/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "importId" ],
                members: {
                    importId: {
                        location: "uri",
                        locationName: "importId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    importId: {},
                    resourceSpecification: {
                        shape: "S5f"
                    },
                    importedResourceId: {},
                    importedResourceName: {},
                    mergeStrategy: {},
                    importStatus: {},
                    failureReasons: {
                        shape: "S54"
                    },
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        DescribeIntent: {
            http: {
                method: "GET",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "intentId", "botId", "botVersion", "localeId" ],
                members: {
                    intentId: {
                        location: "uri",
                        locationName: "intentId"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    intentId: {},
                    intentName: {},
                    description: {},
                    parentIntentSignature: {},
                    sampleUtterances: {
                        shape: "S1v"
                    },
                    dialogCodeHook: {
                        shape: "S1y"
                    },
                    fulfillmentCodeHook: {
                        shape: "S1z"
                    },
                    slotPriorities: {
                        shape: "S5m"
                    },
                    intentConfirmationSetting: {
                        shape: "S20"
                    },
                    intentClosingSetting: {
                        shape: "S2m"
                    },
                    inputContexts: {
                        shape: "S2n"
                    },
                    outputContexts: {
                        shape: "S2p"
                    },
                    kendraConfiguration: {
                        shape: "S2t"
                    },
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        DescribeResourcePolicy: {
            http: {
                method: "GET",
                requestUri: "/policy/{resourceArn}/",
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
                    resourceArn: {},
                    policy: {},
                    revisionId: {}
                }
            }
        },
        DescribeSlot: {
            http: {
                method: "GET",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "slotId", "botId", "botVersion", "localeId", "intentId" ],
                members: {
                    slotId: {
                        location: "uri",
                        locationName: "slotId"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    intentId: {
                        location: "uri",
                        locationName: "intentId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    slotId: {},
                    slotName: {},
                    description: {},
                    slotTypeId: {},
                    valueElicitationSetting: {
                        shape: "S3i"
                    },
                    obfuscationSetting: {
                        shape: "S3s"
                    },
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    intentId: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        DescribeSlotType: {
            http: {
                method: "GET",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "slotTypeId", "botId", "botVersion", "localeId" ],
                members: {
                    slotTypeId: {
                        location: "uri",
                        locationName: "slotTypeId"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    slotTypeId: {},
                    slotTypeName: {},
                    description: {},
                    slotTypeValues: {
                        shape: "S3w"
                    },
                    valueSelectionSetting: {
                        shape: "S41"
                    },
                    parentSlotTypeSignature: {},
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        ListBotAliases: {
            http: {
                requestUri: "/bots/{botId}/botaliases/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "botId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    botAliasSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                botAliasId: {},
                                botAliasName: {},
                                description: {},
                                botVersion: {},
                                botAliasStatus: {},
                                creationDateTime: {
                                    type: "timestamp"
                                },
                                lastUpdatedDateTime: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    nextToken: {},
                    botId: {}
                }
            }
        },
        ListBotLocales: {
            http: {
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "botId", "botVersion" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    sortBy: {
                        type: "structure",
                        required: [ "attribute", "order" ],
                        members: {
                            attribute: {},
                            order: {}
                        }
                    },
                    filters: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "name", "values", "operator" ],
                            members: {
                                name: {},
                                values: {
                                    shape: "S68"
                                },
                                operator: {}
                            }
                        }
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botVersion: {},
                    nextToken: {},
                    botLocaleSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                localeId: {},
                                localeName: {},
                                description: {},
                                botLocaleStatus: {},
                                lastUpdatedDateTime: {
                                    type: "timestamp"
                                },
                                lastBuildSubmittedDateTime: {
                                    type: "timestamp"
                                }
                            }
                        }
                    }
                }
            }
        },
        ListBotVersions: {
            http: {
                requestUri: "/bots/{botId}/botversions/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "botId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    sortBy: {
                        type: "structure",
                        required: [ "attribute", "order" ],
                        members: {
                            attribute: {},
                            order: {}
                        }
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botVersionSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                botName: {},
                                botVersion: {},
                                description: {},
                                botStatus: {},
                                creationDateTime: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListBots: {
            http: {
                requestUri: "/bots/",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    sortBy: {
                        type: "structure",
                        required: [ "attribute", "order" ],
                        members: {
                            attribute: {},
                            order: {}
                        }
                    },
                    filters: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "name", "values", "operator" ],
                            members: {
                                name: {},
                                values: {
                                    shape: "S68"
                                },
                                operator: {}
                            }
                        }
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    botSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                botId: {},
                                botName: {},
                                description: {},
                                botStatus: {},
                                latestBotVersion: {},
                                lastUpdatedDateTime: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListBuiltInIntents: {
            http: {
                requestUri: "/builtins/locales/{localeId}/intents/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "localeId" ],
                members: {
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    sortBy: {
                        type: "structure",
                        required: [ "attribute", "order" ],
                        members: {
                            attribute: {},
                            order: {}
                        }
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    builtInIntentSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                intentSignature: {},
                                description: {}
                            }
                        }
                    },
                    nextToken: {},
                    localeId: {}
                }
            }
        },
        ListBuiltInSlotTypes: {
            http: {
                requestUri: "/builtins/locales/{localeId}/slottypes/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "localeId" ],
                members: {
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    sortBy: {
                        type: "structure",
                        required: [ "attribute", "order" ],
                        members: {
                            attribute: {},
                            order: {}
                        }
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    builtInSlotTypeSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                slotTypeSignature: {},
                                description: {}
                            }
                        }
                    },
                    nextToken: {},
                    localeId: {}
                }
            }
        },
        ListExports: {
            http: {
                requestUri: "/exports/",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    botId: {},
                    botVersion: {},
                    sortBy: {
                        type: "structure",
                        required: [ "attribute", "order" ],
                        members: {
                            attribute: {},
                            order: {}
                        }
                    },
                    filters: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "name", "values", "operator" ],
                            members: {
                                name: {},
                                values: {
                                    shape: "S68"
                                },
                                operator: {}
                            }
                        }
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botVersion: {},
                    exportSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                exportId: {},
                                resourceSpecification: {
                                    shape: "S1m"
                                },
                                fileFormat: {},
                                exportStatus: {},
                                creationDateTime: {
                                    type: "timestamp"
                                },
                                lastUpdatedDateTime: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListImports: {
            http: {
                requestUri: "/imports/",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    botId: {},
                    botVersion: {},
                    sortBy: {
                        type: "structure",
                        required: [ "attribute", "order" ],
                        members: {
                            attribute: {},
                            order: {}
                        }
                    },
                    filters: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "name", "values", "operator" ],
                            members: {
                                name: {},
                                values: {
                                    shape: "S68"
                                },
                                operator: {}
                            }
                        }
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botVersion: {},
                    importSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                importId: {},
                                importedResourceId: {},
                                importedResourceName: {},
                                importStatus: {},
                                mergeStrategy: {},
                                creationDateTime: {
                                    type: "timestamp"
                                },
                                lastUpdatedDateTime: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListIntents: {
            http: {
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "botId", "botVersion", "localeId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    sortBy: {
                        type: "structure",
                        required: [ "attribute", "order" ],
                        members: {
                            attribute: {},
                            order: {}
                        }
                    },
                    filters: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "name", "values", "operator" ],
                            members: {
                                name: {},
                                values: {
                                    shape: "S68"
                                },
                                operator: {}
                            }
                        }
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    intentSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                intentId: {},
                                intentName: {},
                                description: {},
                                parentIntentSignature: {},
                                inputContexts: {
                                    shape: "S2n"
                                },
                                outputContexts: {
                                    shape: "S2p"
                                },
                                lastUpdatedDateTime: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListSlotTypes: {
            http: {
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "botId", "botVersion", "localeId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    sortBy: {
                        type: "structure",
                        required: [ "attribute", "order" ],
                        members: {
                            attribute: {},
                            order: {}
                        }
                    },
                    filters: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "name", "values", "operator" ],
                            members: {
                                name: {},
                                values: {
                                    shape: "S68"
                                },
                                operator: {}
                            }
                        }
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    slotTypeSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                slotTypeId: {},
                                slotTypeName: {},
                                description: {},
                                parentSlotTypeSignature: {},
                                lastUpdatedDateTime: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListSlots: {
            http: {
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "botId", "botVersion", "localeId", "intentId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    intentId: {
                        location: "uri",
                        locationName: "intentId"
                    },
                    sortBy: {
                        type: "structure",
                        required: [ "attribute", "order" ],
                        members: {
                            attribute: {},
                            order: {}
                        }
                    },
                    filters: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "name", "values", "operator" ],
                            members: {
                                name: {},
                                values: {
                                    shape: "S68"
                                },
                                operator: {}
                            }
                        }
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    intentId: {},
                    slotSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                slotId: {},
                                slotName: {},
                                description: {},
                                slotConstraint: {},
                                slotTypeId: {},
                                valueElicitationPromptSpecification: {
                                    shape: "S21"
                                },
                                lastUpdatedDateTime: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListTagsForResource: {
            http: {
                method: "GET",
                requestUri: "/tags/{resourceARN}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "resourceARN" ],
                members: {
                    resourceARN: {
                        location: "uri",
                        locationName: "resourceARN"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    tags: {
                        shape: "Sf"
                    }
                }
            }
        },
        StartImport: {
            http: {
                method: "PUT",
                requestUri: "/imports/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "importId", "resourceSpecification", "mergeStrategy" ],
                members: {
                    importId: {},
                    resourceSpecification: {
                        shape: "S5f"
                    },
                    mergeStrategy: {},
                    filePassword: {
                        shape: "S1q"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    importId: {},
                    resourceSpecification: {
                        shape: "S5f"
                    },
                    mergeStrategy: {},
                    importStatus: {},
                    creationDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        TagResource: {
            http: {
                requestUri: "/tags/{resourceARN}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "resourceARN", "tags" ],
                members: {
                    resourceARN: {
                        location: "uri",
                        locationName: "resourceARN"
                    },
                    tags: {
                        shape: "Sf"
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
                requestUri: "/tags/{resourceARN}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "resourceARN", "tagKeys" ],
                members: {
                    resourceARN: {
                        location: "uri",
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
            }
        },
        UpdateBot: {
            http: {
                method: "PUT",
                requestUri: "/bots/{botId}/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "botId", "botName", "roleArn", "dataPrivacy", "idleSessionTTLInSeconds" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botName: {},
                    description: {},
                    roleArn: {},
                    dataPrivacy: {
                        shape: "Sc"
                    },
                    idleSessionTTLInSeconds: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botName: {},
                    description: {},
                    roleArn: {},
                    dataPrivacy: {
                        shape: "Sc"
                    },
                    idleSessionTTLInSeconds: {
                        type: "integer"
                    },
                    botStatus: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        UpdateBotAlias: {
            http: {
                method: "PUT",
                requestUri: "/bots/{botId}/botaliases/{botAliasId}/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "botAliasId", "botAliasName", "botId" ],
                members: {
                    botAliasId: {
                        location: "uri",
                        locationName: "botAliasId"
                    },
                    botAliasName: {},
                    description: {},
                    botVersion: {},
                    botAliasLocaleSettings: {
                        shape: "Sm"
                    },
                    conversationLogSettings: {
                        shape: "St"
                    },
                    sentimentAnalysisSettings: {
                        shape: "S16"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botAliasId: {},
                    botAliasName: {},
                    description: {},
                    botVersion: {},
                    botAliasLocaleSettings: {
                        shape: "Sm"
                    },
                    conversationLogSettings: {
                        shape: "St"
                    },
                    sentimentAnalysisSettings: {
                        shape: "S16"
                    },
                    botAliasStatus: {},
                    botId: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        UpdateBotLocale: {
            http: {
                method: "PUT",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "botId", "botVersion", "localeId", "nluIntentConfidenceThreshold" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    description: {},
                    nluIntentConfidenceThreshold: {
                        type: "double"
                    },
                    voiceSettings: {
                        shape: "S1c"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    localeName: {},
                    description: {},
                    nluIntentConfidenceThreshold: {
                        type: "double"
                    },
                    voiceSettings: {
                        shape: "S1c"
                    },
                    botLocaleStatus: {},
                    failureReasons: {
                        shape: "S54"
                    },
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        UpdateExport: {
            http: {
                method: "PUT",
                requestUri: "/exports/{exportId}/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "exportId" ],
                members: {
                    exportId: {
                        location: "uri",
                        locationName: "exportId"
                    },
                    filePassword: {
                        shape: "S1q"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    exportId: {},
                    resourceSpecification: {
                        shape: "S1m"
                    },
                    fileFormat: {},
                    exportStatus: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        UpdateIntent: {
            http: {
                method: "PUT",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "intentId", "intentName", "botId", "botVersion", "localeId" ],
                members: {
                    intentId: {
                        location: "uri",
                        locationName: "intentId"
                    },
                    intentName: {},
                    description: {},
                    parentIntentSignature: {},
                    sampleUtterances: {
                        shape: "S1v"
                    },
                    dialogCodeHook: {
                        shape: "S1y"
                    },
                    fulfillmentCodeHook: {
                        shape: "S1z"
                    },
                    slotPriorities: {
                        shape: "S5m"
                    },
                    intentConfirmationSetting: {
                        shape: "S20"
                    },
                    intentClosingSetting: {
                        shape: "S2m"
                    },
                    inputContexts: {
                        shape: "S2n"
                    },
                    outputContexts: {
                        shape: "S2p"
                    },
                    kendraConfiguration: {
                        shape: "S2t"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    intentId: {},
                    intentName: {},
                    description: {},
                    parentIntentSignature: {},
                    sampleUtterances: {
                        shape: "S1v"
                    },
                    dialogCodeHook: {
                        shape: "S1y"
                    },
                    fulfillmentCodeHook: {
                        shape: "S1z"
                    },
                    slotPriorities: {
                        shape: "S5m"
                    },
                    intentConfirmationSetting: {
                        shape: "S20"
                    },
                    intentClosingSetting: {
                        shape: "S2m"
                    },
                    inputContexts: {
                        shape: "S2n"
                    },
                    outputContexts: {
                        shape: "S2p"
                    },
                    kendraConfiguration: {
                        shape: "S2t"
                    },
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        UpdateResourcePolicy: {
            http: {
                method: "PUT",
                requestUri: "/policy/{resourceArn}/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "resourceArn", "policy" ],
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    policy: {},
                    expectedRevisionId: {
                        location: "querystring",
                        locationName: "expectedRevisionId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    resourceArn: {},
                    revisionId: {}
                }
            }
        },
        UpdateSlot: {
            http: {
                method: "PUT",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}/",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "slotId", "slotName", "slotTypeId", "valueElicitationSetting", "botId", "botVersion", "localeId", "intentId" ],
                members: {
                    slotId: {
                        location: "uri",
                        locationName: "slotId"
                    },
                    slotName: {},
                    description: {},
                    slotTypeId: {},
                    valueElicitationSetting: {
                        shape: "S3i"
                    },
                    obfuscationSetting: {
                        shape: "S3s"
                    },
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    intentId: {
                        location: "uri",
                        locationName: "intentId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    slotId: {},
                    slotName: {},
                    description: {},
                    slotTypeId: {},
                    valueElicitationSetting: {
                        shape: "S3i"
                    },
                    obfuscationSetting: {
                        shape: "S3s"
                    },
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    intentId: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        UpdateSlotType: {
            http: {
                method: "PUT",
                requestUri: "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}/",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "slotTypeId", "slotTypeName", "valueSelectionSetting", "botId", "botVersion", "localeId" ],
                members: {
                    slotTypeId: {
                        location: "uri",
                        locationName: "slotTypeId"
                    },
                    slotTypeName: {},
                    description: {},
                    slotTypeValues: {
                        shape: "S3w"
                    },
                    valueSelectionSetting: {
                        shape: "S41"
                    },
                    parentSlotTypeSignature: {},
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botVersion: {
                        location: "uri",
                        locationName: "botVersion"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    slotTypeId: {},
                    slotTypeName: {},
                    description: {},
                    slotTypeValues: {
                        shape: "S3w"
                    },
                    valueSelectionSetting: {
                        shape: "S41"
                    },
                    parentSlotTypeSignature: {},
                    botId: {},
                    botVersion: {},
                    localeId: {},
                    creationDateTime: {
                        type: "timestamp"
                    },
                    lastUpdatedDateTime: {
                        type: "timestamp"
                    }
                }
            }
        }
    },
    shapes: {
        Sc: {
            type: "structure",
            required: [ "childDirected" ],
            members: {
                childDirected: {
                    type: "boolean"
                }
            }
        },
        Sf: {
            type: "map",
            key: {},
            value: {}
        },
        Sm: {
            type: "map",
            key: {},
            value: {
                type: "structure",
                required: [ "enabled" ],
                members: {
                    enabled: {
                        type: "boolean"
                    },
                    codeHookSpecification: {
                        type: "structure",
                        required: [ "lambdaCodeHook" ],
                        members: {
                            lambdaCodeHook: {
                                type: "structure",
                                required: [ "lambdaARN", "codeHookInterfaceVersion" ],
                                members: {
                                    lambdaARN: {},
                                    codeHookInterfaceVersion: {}
                                }
                            }
                        }
                    }
                }
            }
        },
        St: {
            type: "structure",
            members: {
                textLogSettings: {
                    type: "list",
                    member: {
                        type: "structure",
                        required: [ "enabled", "destination" ],
                        members: {
                            enabled: {
                                type: "boolean"
                            },
                            destination: {
                                type: "structure",
                                required: [ "cloudWatch" ],
                                members: {
                                    cloudWatch: {
                                        type: "structure",
                                        required: [ "cloudWatchLogGroupArn", "logPrefix" ],
                                        members: {
                                            cloudWatchLogGroupArn: {},
                                            logPrefix: {}
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                audioLogSettings: {
                    type: "list",
                    member: {
                        type: "structure",
                        required: [ "enabled", "destination" ],
                        members: {
                            enabled: {
                                type: "boolean"
                            },
                            destination: {
                                type: "structure",
                                required: [ "s3Bucket" ],
                                members: {
                                    s3Bucket: {
                                        type: "structure",
                                        required: [ "s3BucketArn", "logPrefix" ],
                                        members: {
                                            kmsKeyArn: {},
                                            s3BucketArn: {},
                                            logPrefix: {}
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        S16: {
            type: "structure",
            required: [ "detectSentiment" ],
            members: {
                detectSentiment: {
                    type: "boolean"
                }
            }
        },
        S1c: {
            type: "structure",
            required: [ "voiceId" ],
            members: {
                voiceId: {}
            }
        },
        S1h: {
            type: "map",
            key: {},
            value: {
                type: "structure",
                required: [ "sourceBotVersion" ],
                members: {
                    sourceBotVersion: {}
                }
            }
        },
        S1m: {
            type: "structure",
            members: {
                botExportSpecification: {
                    type: "structure",
                    required: [ "botId", "botVersion" ],
                    members: {
                        botId: {},
                        botVersion: {}
                    }
                },
                botLocaleExportSpecification: {
                    type: "structure",
                    required: [ "botId", "botVersion", "localeId" ],
                    members: {
                        botId: {},
                        botVersion: {},
                        localeId: {}
                    }
                }
            }
        },
        S1q: {
            type: "string",
            sensitive: true
        },
        S1v: {
            type: "list",
            member: {
                type: "structure",
                required: [ "utterance" ],
                members: {
                    utterance: {}
                }
            }
        },
        S1y: {
            type: "structure",
            required: [ "enabled" ],
            members: {
                enabled: {
                    type: "boolean"
                }
            }
        },
        S1z: {
            type: "structure",
            required: [ "enabled" ],
            members: {
                enabled: {
                    type: "boolean"
                }
            }
        },
        S20: {
            type: "structure",
            required: [ "promptSpecification", "declinationResponse" ],
            members: {
                promptSpecification: {
                    shape: "S21"
                },
                declinationResponse: {
                    shape: "S2l"
                }
            }
        },
        S21: {
            type: "structure",
            required: [ "messageGroups", "maxRetries" ],
            members: {
                messageGroups: {
                    shape: "S22"
                },
                maxRetries: {
                    type: "integer"
                },
                allowInterrupt: {
                    type: "boolean"
                }
            }
        },
        S22: {
            type: "list",
            member: {
                type: "structure",
                required: [ "message" ],
                members: {
                    message: {
                        shape: "S24"
                    },
                    variations: {
                        type: "list",
                        member: {
                            shape: "S24"
                        }
                    }
                }
            }
        },
        S24: {
            type: "structure",
            members: {
                plainTextMessage: {
                    type: "structure",
                    required: [ "value" ],
                    members: {
                        value: {}
                    }
                },
                customPayload: {
                    type: "structure",
                    required: [ "value" ],
                    members: {
                        value: {}
                    }
                },
                ssmlMessage: {
                    type: "structure",
                    required: [ "value" ],
                    members: {
                        value: {}
                    }
                },
                imageResponseCard: {
                    type: "structure",
                    required: [ "title" ],
                    members: {
                        title: {},
                        subtitle: {},
                        imageUrl: {},
                        buttons: {
                            type: "list",
                            member: {
                                type: "structure",
                                required: [ "text", "value" ],
                                members: {
                                    text: {},
                                    value: {}
                                }
                            }
                        }
                    }
                }
            }
        },
        S2l: {
            type: "structure",
            required: [ "messageGroups" ],
            members: {
                messageGroups: {
                    shape: "S22"
                },
                allowInterrupt: {
                    type: "boolean"
                }
            }
        },
        S2m: {
            type: "structure",
            required: [ "closingResponse" ],
            members: {
                closingResponse: {
                    shape: "S2l"
                }
            }
        },
        S2n: {
            type: "list",
            member: {
                type: "structure",
                required: [ "name" ],
                members: {
                    name: {}
                }
            }
        },
        S2p: {
            type: "list",
            member: {
                type: "structure",
                required: [ "name", "timeToLiveInSeconds", "turnsToLive" ],
                members: {
                    name: {},
                    timeToLiveInSeconds: {
                        type: "integer"
                    },
                    turnsToLive: {
                        type: "integer"
                    }
                }
            }
        },
        S2t: {
            type: "structure",
            required: [ "kendraIndex" ],
            members: {
                kendraIndex: {},
                queryFilterStringEnabled: {
                    type: "boolean"
                },
                queryFilterString: {}
            }
        },
        S3i: {
            type: "structure",
            required: [ "slotConstraint" ],
            members: {
                defaultValueSpecification: {
                    type: "structure",
                    required: [ "defaultValueList" ],
                    members: {
                        defaultValueList: {
                            type: "list",
                            member: {
                                type: "structure",
                                required: [ "defaultValue" ],
                                members: {
                                    defaultValue: {}
                                }
                            }
                        }
                    }
                },
                slotConstraint: {},
                promptSpecification: {
                    shape: "S21"
                },
                sampleUtterances: {
                    shape: "S1v"
                },
                waitAndContinueSpecification: {
                    type: "structure",
                    required: [ "waitingResponse", "continueResponse" ],
                    members: {
                        waitingResponse: {
                            shape: "S2l"
                        },
                        continueResponse: {
                            shape: "S2l"
                        },
                        stillWaitingResponse: {
                            type: "structure",
                            required: [ "messageGroups", "frequencyInSeconds", "timeoutInSeconds" ],
                            members: {
                                messageGroups: {
                                    shape: "S22"
                                },
                                frequencyInSeconds: {
                                    type: "integer"
                                },
                                timeoutInSeconds: {
                                    type: "integer"
                                },
                                allowInterrupt: {
                                    type: "boolean"
                                }
                            }
                        }
                    }
                }
            }
        },
        S3s: {
            type: "structure",
            required: [ "obfuscationSettingType" ],
            members: {
                obfuscationSettingType: {}
            }
        },
        S3w: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    sampleValue: {
                        shape: "S3y"
                    },
                    synonyms: {
                        type: "list",
                        member: {
                            shape: "S3y"
                        }
                    }
                }
            }
        },
        S3y: {
            type: "structure",
            required: [ "value" ],
            members: {
                value: {}
            }
        },
        S41: {
            type: "structure",
            required: [ "resolutionStrategy" ],
            members: {
                resolutionStrategy: {},
                regexFilter: {
                    type: "structure",
                    required: [ "pattern" ],
                    members: {
                        pattern: {}
                    }
                }
            }
        },
        S54: {
            type: "list",
            member: {}
        },
        S5f: {
            type: "structure",
            members: {
                botImportSpecification: {
                    type: "structure",
                    required: [ "botName", "roleArn", "dataPrivacy" ],
                    members: {
                        botName: {},
                        roleArn: {},
                        dataPrivacy: {
                            shape: "Sc"
                        },
                        idleSessionTTLInSeconds: {
                            type: "integer"
                        },
                        botTags: {
                            shape: "Sf"
                        },
                        testBotAliasTags: {
                            shape: "Sf"
                        }
                    }
                },
                botLocaleImportSpecification: {
                    type: "structure",
                    required: [ "botId", "botVersion", "localeId" ],
                    members: {
                        botId: {},
                        botVersion: {},
                        localeId: {},
                        nluIntentConfidenceThreshold: {
                            type: "double"
                        },
                        voiceSettings: {
                            shape: "S1c"
                        }
                    }
                }
            }
        },
        S5m: {
            type: "list",
            member: {
                type: "structure",
                required: [ "priority", "slotId" ],
                members: {
                    priority: {
                        type: "integer"
                    },
                    slotId: {}
                }
            }
        },
        S68: {
            type: "list",
            member: {}
        }
    },
    paginators: {
        ListBotAliases: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListBotLocales: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListBotVersions: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListBots: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListBuiltInIntents: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListBuiltInSlotTypes: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListExports: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListImports: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListIntents: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListSlotTypes: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListSlots: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        }
    }
};

AWS.apiLoader.services["lexruntimev2"] = {};

AWS.LexRuntimeV2 = AWS.Service.defineService("lexruntimev2", [ "2020-08-07" ]);

AWS.apiLoader.services["lexruntimev2"]["2020-08-07"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-08-07",
        endpointPrefix: "runtime-v2-lex",
        jsonVersion: "1.1",
        protocol: "rest-json",
        protocolSettings: {
            h2: "eventstream"
        },
        serviceAbbreviation: "Lex Runtime V2",
        serviceFullName: "Amazon Lex Runtime V2",
        serviceId: "Lex Runtime V2",
        signatureVersion: "v4",
        signingName: "lex",
        uid: "runtime.lex.v2-2020-08-07"
    },
    operations: {
        DeleteSession: {
            http: {
                method: "DELETE",
                requestUri: "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}"
            },
            input: {
                type: "structure",
                required: [ "botId", "botAliasId", "sessionId", "localeId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botAliasId: {
                        location: "uri",
                        locationName: "botAliasId"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    sessionId: {
                        location: "uri",
                        locationName: "sessionId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    botId: {},
                    botAliasId: {},
                    localeId: {},
                    sessionId: {}
                }
            }
        },
        GetSession: {
            http: {
                method: "GET",
                requestUri: "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}"
            },
            input: {
                type: "structure",
                required: [ "botId", "botAliasId", "localeId", "sessionId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botAliasId: {
                        location: "uri",
                        locationName: "botAliasId"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    sessionId: {
                        location: "uri",
                        locationName: "sessionId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    sessionId: {},
                    messages: {
                        shape: "Sa"
                    },
                    interpretations: {
                        shape: "Sl"
                    },
                    sessionState: {
                        shape: "Sz"
                    }
                }
            }
        },
        PutSession: {
            http: {
                requestUri: "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}"
            },
            input: {
                type: "structure",
                required: [ "botId", "botAliasId", "localeId", "sessionState", "sessionId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botAliasId: {
                        location: "uri",
                        locationName: "botAliasId"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    sessionId: {
                        location: "uri",
                        locationName: "sessionId"
                    },
                    messages: {
                        shape: "Sa"
                    },
                    sessionState: {
                        shape: "Sz"
                    },
                    requestAttributes: {
                        shape: "S1a"
                    },
                    responseContentType: {
                        location: "header",
                        locationName: "ResponseContentType"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    contentType: {
                        location: "header",
                        locationName: "Content-Type"
                    },
                    messages: {
                        location: "header",
                        locationName: "x-amz-lex-messages"
                    },
                    sessionState: {
                        location: "header",
                        locationName: "x-amz-lex-session-state"
                    },
                    requestAttributes: {
                        location: "header",
                        locationName: "x-amz-lex-request-attributes"
                    },
                    sessionId: {
                        location: "header",
                        locationName: "x-amz-lex-session-id"
                    },
                    audioStream: {
                        shape: "S1e"
                    }
                },
                payload: "audioStream"
            }
        },
        RecognizeText: {
            http: {
                requestUri: "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/text"
            },
            input: {
                type: "structure",
                required: [ "botId", "botAliasId", "localeId", "text", "sessionId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botAliasId: {
                        location: "uri",
                        locationName: "botAliasId"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    sessionId: {
                        location: "uri",
                        locationName: "sessionId"
                    },
                    text: {
                        shape: "Sc"
                    },
                    sessionState: {
                        shape: "Sz"
                    },
                    requestAttributes: {
                        shape: "S1a"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    messages: {
                        shape: "Sa"
                    },
                    sessionState: {
                        shape: "Sz"
                    },
                    interpretations: {
                        shape: "Sl"
                    },
                    requestAttributes: {
                        shape: "S1a"
                    },
                    sessionId: {}
                }
            }
        },
        RecognizeUtterance: {
            http: {
                requestUri: "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/utterance"
            },
            input: {
                type: "structure",
                required: [ "botId", "botAliasId", "localeId", "requestContentType", "sessionId" ],
                members: {
                    botId: {
                        location: "uri",
                        locationName: "botId"
                    },
                    botAliasId: {
                        location: "uri",
                        locationName: "botAliasId"
                    },
                    localeId: {
                        location: "uri",
                        locationName: "localeId"
                    },
                    sessionId: {
                        location: "uri",
                        locationName: "sessionId"
                    },
                    sessionState: {
                        shape: "S1i",
                        location: "header",
                        locationName: "x-amz-lex-session-state"
                    },
                    requestAttributes: {
                        shape: "S1i",
                        location: "header",
                        locationName: "x-amz-lex-request-attributes"
                    },
                    requestContentType: {
                        location: "header",
                        locationName: "Content-Type"
                    },
                    responseContentType: {
                        location: "header",
                        locationName: "Response-Content-Type"
                    },
                    inputStream: {
                        shape: "S1e"
                    }
                },
                payload: "inputStream"
            },
            output: {
                type: "structure",
                members: {
                    inputMode: {
                        location: "header",
                        locationName: "x-amz-lex-input-mode"
                    },
                    contentType: {
                        location: "header",
                        locationName: "Content-Type"
                    },
                    messages: {
                        location: "header",
                        locationName: "x-amz-lex-messages"
                    },
                    interpretations: {
                        location: "header",
                        locationName: "x-amz-lex-interpretations"
                    },
                    sessionState: {
                        location: "header",
                        locationName: "x-amz-lex-session-state"
                    },
                    requestAttributes: {
                        location: "header",
                        locationName: "x-amz-lex-request-attributes"
                    },
                    sessionId: {
                        location: "header",
                        locationName: "x-amz-lex-session-id"
                    },
                    inputTranscript: {
                        location: "header",
                        locationName: "x-amz-lex-input-transcript"
                    },
                    audioStream: {
                        shape: "S1e"
                    }
                },
                payload: "audioStream"
            },
            authtype: "v4-unsigned-body"
        }
    },
    shapes: {
        Sa: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    content: {
                        shape: "Sc"
                    },
                    contentType: {},
                    imageResponseCard: {
                        type: "structure",
                        required: [ "title" ],
                        members: {
                            title: {},
                            subtitle: {},
                            imageUrl: {},
                            buttons: {
                                type: "list",
                                member: {
                                    type: "structure",
                                    required: [ "text", "value" ],
                                    members: {
                                        text: {},
                                        value: {}
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        Sc: {
            type: "string",
            sensitive: true
        },
        Sl: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    nluConfidence: {
                        type: "structure",
                        members: {
                            score: {
                                type: "double"
                            }
                        }
                    },
                    sentimentResponse: {
                        type: "structure",
                        members: {
                            sentiment: {},
                            sentimentScore: {
                                type: "structure",
                                members: {
                                    positive: {
                                        type: "double"
                                    },
                                    negative: {
                                        type: "double"
                                    },
                                    neutral: {
                                        type: "double"
                                    },
                                    mixed: {
                                        type: "double"
                                    }
                                }
                            }
                        }
                    },
                    intent: {
                        shape: "Ss"
                    }
                }
            }
        },
        Ss: {
            type: "structure",
            required: [ "name" ],
            members: {
                name: {},
                slots: {
                    type: "map",
                    key: {},
                    value: {
                        type: "structure",
                        members: {
                            value: {
                                type: "structure",
                                required: [ "interpretedValue" ],
                                members: {
                                    originalValue: {},
                                    interpretedValue: {},
                                    resolvedValues: {
                                        type: "list",
                                        member: {}
                                    }
                                }
                            }
                        }
                    }
                },
                state: {},
                confirmationState: {}
            }
        },
        Sz: {
            type: "structure",
            members: {
                dialogAction: {
                    type: "structure",
                    required: [ "type" ],
                    members: {
                        type: {},
                        slotToElicit: {}
                    }
                },
                intent: {
                    shape: "Ss"
                },
                activeContexts: {
                    type: "list",
                    member: {
                        type: "structure",
                        required: [ "name", "timeToLive" ],
                        members: {
                            name: {},
                            timeToLive: {
                                type: "structure",
                                required: [ "timeToLiveInSeconds", "turnsToLive" ],
                                members: {
                                    timeToLiveInSeconds: {
                                        type: "integer"
                                    },
                                    turnsToLive: {
                                        type: "integer"
                                    }
                                }
                            },
                            contextAttributes: {
                                type: "map",
                                key: {},
                                value: {
                                    shape: "Sc"
                                }
                            }
                        }
                    }
                },
                sessionAttributes: {
                    shape: "S1a"
                },
                originatingRequestId: {}
            }
        },
        S1a: {
            type: "map",
            key: {},
            value: {}
        },
        S1e: {
            type: "blob",
            streaming: true
        },
        S1i: {
            type: "string",
            sensitive: true
        }
    },
    paginators: {}
};

AWS.apiLoader.services["fis"] = {};

AWS.Fis = AWS.Service.defineService("fis", [ "2020-12-01" ]);

AWS.apiLoader.services["fis"]["2020-12-01"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-12-01",
        endpointPrefix: "fis",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceAbbreviation: "FIS",
        serviceFullName: "AWS Fault Injection Simulator",
        serviceId: "fis",
        signatureVersion: "v4",
        signingName: "fis",
        uid: "fis-2020-12-01"
    },
    operations: {
        CreateExperimentTemplate: {
            http: {
                requestUri: "/experimentTemplates",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "clientToken", "description", "stopConditions", "actions", "roleArn" ],
                members: {
                    clientToken: {
                        idempotencyToken: true
                    },
                    description: {},
                    stopConditions: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "source" ],
                            members: {
                                source: {},
                                value: {}
                            }
                        }
                    },
                    targets: {
                        type: "map",
                        key: {},
                        value: {
                            type: "structure",
                            required: [ "resourceType", "selectionMode" ],
                            members: {
                                resourceType: {},
                                resourceArns: {
                                    shape: "Sc"
                                },
                                resourceTags: {
                                    shape: "Se"
                                },
                                filters: {
                                    shape: "Sh"
                                },
                                selectionMode: {}
                            }
                        }
                    },
                    actions: {
                        type: "map",
                        key: {},
                        value: {
                            type: "structure",
                            required: [ "actionId" ],
                            members: {
                                actionId: {},
                                description: {},
                                parameters: {
                                    shape: "Ss"
                                },
                                targets: {
                                    shape: "Sv"
                                },
                                startAfter: {
                                    shape: "Sx"
                                }
                            }
                        }
                    },
                    roleArn: {},
                    tags: {
                        shape: "Se"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    experimentTemplate: {
                        shape: "S11"
                    }
                }
            }
        },
        DeleteExperimentTemplate: {
            http: {
                method: "DELETE",
                requestUri: "/experimentTemplates/{id}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "id" ],
                members: {
                    id: {
                        location: "uri",
                        locationName: "id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    experimentTemplate: {
                        shape: "S11"
                    }
                }
            }
        },
        GetAction: {
            http: {
                method: "GET",
                requestUri: "/actions/{id}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "id" ],
                members: {
                    id: {
                        location: "uri",
                        locationName: "id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    action: {
                        type: "structure",
                        members: {
                            id: {},
                            description: {},
                            parameters: {
                                type: "map",
                                key: {},
                                value: {
                                    type: "structure",
                                    members: {
                                        description: {},
                                        required: {
                                            type: "boolean"
                                        }
                                    }
                                }
                            },
                            targets: {
                                shape: "S1o"
                            },
                            tags: {
                                shape: "Se"
                            }
                        }
                    }
                }
            }
        },
        GetExperiment: {
            http: {
                method: "GET",
                requestUri: "/experiments/{id}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "id" ],
                members: {
                    id: {
                        location: "uri",
                        locationName: "id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    experiment: {
                        shape: "S1v"
                    }
                }
            }
        },
        GetExperimentTemplate: {
            http: {
                method: "GET",
                requestUri: "/experimentTemplates/{id}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "id" ],
                members: {
                    id: {
                        location: "uri",
                        locationName: "id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    experimentTemplate: {
                        shape: "S11"
                    }
                }
            }
        },
        ListActions: {
            http: {
                method: "GET",
                requestUri: "/actions",
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
                    actions: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                id: {},
                                description: {},
                                targets: {
                                    shape: "S1o"
                                },
                                tags: {
                                    shape: "Se"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListExperimentTemplates: {
            http: {
                method: "GET",
                requestUri: "/experimentTemplates",
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
                    experimentTemplates: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                id: {},
                                description: {},
                                creationTime: {
                                    type: "timestamp"
                                },
                                lastUpdateTime: {
                                    type: "timestamp"
                                },
                                tags: {
                                    shape: "Se"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListExperiments: {
            http: {
                method: "GET",
                requestUri: "/experiments",
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
                    experiments: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                id: {},
                                experimentTemplateId: {},
                                state: {
                                    shape: "S1w"
                                },
                                creationTime: {
                                    type: "timestamp"
                                },
                                tags: {
                                    shape: "Se"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListTagsForResource: {
            http: {
                method: "GET",
                requestUri: "/tags/{resourceArn}",
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
                        shape: "Se"
                    }
                }
            }
        },
        StartExperiment: {
            http: {
                requestUri: "/experiments",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "clientToken", "experimentTemplateId" ],
                members: {
                    clientToken: {
                        idempotencyToken: true
                    },
                    experimentTemplateId: {},
                    tags: {
                        shape: "Se"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    experiment: {
                        shape: "S1v"
                    }
                }
            }
        },
        StopExperiment: {
            http: {
                method: "DELETE",
                requestUri: "/experiments/{id}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "id" ],
                members: {
                    id: {
                        location: "uri",
                        locationName: "id"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    experiment: {
                        shape: "S1v"
                    }
                }
            }
        },
        TagResource: {
            http: {
                requestUri: "/tags/{resourceArn}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "resourceArn", "tags" ],
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    tags: {
                        shape: "Se"
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
                requestUri: "/tags/{resourceArn}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "resourceArn" ],
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
            }
        },
        UpdateExperimentTemplate: {
            http: {
                method: "PATCH",
                requestUri: "/experimentTemplates/{id}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "id" ],
                members: {
                    id: {
                        location: "uri",
                        locationName: "id"
                    },
                    description: {},
                    stopConditions: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "source" ],
                            members: {
                                source: {},
                                value: {}
                            }
                        }
                    },
                    targets: {
                        type: "map",
                        key: {},
                        value: {
                            type: "structure",
                            required: [ "resourceType", "selectionMode" ],
                            members: {
                                resourceType: {},
                                resourceArns: {
                                    shape: "Sc"
                                },
                                resourceTags: {
                                    shape: "Se"
                                },
                                filters: {
                                    shape: "Sh"
                                },
                                selectionMode: {}
                            }
                        }
                    },
                    actions: {
                        type: "map",
                        key: {},
                        value: {
                            type: "structure",
                            members: {
                                actionId: {},
                                description: {},
                                parameters: {
                                    shape: "Ss"
                                },
                                targets: {
                                    shape: "Sv"
                                },
                                startAfter: {
                                    shape: "Sx"
                                }
                            }
                        }
                    },
                    roleArn: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    experimentTemplate: {
                        shape: "S11"
                    }
                }
            }
        }
    },
    shapes: {
        Sc: {
            type: "list",
            member: {}
        },
        Se: {
            type: "map",
            key: {},
            value: {}
        },
        Sh: {
            type: "list",
            member: {
                type: "structure",
                required: [ "path", "values" ],
                members: {
                    path: {},
                    values: {
                        shape: "Sk"
                    }
                }
            }
        },
        Sk: {
            type: "list",
            member: {}
        },
        Ss: {
            type: "map",
            key: {},
            value: {}
        },
        Sv: {
            type: "map",
            key: {},
            value: {}
        },
        Sx: {
            type: "list",
            member: {}
        },
        S11: {
            type: "structure",
            members: {
                id: {},
                description: {},
                targets: {
                    type: "map",
                    key: {},
                    value: {
                        type: "structure",
                        members: {
                            resourceType: {},
                            resourceArns: {
                                shape: "Sc"
                            },
                            resourceTags: {
                                shape: "Se"
                            },
                            filters: {
                                type: "list",
                                member: {
                                    type: "structure",
                                    members: {
                                        path: {},
                                        values: {
                                            shape: "Sk"
                                        }
                                    }
                                }
                            },
                            selectionMode: {}
                        }
                    }
                },
                actions: {
                    type: "map",
                    key: {},
                    value: {
                        type: "structure",
                        members: {
                            actionId: {},
                            description: {},
                            parameters: {
                                shape: "Ss"
                            },
                            targets: {
                                shape: "Sv"
                            },
                            startAfter: {
                                shape: "Sx"
                            }
                        }
                    }
                },
                stopConditions: {
                    type: "list",
                    member: {
                        type: "structure",
                        members: {
                            source: {},
                            value: {}
                        }
                    }
                },
                creationTime: {
                    type: "timestamp"
                },
                lastUpdateTime: {
                    type: "timestamp"
                },
                roleArn: {},
                tags: {
                    shape: "Se"
                }
            }
        },
        S1o: {
            type: "map",
            key: {},
            value: {
                type: "structure",
                members: {
                    resourceType: {}
                }
            }
        },
        S1v: {
            type: "structure",
            members: {
                id: {},
                experimentTemplateId: {},
                roleArn: {},
                state: {
                    shape: "S1w"
                },
                targets: {
                    type: "map",
                    key: {},
                    value: {
                        type: "structure",
                        members: {
                            resourceType: {},
                            resourceArns: {
                                shape: "Sc"
                            },
                            resourceTags: {
                                shape: "Se"
                            },
                            filters: {
                                type: "list",
                                member: {
                                    type: "structure",
                                    members: {
                                        path: {},
                                        values: {
                                            type: "list",
                                            member: {}
                                        }
                                    }
                                }
                            },
                            selectionMode: {}
                        }
                    }
                },
                actions: {
                    type: "map",
                    key: {},
                    value: {
                        type: "structure",
                        members: {
                            actionId: {},
                            description: {},
                            parameters: {
                                type: "map",
                                key: {},
                                value: {}
                            },
                            targets: {
                                type: "map",
                                key: {},
                                value: {}
                            },
                            startAfter: {
                                type: "list",
                                member: {}
                            },
                            state: {
                                type: "structure",
                                members: {
                                    status: {},
                                    reason: {}
                                }
                            }
                        }
                    }
                },
                stopConditions: {
                    type: "list",
                    member: {
                        type: "structure",
                        members: {
                            source: {},
                            value: {}
                        }
                    }
                },
                creationTime: {
                    type: "timestamp"
                },
                startTime: {
                    type: "timestamp"
                },
                endTime: {
                    type: "timestamp"
                },
                tags: {
                    shape: "Se"
                }
            }
        },
        S1w: {
            type: "structure",
            members: {
                status: {},
                reason: {}
            }
        }
    },
    paginators: {
        ListActions: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListExperimentTemplates: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        },
        ListExperiments: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults"
        }
    }
};

AWS.apiLoader.services["lookoutmetrics"] = {};

AWS.LookoutMetrics = AWS.Service.defineService("lookoutmetrics", [ "2017-07-25" ]);

_xamzrequire = function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof _xamzrequire == "function" && _xamzrequire;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f;
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }
        return n[o].exports;
    }
    var i = typeof _xamzrequire == "function" && _xamzrequire;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s;
}({
    102: [ function(require, module, exports) {
        var AWS = require("../core");
        AWS.util.update(AWS.LookoutMetrics.prototype, {
            setupRequestListeners: function setupRequestListeners(request) {
                request.addListener("build", this.modifyContentType);
            },
            modifyContentType: function modifyContentType(request) {
                if (request.httpRequest.headers["Content-Type"] === "application/json") {
                    request.httpRequest.headers["Content-Type"] = "application/x-amz-json-1.1";
                }
            }
        });
    }, {
        "../core": 39
    } ]
}, {}, [ 102 ]);

AWS.apiLoader.services["lookoutmetrics"]["2017-07-25"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2017-07-25",
        endpointPrefix: "lookoutmetrics",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceAbbreviation: "LookoutMetrics",
        serviceFullName: "Amazon Lookout for Metrics",
        serviceId: "LookoutMetrics",
        signatureVersion: "v4",
        signingName: "lookoutmetrics",
        uid: "lookoutmetrics-2017-07-25"
    },
    operations: {
        ActivateAnomalyDetector: {
            http: {
                requestUri: "/ActivateAnomalyDetector"
            },
            input: {
                type: "structure",
                required: [ "AnomalyDetectorArn" ],
                members: {
                    AnomalyDetectorArn: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        BackTestAnomalyDetector: {
            http: {
                requestUri: "/BackTestAnomalyDetector"
            },
            input: {
                type: "structure",
                required: [ "AnomalyDetectorArn" ],
                members: {
                    AnomalyDetectorArn: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        CreateAlert: {
            http: {
                requestUri: "/CreateAlert"
            },
            input: {
                type: "structure",
                required: [ "AlertName", "AlertSensitivityThreshold", "AnomalyDetectorArn", "Action" ],
                members: {
                    AlertName: {},
                    AlertSensitivityThreshold: {
                        type: "integer"
                    },
                    AlertDescription: {},
                    AnomalyDetectorArn: {},
                    Action: {
                        shape: "Sa"
                    },
                    Tags: {
                        shape: "Sd"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    AlertArn: {}
                }
            }
        },
        CreateAnomalyDetector: {
            http: {
                requestUri: "/CreateAnomalyDetector"
            },
            input: {
                type: "structure",
                required: [ "AnomalyDetectorName", "AnomalyDetectorConfig" ],
                members: {
                    AnomalyDetectorName: {},
                    AnomalyDetectorDescription: {},
                    AnomalyDetectorConfig: {
                        shape: "Sk"
                    },
                    KmsKeyArn: {},
                    Tags: {
                        shape: "Sd"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    AnomalyDetectorArn: {}
                }
            }
        },
        CreateMetricSet: {
            http: {
                requestUri: "/CreateMetricSet"
            },
            input: {
                type: "structure",
                required: [ "AnomalyDetectorArn", "MetricSetName", "MetricList", "MetricSource" ],
                members: {
                    AnomalyDetectorArn: {},
                    MetricSetName: {},
                    MetricSetDescription: {},
                    MetricList: {
                        shape: "Sr"
                    },
                    Offset: {
                        type: "integer"
                    },
                    TimestampColumn: {
                        shape: "Sx"
                    },
                    DimensionList: {
                        shape: "Sz"
                    },
                    MetricSetFrequency: {},
                    MetricSource: {
                        shape: "S10"
                    },
                    Timezone: {},
                    Tags: {
                        shape: "Sd"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    MetricSetArn: {}
                }
            }
        },
        DeleteAlert: {
            http: {
                requestUri: "/DeleteAlert"
            },
            input: {
                type: "structure",
                required: [ "AlertArn" ],
                members: {
                    AlertArn: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DeleteAnomalyDetector: {
            http: {
                requestUri: "/DeleteAnomalyDetector"
            },
            input: {
                type: "structure",
                required: [ "AnomalyDetectorArn" ],
                members: {
                    AnomalyDetectorArn: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DescribeAlert: {
            http: {
                requestUri: "/DescribeAlert"
            },
            input: {
                type: "structure",
                required: [ "AlertArn" ],
                members: {
                    AlertArn: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    Alert: {
                        type: "structure",
                        members: {
                            Action: {
                                shape: "Sa"
                            },
                            AlertDescription: {},
                            AlertArn: {},
                            AnomalyDetectorArn: {},
                            AlertName: {},
                            AlertSensitivityThreshold: {
                                type: "integer"
                            },
                            AlertType: {},
                            AlertStatus: {},
                            LastModificationTime: {
                                type: "timestamp"
                            },
                            CreationTime: {
                                type: "timestamp"
                            }
                        }
                    }
                }
            }
        },
        DescribeAnomalyDetectionExecutions: {
            http: {
                requestUri: "/DescribeAnomalyDetectionExecutions"
            },
            input: {
                type: "structure",
                required: [ "AnomalyDetectorArn" ],
                members: {
                    AnomalyDetectorArn: {},
                    Timestamp: {},
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    ExecutionList: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Timestamp: {},
                                Status: {},
                                FailureReason: {}
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        DescribeAnomalyDetector: {
            http: {
                requestUri: "/DescribeAnomalyDetector"
            },
            input: {
                type: "structure",
                required: [ "AnomalyDetectorArn" ],
                members: {
                    AnomalyDetectorArn: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    AnomalyDetectorArn: {},
                    AnomalyDetectorName: {},
                    AnomalyDetectorDescription: {},
                    AnomalyDetectorConfig: {
                        type: "structure",
                        members: {
                            AnomalyDetectorFrequency: {}
                        }
                    },
                    CreationTime: {
                        type: "timestamp"
                    },
                    LastModificationTime: {
                        type: "timestamp"
                    },
                    Status: {},
                    FailureReason: {},
                    KmsKeyArn: {}
                }
            }
        },
        DescribeMetricSet: {
            http: {
                requestUri: "/DescribeMetricSet"
            },
            input: {
                type: "structure",
                required: [ "MetricSetArn" ],
                members: {
                    MetricSetArn: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    MetricSetArn: {},
                    AnomalyDetectorArn: {},
                    MetricSetName: {},
                    MetricSetDescription: {},
                    CreationTime: {
                        type: "timestamp"
                    },
                    LastModificationTime: {
                        type: "timestamp"
                    },
                    Offset: {
                        type: "integer"
                    },
                    MetricList: {
                        shape: "Sr"
                    },
                    TimestampColumn: {
                        shape: "Sx"
                    },
                    DimensionList: {
                        shape: "Sz"
                    },
                    MetricSetFrequency: {},
                    Timezone: {},
                    MetricSource: {
                        shape: "S10"
                    }
                }
            }
        },
        GetAnomalyGroup: {
            http: {
                requestUri: "/GetAnomalyGroup"
            },
            input: {
                type: "structure",
                required: [ "AnomalyGroupId", "AnomalyDetectorArn" ],
                members: {
                    AnomalyGroupId: {},
                    AnomalyDetectorArn: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    AnomalyGroup: {
                        type: "structure",
                        members: {
                            StartTime: {},
                            EndTime: {},
                            AnomalyGroupId: {},
                            AnomalyGroupScore: {
                                type: "double"
                            },
                            PrimaryMetricName: {},
                            MetricLevelImpactList: {
                                type: "list",
                                member: {
                                    type: "structure",
                                    members: {
                                        MetricName: {},
                                        NumTimeSeries: {
                                            type: "integer"
                                        },
                                        ContributionMatrix: {
                                            type: "structure",
                                            members: {
                                                DimensionContributionList: {
                                                    type: "list",
                                                    member: {
                                                        type: "structure",
                                                        members: {
                                                            DimensionName: {},
                                                            DimensionValueContributionList: {
                                                                type: "list",
                                                                member: {
                                                                    type: "structure",
                                                                    members: {
                                                                        DimensionValue: {},
                                                                        ContributionScore: {
                                                                            type: "double"
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        GetFeedback: {
            http: {
                requestUri: "/GetFeedback"
            },
            input: {
                type: "structure",
                required: [ "AnomalyDetectorArn", "AnomalyGroupTimeSeriesFeedback" ],
                members: {
                    AnomalyDetectorArn: {},
                    AnomalyGroupTimeSeriesFeedback: {
                        type: "structure",
                        required: [ "AnomalyGroupId" ],
                        members: {
                            AnomalyGroupId: {},
                            TimeSeriesId: {}
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
                    AnomalyGroupTimeSeriesFeedback: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                TimeSeriesId: {},
                                IsAnomaly: {
                                    type: "boolean"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        GetSampleData: {
            http: {
                requestUri: "/GetSampleData"
            },
            input: {
                type: "structure",
                members: {
                    S3SourceConfig: {
                        type: "structure",
                        required: [ "RoleArn", "FileFormatDescriptor" ],
                        members: {
                            RoleArn: {},
                            TemplatedPathList: {
                                shape: "S12"
                            },
                            HistoricalDataPathList: {
                                shape: "S14"
                            },
                            FileFormatDescriptor: {
                                shape: "S16"
                            }
                        }
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    HeaderValues: {
                        type: "list",
                        member: {}
                    },
                    SampleRows: {
                        type: "list",
                        member: {
                            type: "list",
                            member: {}
                        }
                    }
                }
            }
        },
        ListAlerts: {
            http: {
                requestUri: "/ListAlerts"
            },
            input: {
                type: "structure",
                members: {
                    AnomalyDetectorArn: {},
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    AlertSummaryList: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                AlertArn: {},
                                AnomalyDetectorArn: {},
                                AlertName: {},
                                AlertSensitivityThreshold: {
                                    type: "integer"
                                },
                                AlertType: {},
                                AlertStatus: {},
                                LastModificationTime: {
                                    type: "timestamp"
                                },
                                CreationTime: {
                                    type: "timestamp"
                                },
                                Tags: {
                                    shape: "Sd"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListAnomalyDetectors: {
            http: {
                requestUri: "/ListAnomalyDetectors"
            },
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
                    AnomalyDetectorSummaryList: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                AnomalyDetectorArn: {},
                                AnomalyDetectorName: {},
                                AnomalyDetectorDescription: {},
                                CreationTime: {
                                    type: "timestamp"
                                },
                                LastModificationTime: {
                                    type: "timestamp"
                                },
                                Status: {},
                                Tags: {
                                    shape: "Sd"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListAnomalyGroupSummaries: {
            http: {
                requestUri: "/ListAnomalyGroupSummaries"
            },
            input: {
                type: "structure",
                required: [ "AnomalyDetectorArn", "SensitivityThreshold" ],
                members: {
                    AnomalyDetectorArn: {},
                    SensitivityThreshold: {
                        type: "integer"
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
                    AnomalyGroupSummaryList: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                StartTime: {},
                                EndTime: {},
                                AnomalyGroupId: {},
                                AnomalyGroupScore: {
                                    type: "double"
                                },
                                PrimaryMetricName: {}
                            }
                        }
                    },
                    AnomalyGroupStatistics: {
                        type: "structure",
                        members: {
                            EvaluationStartDate: {},
                            TotalCount: {
                                type: "integer"
                            },
                            ItemizedMetricStatsList: {
                                type: "list",
                                member: {
                                    type: "structure",
                                    members: {
                                        MetricName: {},
                                        OccurrenceCount: {
                                            type: "integer"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListAnomalyGroupTimeSeries: {
            http: {
                requestUri: "/ListAnomalyGroupTimeSeries"
            },
            input: {
                type: "structure",
                required: [ "AnomalyDetectorArn", "AnomalyGroupId", "MetricName" ],
                members: {
                    AnomalyDetectorArn: {},
                    AnomalyGroupId: {},
                    MetricName: {},
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    AnomalyGroupId: {},
                    MetricName: {},
                    TimestampList: {
                        type: "list",
                        member: {}
                    },
                    NextToken: {},
                    TimeSeriesList: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "TimeSeriesId", "DimensionList", "MetricValueList" ],
                            members: {
                                TimeSeriesId: {},
                                DimensionList: {
                                    type: "list",
                                    member: {
                                        type: "structure",
                                        required: [ "DimensionName", "DimensionValue" ],
                                        members: {
                                            DimensionName: {},
                                            DimensionValue: {}
                                        }
                                    }
                                },
                                MetricValueList: {
                                    type: "list",
                                    member: {
                                        type: "double"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        ListMetricSets: {
            http: {
                requestUri: "/ListMetricSets"
            },
            input: {
                type: "structure",
                members: {
                    AnomalyDetectorArn: {},
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    MetricSetSummaryList: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                MetricSetArn: {},
                                AnomalyDetectorArn: {},
                                MetricSetDescription: {},
                                MetricSetName: {},
                                CreationTime: {
                                    type: "timestamp"
                                },
                                LastModificationTime: {
                                    type: "timestamp"
                                },
                                Tags: {
                                    shape: "Sd"
                                }
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
                requestUri: "/tags/{resourceArn}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "ResourceArn" ],
                members: {
                    ResourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Tags: {
                        shape: "Sd",
                        locationName: "Tags"
                    }
                }
            }
        },
        PutFeedback: {
            http: {
                requestUri: "/PutFeedback"
            },
            input: {
                type: "structure",
                required: [ "AnomalyDetectorArn", "AnomalyGroupTimeSeriesFeedback" ],
                members: {
                    AnomalyDetectorArn: {},
                    AnomalyGroupTimeSeriesFeedback: {
                        type: "structure",
                        required: [ "AnomalyGroupId", "TimeSeriesId", "IsAnomaly" ],
                        members: {
                            AnomalyGroupId: {},
                            TimeSeriesId: {},
                            IsAnomaly: {
                                type: "boolean"
                            }
                        }
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        TagResource: {
            http: {
                requestUri: "/tags/{resourceArn}",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "ResourceArn", "Tags" ],
                members: {
                    ResourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    Tags: {
                        shape: "Sd",
                        locationName: "tags"
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
                requestUri: "/tags/{resourceArn}",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "ResourceArn", "TagKeys" ],
                members: {
                    ResourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
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
        UpdateAnomalyDetector: {
            http: {
                requestUri: "/UpdateAnomalyDetector"
            },
            input: {
                type: "structure",
                required: [ "AnomalyDetectorArn" ],
                members: {
                    AnomalyDetectorArn: {},
                    KmsKeyArn: {},
                    AnomalyDetectorDescription: {},
                    AnomalyDetectorConfig: {
                        shape: "Sk"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    AnomalyDetectorArn: {}
                }
            }
        },
        UpdateMetricSet: {
            http: {
                requestUri: "/UpdateMetricSet"
            },
            input: {
                type: "structure",
                required: [ "MetricSetArn" ],
                members: {
                    MetricSetArn: {},
                    MetricSetDescription: {},
                    MetricList: {
                        shape: "Sr"
                    },
                    Offset: {
                        type: "integer"
                    },
                    TimestampColumn: {
                        shape: "Sx"
                    },
                    DimensionList: {
                        shape: "Sz"
                    },
                    MetricSetFrequency: {},
                    MetricSource: {
                        shape: "S10"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    MetricSetArn: {}
                }
            }
        }
    },
    shapes: {
        Sa: {
            type: "structure",
            members: {
                SNSConfiguration: {
                    type: "structure",
                    required: [ "RoleArn", "SnsTopicArn" ],
                    members: {
                        RoleArn: {},
                        SnsTopicArn: {}
                    }
                },
                LambdaConfiguration: {
                    type: "structure",
                    required: [ "RoleArn", "LambdaArn" ],
                    members: {
                        RoleArn: {},
                        LambdaArn: {}
                    }
                }
            }
        },
        Sd: {
            type: "map",
            key: {},
            value: {}
        },
        Sk: {
            type: "structure",
            members: {
                AnomalyDetectorFrequency: {}
            }
        },
        Sr: {
            type: "list",
            member: {
                type: "structure",
                required: [ "MetricName", "AggregationFunction" ],
                members: {
                    MetricName: {},
                    AggregationFunction: {},
                    Namespace: {}
                }
            }
        },
        Sx: {
            type: "structure",
            members: {
                ColumnName: {},
                ColumnFormat: {}
            }
        },
        Sz: {
            type: "list",
            member: {}
        },
        S10: {
            type: "structure",
            members: {
                S3SourceConfig: {
                    type: "structure",
                    required: [ "RoleArn" ],
                    members: {
                        RoleArn: {},
                        TemplatedPathList: {
                            shape: "S12"
                        },
                        HistoricalDataPathList: {
                            shape: "S14"
                        },
                        FileFormatDescriptor: {
                            shape: "S16"
                        }
                    }
                },
                AppFlowConfig: {
                    type: "structure",
                    required: [ "RoleArn", "FlowName" ],
                    members: {
                        RoleArn: {},
                        FlowName: {}
                    }
                },
                CloudWatchConfig: {
                    type: "structure",
                    required: [ "RoleArn" ],
                    members: {
                        RoleArn: {}
                    }
                },
                RDSSourceConfig: {
                    type: "structure",
                    required: [ "DBInstanceIdentifier", "DatabaseHost", "DatabasePort", "SecretManagerArn", "DatabaseName", "TableName", "RoleArn", "VpcConfiguration" ],
                    members: {
                        DBInstanceIdentifier: {},
                        DatabaseHost: {},
                        DatabasePort: {
                            type: "integer"
                        },
                        SecretManagerArn: {},
                        DatabaseName: {},
                        TableName: {},
                        RoleArn: {},
                        VpcConfiguration: {
                            shape: "S1q"
                        }
                    }
                },
                RedshiftSourceConfig: {
                    type: "structure",
                    required: [ "ClusterIdentifier", "DatabaseHost", "DatabasePort", "SecretManagerArn", "DatabaseName", "TableName", "RoleArn", "VpcConfiguration" ],
                    members: {
                        ClusterIdentifier: {},
                        DatabaseHost: {},
                        DatabasePort: {
                            type: "integer"
                        },
                        SecretManagerArn: {},
                        DatabaseName: {},
                        TableName: {},
                        RoleArn: {},
                        VpcConfiguration: {
                            shape: "S1q"
                        }
                    }
                }
            }
        },
        S12: {
            type: "list",
            member: {}
        },
        S14: {
            type: "list",
            member: {}
        },
        S16: {
            type: "structure",
            members: {
                CsvFormatDescriptor: {
                    type: "structure",
                    members: {
                        FileCompression: {},
                        Charset: {},
                        ContainsHeader: {
                            type: "boolean"
                        },
                        Delimiter: {},
                        HeaderList: {
                            type: "list",
                            member: {}
                        },
                        QuoteSymbol: {}
                    }
                },
                JsonFormatDescriptor: {
                    type: "structure",
                    members: {
                        FileCompression: {},
                        Charset: {}
                    }
                }
            }
        },
        S1q: {
            type: "structure",
            required: [ "SubnetIdList", "SecurityGroupIdList" ],
            members: {
                SubnetIdList: {
                    type: "list",
                    member: {}
                },
                SecurityGroupIdList: {
                    type: "list",
                    member: {}
                }
            }
        }
    },
    paginators: {
        DescribeAnomalyDetectionExecutions: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        GetFeedback: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListAlerts: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListAnomalyDetectors: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListAnomalyGroupSummaries: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListAnomalyGroupTimeSeries: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListMetricSets: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        }
    }
};

AWS.apiLoader.services["mgn"] = {};

AWS.Mgn = AWS.Service.defineService("mgn", [ "2020-02-26" ]);

AWS.apiLoader.services["mgn"]["2020-02-26"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-02-26",
        endpointPrefix: "mgn",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceAbbreviation: "mgn",
        serviceFullName: "Application Migration Service",
        serviceId: "mgn",
        signatureVersion: "v4",
        signingName: "mgn",
        uid: "mgn-2020-02-26"
    },
    operations: {
        ChangeServerLifeCycleState: {
            http: {
                requestUri: "/ChangeServerLifeCycleState",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "lifeCycle", "sourceServerID" ],
                members: {
                    lifeCycle: {
                        type: "structure",
                        required: [ "state" ],
                        members: {
                            state: {}
                        }
                    },
                    sourceServerID: {}
                }
            },
            output: {
                shape: "S5"
            }
        },
        CreateReplicationConfigurationTemplate: {
            http: {
                requestUri: "/CreateReplicationConfigurationTemplate",
                responseCode: 201
            },
            input: {
                type: "structure",
                required: [ "associateDefaultSecurityGroup", "bandwidthThrottling", "createPublicIP", "dataPlaneRouting", "defaultLargeStagingDiskType", "ebsEncryption", "replicationServerInstanceType", "replicationServersSecurityGroupsIDs", "stagingAreaSubnetId", "stagingAreaTags", "useDedicatedReplicationServer" ],
                members: {
                    associateDefaultSecurityGroup: {
                        type: "boolean"
                    },
                    bandwidthThrottling: {
                        type: "long"
                    },
                    createPublicIP: {
                        type: "boolean"
                    },
                    dataPlaneRouting: {},
                    defaultLargeStagingDiskType: {},
                    ebsEncryption: {},
                    ebsEncryptionKeyArn: {},
                    replicationServerInstanceType: {},
                    replicationServersSecurityGroupsIDs: {
                        shape: "S1j"
                    },
                    stagingAreaSubnetId: {},
                    stagingAreaTags: {
                        shape: "S1c"
                    },
                    tags: {
                        shape: "S1c"
                    },
                    useDedicatedReplicationServer: {
                        type: "boolean"
                    }
                }
            },
            output: {
                shape: "S1m"
            }
        },
        DeleteJob: {
            http: {
                requestUri: "/DeleteJob",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "jobID" ],
                members: {
                    jobID: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        },
        DeleteReplicationConfigurationTemplate: {
            http: {
                requestUri: "/DeleteReplicationConfigurationTemplate",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "replicationConfigurationTemplateID" ],
                members: {
                    replicationConfigurationTemplateID: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        },
        DeleteSourceServer: {
            http: {
                requestUri: "/DeleteSourceServer",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "sourceServerID" ],
                members: {
                    sourceServerID: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        },
        DescribeJobLogItems: {
            http: {
                requestUri: "/DescribeJobLogItems",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "jobID" ],
                members: {
                    jobID: {},
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    items: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                event: {},
                                eventData: {
                                    type: "structure",
                                    members: {
                                        conversionServerID: {},
                                        rawError: {},
                                        sourceServerID: {},
                                        targetInstanceID: {}
                                    }
                                },
                                logDateTime: {}
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        DescribeJobs: {
            http: {
                requestUri: "/DescribeJobs",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "filters" ],
                members: {
                    filters: {
                        type: "structure",
                        members: {
                            fromDate: {},
                            jobIDs: {
                                type: "list",
                                member: {}
                            },
                            toDate: {}
                        }
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    items: {
                        type: "list",
                        member: {
                            shape: "S27"
                        }
                    },
                    nextToken: {}
                }
            }
        },
        DescribeReplicationConfigurationTemplates: {
            http: {
                requestUri: "/DescribeReplicationConfigurationTemplates",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "replicationConfigurationTemplateIDs" ],
                members: {
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {},
                    replicationConfigurationTemplateIDs: {
                        type: "list",
                        member: {}
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    items: {
                        type: "list",
                        member: {
                            shape: "S1m"
                        }
                    },
                    nextToken: {}
                }
            }
        },
        DescribeSourceServers: {
            http: {
                requestUri: "/DescribeSourceServers",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "filters" ],
                members: {
                    filters: {
                        type: "structure",
                        members: {
                            isArchived: {
                                type: "boolean"
                            },
                            sourceServerIDs: {
                                type: "list",
                                member: {}
                            }
                        }
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    items: {
                        type: "list",
                        member: {
                            shape: "S5"
                        }
                    },
                    nextToken: {}
                }
            }
        },
        DisconnectFromService: {
            http: {
                requestUri: "/DisconnectFromService",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "sourceServerID" ],
                members: {
                    sourceServerID: {}
                }
            },
            output: {
                shape: "S5"
            }
        },
        FinalizeCutover: {
            http: {
                requestUri: "/FinalizeCutover",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "sourceServerID" ],
                members: {
                    sourceServerID: {}
                }
            },
            output: {
                shape: "S5"
            }
        },
        GetLaunchConfiguration: {
            http: {
                requestUri: "/GetLaunchConfiguration",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "sourceServerID" ],
                members: {
                    sourceServerID: {}
                }
            },
            output: {
                shape: "S2q"
            }
        },
        GetReplicationConfiguration: {
            http: {
                requestUri: "/GetReplicationConfiguration",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "sourceServerID" ],
                members: {
                    sourceServerID: {}
                }
            },
            output: {
                shape: "S2w"
            }
        },
        InitializeService: {
            http: {
                requestUri: "/InitializeService",
                responseCode: 204
            },
            input: {
                type: "structure",
                members: {}
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        ListTagsForResource: {
            http: {
                method: "GET",
                requestUri: "/tags/{resourceArn}",
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
                        shape: "S1c"
                    }
                }
            }
        },
        MarkAsArchived: {
            http: {
                requestUri: "/MarkAsArchived",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "sourceServerID" ],
                members: {
                    sourceServerID: {}
                }
            },
            output: {
                shape: "S5"
            }
        },
        RetryDataReplication: {
            http: {
                requestUri: "/RetryDataReplication",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "sourceServerID" ],
                members: {
                    sourceServerID: {}
                }
            },
            output: {
                shape: "S5"
            }
        },
        StartCutover: {
            http: {
                requestUri: "/StartCutover",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "sourceServerIDs" ],
                members: {
                    sourceServerIDs: {
                        type: "list",
                        member: {}
                    },
                    tags: {
                        shape: "S1c"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    job: {
                        shape: "S27"
                    }
                }
            }
        },
        StartTest: {
            http: {
                requestUri: "/StartTest",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "sourceServerIDs" ],
                members: {
                    sourceServerIDs: {
                        type: "list",
                        member: {}
                    },
                    tags: {
                        shape: "S1c"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    job: {
                        shape: "S27"
                    }
                }
            }
        },
        TagResource: {
            http: {
                requestUri: "/tags/{resourceArn}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "resourceArn", "tags" ],
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    tags: {
                        shape: "S1c"
                    }
                }
            },
            idempotent: true
        },
        TerminateTargetInstances: {
            http: {
                requestUri: "/TerminateTargetInstances",
                responseCode: 202
            },
            input: {
                type: "structure",
                required: [ "sourceServerIDs" ],
                members: {
                    sourceServerIDs: {
                        type: "list",
                        member: {}
                    },
                    tags: {
                        shape: "S1c"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    job: {
                        shape: "S27"
                    }
                }
            }
        },
        UntagResource: {
            http: {
                method: "DELETE",
                requestUri: "/tags/{resourceArn}",
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
                        member: {},
                        sensitive: true
                    }
                }
            },
            idempotent: true
        },
        UpdateLaunchConfiguration: {
            http: {
                requestUri: "/UpdateLaunchConfiguration",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "sourceServerID" ],
                members: {
                    copyPrivateIp: {
                        type: "boolean"
                    },
                    copyTags: {
                        type: "boolean"
                    },
                    launchDisposition: {},
                    licensing: {
                        shape: "S2s"
                    },
                    name: {},
                    sourceServerID: {},
                    targetInstanceTypeRightSizingMethod: {}
                }
            },
            output: {
                shape: "S2q"
            },
            idempotent: true
        },
        UpdateReplicationConfiguration: {
            http: {
                requestUri: "/UpdateReplicationConfiguration",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "sourceServerID" ],
                members: {
                    associateDefaultSecurityGroup: {
                        type: "boolean"
                    },
                    bandwidthThrottling: {
                        type: "long"
                    },
                    createPublicIP: {
                        type: "boolean"
                    },
                    dataPlaneRouting: {},
                    defaultLargeStagingDiskType: {},
                    ebsEncryption: {},
                    ebsEncryptionKeyArn: {},
                    name: {},
                    replicatedDisks: {
                        shape: "S2x"
                    },
                    replicationServerInstanceType: {},
                    replicationServersSecurityGroupsIDs: {
                        shape: "S1j"
                    },
                    sourceServerID: {},
                    stagingAreaSubnetId: {},
                    stagingAreaTags: {
                        shape: "S1c"
                    },
                    useDedicatedReplicationServer: {
                        type: "boolean"
                    }
                }
            },
            output: {
                shape: "S2w"
            },
            idempotent: true
        },
        UpdateReplicationConfigurationTemplate: {
            http: {
                requestUri: "/UpdateReplicationConfigurationTemplate",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "replicationConfigurationTemplateID" ],
                members: {
                    arn: {},
                    associateDefaultSecurityGroup: {
                        type: "boolean"
                    },
                    bandwidthThrottling: {
                        type: "long"
                    },
                    createPublicIP: {
                        type: "boolean"
                    },
                    dataPlaneRouting: {},
                    defaultLargeStagingDiskType: {},
                    ebsEncryption: {},
                    ebsEncryptionKeyArn: {},
                    replicationConfigurationTemplateID: {},
                    replicationServerInstanceType: {},
                    replicationServersSecurityGroupsIDs: {
                        shape: "S1j"
                    },
                    stagingAreaSubnetId: {},
                    stagingAreaTags: {
                        shape: "S1c"
                    },
                    useDedicatedReplicationServer: {
                        type: "boolean"
                    }
                }
            },
            output: {
                shape: "S1m"
            }
        }
    },
    shapes: {
        S5: {
            type: "structure",
            members: {
                arn: {},
                dataReplicationInfo: {
                    type: "structure",
                    members: {
                        dataReplicationError: {
                            type: "structure",
                            members: {
                                error: {},
                                rawError: {}
                            }
                        },
                        dataReplicationInitiation: {
                            type: "structure",
                            members: {
                                nextAttemptDateTime: {},
                                startDateTime: {},
                                steps: {
                                    type: "list",
                                    member: {
                                        type: "structure",
                                        members: {
                                            name: {},
                                            status: {}
                                        }
                                    }
                                }
                            }
                        },
                        dataReplicationState: {},
                        etaDateTime: {},
                        lagDuration: {},
                        replicatedDisks: {
                            type: "list",
                            member: {
                                type: "structure",
                                members: {
                                    backloggedStorageBytes: {
                                        type: "long"
                                    },
                                    deviceName: {},
                                    replicatedStorageBytes: {
                                        type: "long"
                                    },
                                    rescannedStorageBytes: {
                                        type: "long"
                                    },
                                    totalStorageBytes: {
                                        type: "long"
                                    }
                                }
                            }
                        }
                    }
                },
                isArchived: {
                    type: "boolean"
                },
                launchedInstance: {
                    type: "structure",
                    members: {
                        ec2InstanceID: {},
                        firstBoot: {},
                        jobID: {}
                    }
                },
                lifeCycle: {
                    type: "structure",
                    members: {
                        addedToServiceDateTime: {},
                        elapsedReplicationDuration: {},
                        firstByteDateTime: {},
                        lastCutover: {
                            type: "structure",
                            members: {
                                finalized: {
                                    type: "structure",
                                    members: {
                                        apiCallDateTime: {}
                                    }
                                },
                                initiated: {
                                    type: "structure",
                                    members: {
                                        apiCallDateTime: {},
                                        jobID: {}
                                    }
                                },
                                reverted: {
                                    type: "structure",
                                    members: {
                                        apiCallDateTime: {}
                                    }
                                }
                            }
                        },
                        lastSeenByServiceDateTime: {},
                        lastTest: {
                            type: "structure",
                            members: {
                                finalized: {
                                    type: "structure",
                                    members: {
                                        apiCallDateTime: {}
                                    }
                                },
                                initiated: {
                                    type: "structure",
                                    members: {
                                        apiCallDateTime: {},
                                        jobID: {}
                                    }
                                },
                                reverted: {
                                    type: "structure",
                                    members: {
                                        apiCallDateTime: {}
                                    }
                                }
                            }
                        },
                        state: {}
                    }
                },
                sourceProperties: {
                    type: "structure",
                    members: {
                        cpus: {
                            type: "list",
                            member: {
                                type: "structure",
                                members: {
                                    cores: {
                                        type: "long"
                                    },
                                    modelName: {}
                                }
                            }
                        },
                        disks: {
                            type: "list",
                            member: {
                                type: "structure",
                                members: {
                                    bytes: {
                                        type: "long"
                                    },
                                    deviceName: {}
                                }
                            }
                        },
                        identificationHints: {
                            type: "structure",
                            members: {
                                awsInstanceID: {},
                                fqdn: {},
                                hostname: {},
                                vmWareUuid: {}
                            }
                        },
                        lastUpdatedDateTime: {},
                        networkInterfaces: {
                            type: "list",
                            member: {
                                type: "structure",
                                members: {
                                    ips: {
                                        type: "list",
                                        member: {}
                                    },
                                    isPrimary: {
                                        type: "boolean"
                                    },
                                    macAddress: {}
                                }
                            }
                        },
                        os: {
                            type: "structure",
                            members: {
                                fullString: {}
                            }
                        },
                        ramBytes: {
                            type: "long"
                        },
                        recommendedInstanceType: {}
                    }
                },
                sourceServerID: {},
                tags: {
                    shape: "S1c"
                }
            }
        },
        S1c: {
            type: "map",
            key: {},
            value: {},
            sensitive: true
        },
        S1j: {
            type: "list",
            member: {}
        },
        S1m: {
            type: "structure",
            required: [ "replicationConfigurationTemplateID" ],
            members: {
                arn: {},
                associateDefaultSecurityGroup: {
                    type: "boolean"
                },
                bandwidthThrottling: {
                    type: "long"
                },
                createPublicIP: {
                    type: "boolean"
                },
                dataPlaneRouting: {},
                defaultLargeStagingDiskType: {},
                ebsEncryption: {},
                ebsEncryptionKeyArn: {},
                replicationConfigurationTemplateID: {},
                replicationServerInstanceType: {},
                replicationServersSecurityGroupsIDs: {
                    shape: "S1j"
                },
                stagingAreaSubnetId: {},
                stagingAreaTags: {
                    shape: "S1c"
                },
                tags: {
                    shape: "S1c"
                },
                useDedicatedReplicationServer: {
                    type: "boolean"
                }
            }
        },
        S27: {
            type: "structure",
            required: [ "jobID" ],
            members: {
                arn: {},
                creationDateTime: {},
                endDateTime: {},
                initiatedBy: {},
                jobID: {},
                participatingServers: {
                    type: "list",
                    member: {
                        type: "structure",
                        members: {
                            launchStatus: {},
                            sourceServerID: {}
                        }
                    }
                },
                status: {},
                tags: {
                    shape: "S1c"
                },
                type: {}
            }
        },
        S2q: {
            type: "structure",
            members: {
                copyPrivateIp: {
                    type: "boolean"
                },
                copyTags: {
                    type: "boolean"
                },
                ec2LaunchTemplateID: {},
                launchDisposition: {},
                licensing: {
                    shape: "S2s"
                },
                name: {},
                sourceServerID: {},
                targetInstanceTypeRightSizingMethod: {}
            }
        },
        S2s: {
            type: "structure",
            members: {
                osByol: {
                    type: "boolean"
                }
            }
        },
        S2w: {
            type: "structure",
            members: {
                associateDefaultSecurityGroup: {
                    type: "boolean"
                },
                bandwidthThrottling: {
                    type: "long"
                },
                createPublicIP: {
                    type: "boolean"
                },
                dataPlaneRouting: {},
                defaultLargeStagingDiskType: {},
                ebsEncryption: {},
                ebsEncryptionKeyArn: {},
                name: {},
                replicatedDisks: {
                    shape: "S2x"
                },
                replicationServerInstanceType: {},
                replicationServersSecurityGroupsIDs: {
                    shape: "S1j"
                },
                sourceServerID: {},
                stagingAreaSubnetId: {},
                stagingAreaTags: {
                    shape: "S1c"
                },
                useDedicatedReplicationServer: {
                    type: "boolean"
                }
            }
        },
        S2x: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    deviceName: {},
                    iops: {
                        type: "long"
                    },
                    isBootDisk: {
                        type: "boolean"
                    },
                    stagingDiskType: {}
                }
            }
        }
    },
    paginators: {
        DescribeJobLogItems: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "items"
        },
        DescribeJobs: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "items"
        },
        DescribeReplicationConfigurationTemplates: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "items"
        },
        DescribeSourceServers: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "items"
        }
    }
};

AWS.apiLoader.services["lookoutequipment"] = {};

AWS.LookoutEquipment = AWS.Service.defineService("lookoutequipment", [ "2020-12-15" ]);

AWS.apiLoader.services["lookoutequipment"]["2020-12-15"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-12-15",
        endpointPrefix: "lookoutequipment",
        jsonVersion: "1.0",
        protocol: "json",
        serviceAbbreviation: "LookoutEquipment",
        serviceFullName: "Amazon Lookout for Equipment",
        serviceId: "LookoutEquipment",
        signatureVersion: "v4",
        targetPrefix: "AWSLookoutEquipmentFrontendService",
        uid: "lookoutequipment-2020-12-15"
    },
    operations: {
        CreateDataset: {
            input: {
                type: "structure",
                required: [ "DatasetName", "DatasetSchema", "ClientToken" ],
                members: {
                    DatasetName: {},
                    DatasetSchema: {
                        shape: "S3"
                    },
                    ServerSideKmsKeyId: {},
                    ClientToken: {
                        idempotencyToken: true
                    },
                    Tags: {
                        shape: "S7"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    DatasetName: {},
                    DatasetArn: {},
                    Status: {}
                }
            }
        },
        CreateInferenceScheduler: {
            input: {
                type: "structure",
                required: [ "ModelName", "InferenceSchedulerName", "DataUploadFrequency", "DataInputConfiguration", "DataOutputConfiguration", "RoleArn", "ClientToken" ],
                members: {
                    ModelName: {},
                    InferenceSchedulerName: {},
                    DataDelayOffsetInMinutes: {
                        type: "long"
                    },
                    DataUploadFrequency: {},
                    DataInputConfiguration: {
                        shape: "Sj"
                    },
                    DataOutputConfiguration: {
                        shape: "Sr"
                    },
                    RoleArn: {},
                    ServerSideKmsKeyId: {},
                    ClientToken: {
                        idempotencyToken: true
                    },
                    Tags: {
                        shape: "S7"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    InferenceSchedulerArn: {},
                    InferenceSchedulerName: {},
                    Status: {}
                }
            }
        },
        CreateModel: {
            input: {
                type: "structure",
                required: [ "ModelName", "DatasetName", "ClientToken" ],
                members: {
                    ModelName: {},
                    DatasetName: {},
                    DatasetSchema: {
                        shape: "S3"
                    },
                    LabelsInputConfiguration: {
                        shape: "Sz"
                    },
                    ClientToken: {
                        idempotencyToken: true
                    },
                    TrainingDataStartTime: {
                        type: "timestamp"
                    },
                    TrainingDataEndTime: {
                        type: "timestamp"
                    },
                    EvaluationDataStartTime: {
                        type: "timestamp"
                    },
                    EvaluationDataEndTime: {
                        type: "timestamp"
                    },
                    RoleArn: {},
                    DataPreProcessingConfiguration: {
                        shape: "S12"
                    },
                    ServerSideKmsKeyId: {},
                    Tags: {
                        shape: "S7"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    ModelArn: {},
                    Status: {}
                }
            }
        },
        DeleteDataset: {
            input: {
                type: "structure",
                required: [ "DatasetName" ],
                members: {
                    DatasetName: {}
                }
            }
        },
        DeleteInferenceScheduler: {
            input: {
                type: "structure",
                required: [ "InferenceSchedulerName" ],
                members: {
                    InferenceSchedulerName: {}
                }
            }
        },
        DeleteModel: {
            input: {
                type: "structure",
                required: [ "ModelName" ],
                members: {
                    ModelName: {}
                }
            }
        },
        DescribeDataIngestionJob: {
            input: {
                type: "structure",
                required: [ "JobId" ],
                members: {
                    JobId: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    JobId: {},
                    DatasetArn: {},
                    IngestionInputConfiguration: {
                        shape: "S1e"
                    },
                    RoleArn: {},
                    CreatedAt: {
                        type: "timestamp"
                    },
                    Status: {},
                    FailedReason: {}
                }
            }
        },
        DescribeDataset: {
            input: {
                type: "structure",
                required: [ "DatasetName" ],
                members: {
                    DatasetName: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    DatasetName: {},
                    DatasetArn: {},
                    CreatedAt: {
                        type: "timestamp"
                    },
                    LastUpdatedAt: {
                        type: "timestamp"
                    },
                    Status: {},
                    Schema: {
                        jsonvalue: true
                    },
                    ServerSideKmsKeyId: {},
                    IngestionInputConfiguration: {
                        shape: "S1e"
                    }
                }
            }
        },
        DescribeInferenceScheduler: {
            input: {
                type: "structure",
                required: [ "InferenceSchedulerName" ],
                members: {
                    InferenceSchedulerName: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    ModelArn: {},
                    ModelName: {},
                    InferenceSchedulerName: {},
                    InferenceSchedulerArn: {},
                    Status: {},
                    DataDelayOffsetInMinutes: {
                        type: "long"
                    },
                    DataUploadFrequency: {},
                    CreatedAt: {
                        type: "timestamp"
                    },
                    UpdatedAt: {
                        type: "timestamp"
                    },
                    DataInputConfiguration: {
                        shape: "Sj"
                    },
                    DataOutputConfiguration: {
                        shape: "Sr"
                    },
                    RoleArn: {},
                    ServerSideKmsKeyId: {}
                }
            }
        },
        DescribeModel: {
            input: {
                type: "structure",
                required: [ "ModelName" ],
                members: {
                    ModelName: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    ModelName: {},
                    ModelArn: {},
                    DatasetName: {},
                    DatasetArn: {},
                    Schema: {
                        jsonvalue: true
                    },
                    LabelsInputConfiguration: {
                        shape: "Sz"
                    },
                    TrainingDataStartTime: {
                        type: "timestamp"
                    },
                    TrainingDataEndTime: {
                        type: "timestamp"
                    },
                    EvaluationDataStartTime: {
                        type: "timestamp"
                    },
                    EvaluationDataEndTime: {
                        type: "timestamp"
                    },
                    RoleArn: {},
                    DataPreProcessingConfiguration: {
                        shape: "S12"
                    },
                    Status: {},
                    TrainingExecutionStartTime: {
                        type: "timestamp"
                    },
                    TrainingExecutionEndTime: {
                        type: "timestamp"
                    },
                    FailedReason: {},
                    ModelMetrics: {
                        jsonvalue: true
                    },
                    LastUpdatedTime: {
                        type: "timestamp"
                    },
                    CreatedAt: {
                        type: "timestamp"
                    },
                    ServerSideKmsKeyId: {}
                }
            }
        },
        ListDataIngestionJobs: {
            input: {
                type: "structure",
                members: {
                    DatasetName: {},
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    },
                    Status: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    NextToken: {},
                    DataIngestionJobSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                JobId: {},
                                DatasetName: {},
                                DatasetArn: {},
                                IngestionInputConfiguration: {
                                    shape: "S1e"
                                },
                                Status: {}
                            }
                        }
                    }
                }
            }
        },
        ListDatasets: {
            input: {
                type: "structure",
                members: {
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    },
                    DatasetNameBeginsWith: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    NextToken: {},
                    DatasetSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                DatasetName: {},
                                DatasetArn: {},
                                Status: {},
                                CreatedAt: {
                                    type: "timestamp"
                                }
                            }
                        }
                    }
                }
            }
        },
        ListInferenceExecutions: {
            input: {
                type: "structure",
                required: [ "InferenceSchedulerName" ],
                members: {
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    },
                    InferenceSchedulerName: {},
                    DataStartTimeAfter: {
                        type: "timestamp"
                    },
                    DataEndTimeBefore: {
                        type: "timestamp"
                    },
                    Status: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    NextToken: {},
                    InferenceExecutionSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                ModelName: {},
                                ModelArn: {},
                                InferenceSchedulerName: {},
                                InferenceSchedulerArn: {},
                                ScheduledStartTime: {
                                    type: "timestamp"
                                },
                                DataStartTime: {
                                    type: "timestamp"
                                },
                                DataEndTime: {
                                    type: "timestamp"
                                },
                                DataInputConfiguration: {
                                    shape: "Sj"
                                },
                                DataOutputConfiguration: {
                                    shape: "Sr"
                                },
                                CustomerResultObject: {
                                    type: "structure",
                                    required: [ "Bucket", "Key" ],
                                    members: {
                                        Bucket: {},
                                        Key: {}
                                    }
                                },
                                Status: {},
                                FailedReason: {}
                            }
                        }
                    }
                }
            }
        },
        ListInferenceSchedulers: {
            input: {
                type: "structure",
                members: {
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    },
                    InferenceSchedulerNameBeginsWith: {},
                    ModelName: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    NextToken: {},
                    InferenceSchedulerSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                ModelName: {},
                                ModelArn: {},
                                InferenceSchedulerName: {},
                                InferenceSchedulerArn: {},
                                Status: {},
                                DataDelayOffsetInMinutes: {
                                    type: "long"
                                },
                                DataUploadFrequency: {}
                            }
                        }
                    }
                }
            }
        },
        ListModels: {
            input: {
                type: "structure",
                members: {
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    },
                    Status: {},
                    ModelNameBeginsWith: {},
                    DatasetNameBeginsWith: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    NextToken: {},
                    ModelSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                ModelName: {},
                                ModelArn: {},
                                DatasetName: {},
                                DatasetArn: {},
                                Status: {},
                                CreatedAt: {
                                    type: "timestamp"
                                }
                            }
                        }
                    }
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
                    Tags: {
                        shape: "S7"
                    }
                }
            }
        },
        StartDataIngestionJob: {
            input: {
                type: "structure",
                required: [ "DatasetName", "IngestionInputConfiguration", "RoleArn", "ClientToken" ],
                members: {
                    DatasetName: {},
                    IngestionInputConfiguration: {
                        shape: "S1e"
                    },
                    RoleArn: {},
                    ClientToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    JobId: {},
                    Status: {}
                }
            }
        },
        StartInferenceScheduler: {
            input: {
                type: "structure",
                required: [ "InferenceSchedulerName" ],
                members: {
                    InferenceSchedulerName: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    ModelArn: {},
                    ModelName: {},
                    InferenceSchedulerName: {},
                    InferenceSchedulerArn: {},
                    Status: {}
                }
            }
        },
        StopInferenceScheduler: {
            input: {
                type: "structure",
                required: [ "InferenceSchedulerName" ],
                members: {
                    InferenceSchedulerName: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    ModelArn: {},
                    ModelName: {},
                    InferenceSchedulerName: {},
                    InferenceSchedulerArn: {},
                    Status: {}
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
                        shape: "S7"
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
        UpdateInferenceScheduler: {
            input: {
                type: "structure",
                required: [ "InferenceSchedulerName" ],
                members: {
                    InferenceSchedulerName: {},
                    DataDelayOffsetInMinutes: {
                        type: "long"
                    },
                    DataUploadFrequency: {},
                    DataInputConfiguration: {
                        shape: "Sj"
                    },
                    DataOutputConfiguration: {
                        shape: "Sr"
                    },
                    RoleArn: {}
                }
            }
        }
    },
    shapes: {
        S3: {
            type: "structure",
            members: {
                InlineDataSchema: {
                    jsonvalue: true
                }
            }
        },
        S7: {
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
        Sj: {
            type: "structure",
            members: {
                S3InputConfiguration: {
                    type: "structure",
                    required: [ "Bucket" ],
                    members: {
                        Bucket: {},
                        Prefix: {}
                    }
                },
                InputTimeZoneOffset: {},
                InferenceInputNameConfiguration: {
                    type: "structure",
                    members: {
                        TimestampFormat: {},
                        ComponentTimestampDelimiter: {}
                    }
                }
            }
        },
        Sr: {
            type: "structure",
            required: [ "S3OutputConfiguration" ],
            members: {
                S3OutputConfiguration: {
                    type: "structure",
                    required: [ "Bucket" ],
                    members: {
                        Bucket: {},
                        Prefix: {}
                    }
                },
                KmsKeyId: {}
            }
        },
        Sz: {
            type: "structure",
            required: [ "S3InputConfiguration" ],
            members: {
                S3InputConfiguration: {
                    type: "structure",
                    required: [ "Bucket" ],
                    members: {
                        Bucket: {},
                        Prefix: {}
                    }
                }
            }
        },
        S12: {
            type: "structure",
            members: {
                TargetSamplingRate: {}
            }
        },
        S1e: {
            type: "structure",
            required: [ "S3InputConfiguration" ],
            members: {
                S3InputConfiguration: {
                    type: "structure",
                    required: [ "Bucket" ],
                    members: {
                        Bucket: {},
                        Prefix: {}
                    }
                }
            }
        }
    },
    paginators: {
        ListDataIngestionJobs: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListDatasets: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListInferenceExecutions: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListInferenceSchedulers: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListModels: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        }
    }
};

AWS.apiLoader.services["nimble"] = {};

AWS.Nimble = AWS.Service.defineService("nimble", [ "2020-08-01" ]);

AWS.apiLoader.services["nimble"]["2020-08-01"] = {
    metadata: {
        apiVersion: "2020-08-01",
        endpointPrefix: "nimble",
        signingName: "nimble",
        serviceFullName: "AmazonNimbleStudio",
        serviceId: "nimble",
        protocol: "rest-json",
        jsonVersion: "1.1",
        uid: "nimble-2020-08-01",
        signatureVersion: "v4"
    },
    operations: {
        AcceptEulas: {
            http: {
                requestUri: "/2020-08-01/studios/{studioId}/eula-acceptances",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    eulaIds: {
                        shape: "S3",
                        locationName: "eulaIds"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId" ]
            },
            output: {
                type: "structure",
                members: {
                    eulaAcceptances: {
                        shape: "S6",
                        locationName: "eulaAcceptances"
                    }
                }
            }
        },
        CreateLaunchProfile: {
            http: {
                requestUri: "/2020-08-01/studios/{studioId}/launch-profiles",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    description: {
                        locationName: "description"
                    },
                    ec2SubnetIds: {
                        shape: "Sd",
                        locationName: "ec2SubnetIds"
                    },
                    launchProfileProtocolVersions: {
                        shape: "Sf",
                        locationName: "launchProfileProtocolVersions"
                    },
                    name: {
                        locationName: "name"
                    },
                    streamConfiguration: {
                        shape: "Si",
                        locationName: "streamConfiguration"
                    },
                    studioComponentIds: {
                        shape: "Sp",
                        locationName: "studioComponentIds"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    },
                    tags: {
                        shape: "Sq",
                        locationName: "tags"
                    }
                },
                required: [ "ec2SubnetIds", "studioComponentIds", "studioId", "launchProfileProtocolVersions", "name", "streamConfiguration" ]
            },
            output: {
                type: "structure",
                members: {
                    launchProfile: {
                        shape: "Ss",
                        locationName: "launchProfile"
                    }
                }
            }
        },
        CreateStreamingImage: {
            http: {
                requestUri: "/2020-08-01/studios/{studioId}/streaming-images",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    description: {
                        locationName: "description"
                    },
                    ec2ImageId: {
                        locationName: "ec2ImageId"
                    },
                    name: {
                        locationName: "name"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    },
                    tags: {
                        shape: "Sq",
                        locationName: "tags"
                    }
                },
                required: [ "studioId", "name", "ec2ImageId" ]
            },
            output: {
                type: "structure",
                members: {
                    streamingImage: {
                        shape: "S12",
                        locationName: "streamingImage"
                    }
                }
            }
        },
        CreateStreamingSession: {
            http: {
                requestUri: "/2020-08-01/studios/{studioId}/streaming-sessions",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    ec2InstanceType: {
                        locationName: "ec2InstanceType"
                    },
                    launchProfileId: {
                        locationName: "launchProfileId"
                    },
                    streamingImageId: {
                        locationName: "streamingImageId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    },
                    tags: {
                        shape: "Sq",
                        locationName: "tags"
                    }
                },
                required: [ "studioId" ]
            },
            output: {
                type: "structure",
                members: {
                    session: {
                        shape: "S1c",
                        locationName: "session"
                    }
                }
            }
        },
        CreateStreamingSessionStream: {
            http: {
                requestUri: "/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/streams",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    expirationInSeconds: {
                        locationName: "expirationInSeconds",
                        type: "integer"
                    },
                    sessionId: {
                        location: "uri",
                        locationName: "sessionId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "sessionId" ]
            },
            output: {
                type: "structure",
                members: {
                    stream: {
                        shape: "S1j",
                        locationName: "stream"
                    }
                }
            }
        },
        CreateStudio: {
            http: {
                requestUri: "/2020-08-01/studios",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    adminRoleArn: {
                        locationName: "adminRoleArn"
                    },
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    displayName: {
                        locationName: "displayName"
                    },
                    studioEncryptionConfiguration: {
                        shape: "S1o",
                        locationName: "studioEncryptionConfiguration"
                    },
                    studioName: {
                        locationName: "studioName"
                    },
                    tags: {
                        shape: "Sq",
                        locationName: "tags"
                    },
                    userRoleArn: {
                        locationName: "userRoleArn"
                    }
                },
                required: [ "displayName", "studioName", "userRoleArn", "adminRoleArn" ]
            },
            output: {
                type: "structure",
                members: {
                    studio: {
                        shape: "S1t",
                        locationName: "studio"
                    }
                }
            }
        },
        CreateStudioComponent: {
            http: {
                requestUri: "/2020-08-01/studios/{studioId}/studio-components",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    configuration: {
                        shape: "S1y",
                        locationName: "configuration"
                    },
                    description: {
                        locationName: "description"
                    },
                    ec2SecurityGroupIds: {
                        shape: "S2c",
                        locationName: "ec2SecurityGroupIds"
                    },
                    initializationScripts: {
                        shape: "S2e",
                        locationName: "initializationScripts"
                    },
                    name: {
                        locationName: "name"
                    },
                    scriptParameters: {
                        shape: "S2k",
                        locationName: "scriptParameters"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    },
                    subtype: {
                        locationName: "subtype"
                    },
                    tags: {
                        shape: "Sq",
                        locationName: "tags"
                    },
                    type: {
                        locationName: "type"
                    }
                },
                required: [ "studioId", "name", "type" ]
            },
            output: {
                type: "structure",
                members: {
                    studioComponent: {
                        shape: "S2r",
                        locationName: "studioComponent"
                    }
                }
            }
        },
        DeleteLaunchProfile: {
            http: {
                method: "DELETE",
                requestUri: "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    launchProfileId: {
                        location: "uri",
                        locationName: "launchProfileId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "launchProfileId" ]
            },
            output: {
                type: "structure",
                members: {
                    launchProfile: {
                        shape: "Ss",
                        locationName: "launchProfile"
                    }
                }
            }
        },
        DeleteLaunchProfileMember: {
            http: {
                method: "DELETE",
                requestUri: "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    launchProfileId: {
                        location: "uri",
                        locationName: "launchProfileId"
                    },
                    principalId: {
                        location: "uri",
                        locationName: "principalId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "principalId", "launchProfileId" ]
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DeleteStreamingImage: {
            http: {
                method: "DELETE",
                requestUri: "/2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    streamingImageId: {
                        location: "uri",
                        locationName: "streamingImageId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "streamingImageId" ]
            },
            output: {
                type: "structure",
                members: {
                    streamingImage: {
                        shape: "S12",
                        locationName: "streamingImage"
                    }
                }
            }
        },
        DeleteStreamingSession: {
            http: {
                method: "DELETE",
                requestUri: "/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    sessionId: {
                        location: "uri",
                        locationName: "sessionId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "sessionId" ]
            },
            output: {
                type: "structure",
                members: {
                    session: {
                        shape: "S1c",
                        locationName: "session"
                    }
                }
            }
        },
        DeleteStudio: {
            http: {
                method: "DELETE",
                requestUri: "/2020-08-01/studios/{studioId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId" ]
            },
            output: {
                type: "structure",
                members: {
                    studio: {
                        shape: "S1t",
                        locationName: "studio"
                    }
                }
            }
        },
        DeleteStudioComponent: {
            http: {
                method: "DELETE",
                requestUri: "/2020-08-01/studios/{studioId}/studio-components/{studioComponentId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    studioComponentId: {
                        location: "uri",
                        locationName: "studioComponentId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "studioComponentId" ]
            },
            output: {
                type: "structure",
                members: {
                    studioComponent: {
                        shape: "S2r",
                        locationName: "studioComponent"
                    }
                }
            }
        },
        DeleteStudioMember: {
            http: {
                method: "DELETE",
                requestUri: "/2020-08-01/studios/{studioId}/membership/{principalId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    principalId: {
                        location: "uri",
                        locationName: "principalId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "principalId" ]
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        GetEula: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/eulas/{eulaId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    eulaId: {
                        location: "uri",
                        locationName: "eulaId"
                    }
                },
                required: [ "eulaId" ]
            },
            output: {
                type: "structure",
                members: {
                    eula: {
                        shape: "S3b",
                        locationName: "eula"
                    }
                }
            }
        },
        GetLaunchProfile: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    launchProfileId: {
                        location: "uri",
                        locationName: "launchProfileId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "launchProfileId" ]
            },
            output: {
                type: "structure",
                members: {
                    launchProfile: {
                        shape: "Ss",
                        locationName: "launchProfile"
                    }
                }
            }
        },
        GetLaunchProfileDetails: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/details",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    launchProfileId: {
                        location: "uri",
                        locationName: "launchProfileId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "launchProfileId" ]
            },
            output: {
                type: "structure",
                members: {
                    launchProfile: {
                        shape: "Ss",
                        locationName: "launchProfile"
                    },
                    streamingImages: {
                        shape: "S3h",
                        locationName: "streamingImages"
                    },
                    studioComponentSummaries: {
                        locationName: "studioComponentSummaries",
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                createdAt: {
                                    shape: "S8",
                                    locationName: "createdAt"
                                },
                                createdBy: {
                                    locationName: "createdBy"
                                },
                                description: {
                                    locationName: "description"
                                },
                                name: {
                                    locationName: "name"
                                },
                                studioComponentId: {
                                    locationName: "studioComponentId"
                                },
                                subtype: {
                                    locationName: "subtype"
                                },
                                type: {
                                    locationName: "type"
                                },
                                updatedAt: {
                                    shape: "S8",
                                    locationName: "updatedAt"
                                },
                                updatedBy: {
                                    locationName: "updatedBy"
                                }
                            }
                        }
                    }
                }
            }
        },
        GetLaunchProfileInitialization: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/init",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    launchProfileId: {
                        location: "uri",
                        locationName: "launchProfileId"
                    },
                    launchProfileProtocolVersions: {
                        shape: "S3l",
                        location: "querystring",
                        locationName: "launchProfileProtocolVersions"
                    },
                    launchPurpose: {
                        location: "querystring",
                        locationName: "launchPurpose"
                    },
                    platform: {
                        location: "querystring",
                        locationName: "platform"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "launchProfileProtocolVersions", "launchPurpose", "launchProfileId", "platform" ]
            },
            output: {
                type: "structure",
                members: {
                    launchProfileInitialization: {
                        locationName: "launchProfileInitialization",
                        type: "structure",
                        members: {
                            activeDirectory: {
                                locationName: "activeDirectory",
                                type: "structure",
                                members: {
                                    computerAttributes: {
                                        shape: "S20",
                                        locationName: "computerAttributes"
                                    },
                                    directoryId: {
                                        locationName: "directoryId"
                                    },
                                    directoryName: {
                                        locationName: "directoryName"
                                    },
                                    dnsIpAddresses: {
                                        locationName: "dnsIpAddresses",
                                        type: "list",
                                        member: {}
                                    },
                                    organizationalUnitDistinguishedName: {
                                        locationName: "organizationalUnitDistinguishedName"
                                    },
                                    studioComponentId: {
                                        locationName: "studioComponentId"
                                    },
                                    studioComponentName: {
                                        locationName: "studioComponentName"
                                    }
                                }
                            },
                            ec2SecurityGroupIds: {
                                locationName: "ec2SecurityGroupIds",
                                type: "list",
                                member: {}
                            },
                            launchProfileId: {
                                locationName: "launchProfileId"
                            },
                            launchProfileProtocolVersion: {
                                locationName: "launchProfileProtocolVersion"
                            },
                            launchPurpose: {
                                locationName: "launchPurpose"
                            },
                            name: {
                                locationName: "name"
                            },
                            platform: {
                                locationName: "platform"
                            },
                            systemInitializationScripts: {
                                shape: "S3t",
                                locationName: "systemInitializationScripts"
                            },
                            userInitializationScripts: {
                                shape: "S3t",
                                locationName: "userInitializationScripts"
                            }
                        }
                    }
                }
            }
        },
        GetLaunchProfileMember: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    launchProfileId: {
                        location: "uri",
                        locationName: "launchProfileId"
                    },
                    principalId: {
                        location: "uri",
                        locationName: "principalId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "principalId", "launchProfileId" ]
            },
            output: {
                type: "structure",
                members: {
                    member: {
                        shape: "S3x",
                        locationName: "member"
                    }
                }
            }
        },
        GetStreamingImage: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    streamingImageId: {
                        location: "uri",
                        locationName: "streamingImageId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "streamingImageId" ]
            },
            output: {
                type: "structure",
                members: {
                    streamingImage: {
                        shape: "S12",
                        locationName: "streamingImage"
                    }
                }
            }
        },
        GetStreamingSession: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    sessionId: {
                        location: "uri",
                        locationName: "sessionId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "sessionId" ]
            },
            output: {
                type: "structure",
                members: {
                    session: {
                        shape: "S1c",
                        locationName: "session"
                    }
                }
            }
        },
        GetStreamingSessionStream: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/streams/{streamId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    sessionId: {
                        location: "uri",
                        locationName: "sessionId"
                    },
                    streamId: {
                        location: "uri",
                        locationName: "streamId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "streamId", "sessionId" ]
            },
            output: {
                type: "structure",
                members: {
                    stream: {
                        shape: "S1j",
                        locationName: "stream"
                    }
                }
            }
        },
        GetStudio: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId" ]
            },
            output: {
                type: "structure",
                members: {
                    studio: {
                        shape: "S1t",
                        locationName: "studio"
                    }
                }
            }
        },
        GetStudioComponent: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/studio-components/{studioComponentId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    studioComponentId: {
                        location: "uri",
                        locationName: "studioComponentId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "studioComponentId" ]
            },
            output: {
                type: "structure",
                members: {
                    studioComponent: {
                        shape: "S2r",
                        locationName: "studioComponent"
                    }
                }
            }
        },
        GetStudioMember: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/membership/{principalId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    principalId: {
                        location: "uri",
                        locationName: "principalId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "principalId" ]
            },
            output: {
                type: "structure",
                members: {
                    member: {
                        shape: "S4b",
                        locationName: "member"
                    }
                }
            }
        },
        ListEulaAcceptances: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/eula-acceptances",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    eulaIds: {
                        shape: "S3l",
                        location: "querystring",
                        locationName: "eulaIds"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId" ]
            },
            output: {
                type: "structure",
                members: {
                    eulaAcceptances: {
                        shape: "S6",
                        locationName: "eulaAcceptances"
                    },
                    nextToken: {
                        locationName: "nextToken"
                    }
                }
            }
        },
        ListEulas: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/eulas",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    eulaIds: {
                        shape: "S3l",
                        location: "querystring",
                        locationName: "eulaIds"
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
                    eulas: {
                        locationName: "eulas",
                        type: "list",
                        member: {
                            shape: "S3b"
                        }
                    },
                    nextToken: {
                        locationName: "nextToken"
                    }
                }
            }
        },
        ListLaunchProfileMembers: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    launchProfileId: {
                        location: "uri",
                        locationName: "launchProfileId"
                    },
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "launchProfileId" ]
            },
            output: {
                type: "structure",
                members: {
                    members: {
                        locationName: "members",
                        type: "list",
                        member: {
                            shape: "S3x"
                        }
                    },
                    nextToken: {
                        locationName: "nextToken"
                    }
                }
            }
        },
        ListLaunchProfiles: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/launch-profiles",
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
                    },
                    principalId: {
                        location: "querystring",
                        locationName: "principalId"
                    },
                    states: {
                        shape: "S3l",
                        location: "querystring",
                        locationName: "states"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId" ]
            },
            output: {
                type: "structure",
                members: {
                    launchProfiles: {
                        locationName: "launchProfiles",
                        type: "list",
                        member: {
                            shape: "Ss"
                        }
                    },
                    nextToken: {
                        locationName: "nextToken"
                    }
                }
            }
        },
        ListStreamingImages: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/streaming-images",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    owner: {
                        location: "querystring",
                        locationName: "owner"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId" ]
            },
            output: {
                type: "structure",
                members: {
                    nextToken: {
                        locationName: "nextToken"
                    },
                    streamingImages: {
                        shape: "S3h",
                        locationName: "streamingImages"
                    }
                }
            }
        },
        ListStreamingSessions: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/streaming-sessions",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    createdBy: {
                        location: "querystring",
                        locationName: "createdBy"
                    },
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    sessionIds: {
                        location: "querystring",
                        locationName: "sessionIds"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId" ]
            },
            output: {
                type: "structure",
                members: {
                    nextToken: {
                        locationName: "nextToken"
                    },
                    sessions: {
                        locationName: "sessions",
                        type: "list",
                        member: {
                            shape: "S1c"
                        }
                    }
                }
            }
        },
        ListStudioComponents: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/studio-components",
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
                    },
                    states: {
                        shape: "S3l",
                        location: "querystring",
                        locationName: "states"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    },
                    types: {
                        shape: "S3l",
                        location: "querystring",
                        locationName: "types"
                    }
                },
                required: [ "studioId" ]
            },
            output: {
                type: "structure",
                members: {
                    nextToken: {
                        locationName: "nextToken"
                    },
                    studioComponents: {
                        locationName: "studioComponents",
                        type: "list",
                        member: {
                            shape: "S2r"
                        }
                    }
                }
            }
        },
        ListStudioMembers: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios/{studioId}/membership",
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
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId" ]
            },
            output: {
                type: "structure",
                members: {
                    members: {
                        locationName: "members",
                        type: "list",
                        member: {
                            shape: "S4b"
                        }
                    },
                    nextToken: {
                        locationName: "nextToken"
                    }
                }
            }
        },
        ListStudios: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/studios",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    nextToken: {
                        locationName: "nextToken"
                    },
                    studios: {
                        locationName: "studios",
                        type: "list",
                        member: {
                            shape: "S1t"
                        }
                    }
                }
            }
        },
        ListTagsForResource: {
            http: {
                method: "GET",
                requestUri: "/2020-08-01/tags/{resourceArn}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    }
                },
                required: [ "resourceArn" ]
            },
            output: {
                type: "structure",
                members: {
                    tags: {
                        shape: "Sq",
                        locationName: "tags"
                    }
                }
            }
        },
        PutLaunchProfileMembers: {
            http: {
                requestUri: "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    identityStoreId: {
                        locationName: "identityStoreId"
                    },
                    launchProfileId: {
                        location: "uri",
                        locationName: "launchProfileId"
                    },
                    members: {
                        locationName: "members",
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                persona: {
                                    locationName: "persona"
                                },
                                principalId: {
                                    locationName: "principalId"
                                }
                            },
                            required: [ "persona", "principalId" ]
                        }
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "members", "launchProfileId", "identityStoreId" ]
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        PutStudioMembers: {
            http: {
                requestUri: "/2020-08-01/studios/{studioId}/membership",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    identityStoreId: {
                        locationName: "identityStoreId"
                    },
                    members: {
                        locationName: "members",
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                persona: {
                                    locationName: "persona"
                                },
                                principalId: {
                                    locationName: "principalId"
                                }
                            },
                            required: [ "persona", "principalId" ]
                        }
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "members", "identityStoreId" ]
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        StartStudioSSOConfigurationRepair: {
            http: {
                method: "PUT",
                requestUri: "/2020-08-01/studios/{studioId}/sso-configuration",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId" ]
            },
            output: {
                type: "structure",
                members: {
                    studio: {
                        shape: "S1t",
                        locationName: "studio"
                    }
                }
            }
        },
        TagResource: {
            http: {
                requestUri: "/2020-08-01/tags/{resourceArn}",
                responseCode: 204
            },
            input: {
                type: "structure",
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    tags: {
                        shape: "Sq",
                        locationName: "tags"
                    }
                },
                required: [ "resourceArn" ]
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UntagResource: {
            http: {
                method: "DELETE",
                requestUri: "/2020-08-01/tags/{resourceArn}",
                responseCode: 204
            },
            input: {
                type: "structure",
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    tagKeys: {
                        shape: "S3l",
                        location: "querystring",
                        locationName: "tagKeys"
                    }
                },
                required: [ "tagKeys", "resourceArn" ]
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UpdateLaunchProfile: {
            http: {
                method: "PATCH",
                requestUri: "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    description: {
                        locationName: "description"
                    },
                    launchProfileId: {
                        location: "uri",
                        locationName: "launchProfileId"
                    },
                    launchProfileProtocolVersions: {
                        shape: "Sf",
                        locationName: "launchProfileProtocolVersions"
                    },
                    name: {
                        locationName: "name"
                    },
                    streamConfiguration: {
                        shape: "Si",
                        locationName: "streamConfiguration"
                    },
                    studioComponentIds: {
                        shape: "Sp",
                        locationName: "studioComponentIds"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "launchProfileId" ]
            },
            output: {
                type: "structure",
                members: {
                    launchProfile: {
                        shape: "Ss",
                        locationName: "launchProfile"
                    }
                }
            }
        },
        UpdateLaunchProfileMember: {
            http: {
                method: "PATCH",
                requestUri: "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    launchProfileId: {
                        location: "uri",
                        locationName: "launchProfileId"
                    },
                    persona: {
                        locationName: "persona"
                    },
                    principalId: {
                        location: "uri",
                        locationName: "principalId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "persona", "principalId", "launchProfileId" ]
            },
            output: {
                type: "structure",
                members: {
                    member: {
                        shape: "S3x",
                        locationName: "member"
                    }
                }
            }
        },
        UpdateStreamingImage: {
            http: {
                method: "PATCH",
                requestUri: "/2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    description: {
                        locationName: "description"
                    },
                    name: {
                        locationName: "name"
                    },
                    streamingImageId: {
                        location: "uri",
                        locationName: "streamingImageId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    }
                },
                required: [ "studioId", "streamingImageId" ]
            },
            output: {
                type: "structure",
                members: {
                    streamingImage: {
                        shape: "S12",
                        locationName: "streamingImage"
                    }
                }
            }
        },
        UpdateStudio: {
            http: {
                method: "PATCH",
                requestUri: "/2020-08-01/studios/{studioId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    adminRoleArn: {
                        locationName: "adminRoleArn"
                    },
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    displayName: {
                        locationName: "displayName"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    },
                    userRoleArn: {
                        locationName: "userRoleArn"
                    }
                },
                required: [ "studioId" ]
            },
            output: {
                type: "structure",
                members: {
                    studio: {
                        shape: "S1t",
                        locationName: "studio"
                    }
                }
            }
        },
        UpdateStudioComponent: {
            http: {
                method: "PATCH",
                requestUri: "/2020-08-01/studios/{studioId}/studio-components/{studioComponentId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    clientToken: {
                        location: "header",
                        locationName: "X-Amz-Client-Token",
                        idempotencyToken: true
                    },
                    configuration: {
                        shape: "S1y",
                        locationName: "configuration"
                    },
                    description: {
                        locationName: "description"
                    },
                    ec2SecurityGroupIds: {
                        shape: "S2c",
                        locationName: "ec2SecurityGroupIds"
                    },
                    initializationScripts: {
                        shape: "S2e",
                        locationName: "initializationScripts"
                    },
                    name: {
                        locationName: "name"
                    },
                    scriptParameters: {
                        shape: "S2k",
                        locationName: "scriptParameters"
                    },
                    studioComponentId: {
                        location: "uri",
                        locationName: "studioComponentId"
                    },
                    studioId: {
                        location: "uri",
                        locationName: "studioId"
                    },
                    subtype: {
                        locationName: "subtype"
                    },
                    type: {
                        locationName: "type"
                    }
                },
                required: [ "studioId", "studioComponentId" ]
            },
            output: {
                type: "structure",
                members: {
                    studioComponent: {
                        shape: "S2r",
                        locationName: "studioComponent"
                    }
                }
            }
        }
    },
    shapes: {
        S3: {
            type: "list",
            member: {}
        },
        S6: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    acceptedAt: {
                        shape: "S8",
                        locationName: "acceptedAt"
                    },
                    acceptedBy: {
                        locationName: "acceptedBy"
                    },
                    accepteeId: {
                        locationName: "accepteeId"
                    },
                    eulaAcceptanceId: {
                        locationName: "eulaAcceptanceId"
                    },
                    eulaId: {
                        locationName: "eulaId"
                    }
                }
            }
        },
        S8: {
            type: "timestamp",
            timestampFormat: "iso8601"
        },
        Sd: {
            type: "list",
            member: {}
        },
        Sf: {
            type: "list",
            member: {}
        },
        Si: {
            type: "structure",
            members: {
                clipboardMode: {
                    locationName: "clipboardMode"
                },
                ec2InstanceTypes: {
                    shape: "Sk",
                    locationName: "ec2InstanceTypes"
                },
                maxSessionLengthInMinutes: {
                    locationName: "maxSessionLengthInMinutes",
                    type: "integer"
                },
                streamingImageIds: {
                    shape: "Sn",
                    locationName: "streamingImageIds"
                }
            },
            required: [ "clipboardMode", "streamingImageIds", "ec2InstanceTypes" ]
        },
        Sk: {
            type: "list",
            member: {}
        },
        Sn: {
            type: "list",
            member: {}
        },
        Sp: {
            type: "list",
            member: {}
        },
        Sq: {
            type: "map",
            key: {},
            value: {}
        },
        Ss: {
            type: "structure",
            members: {
                arn: {
                    locationName: "arn"
                },
                createdAt: {
                    shape: "S8",
                    locationName: "createdAt"
                },
                createdBy: {
                    locationName: "createdBy"
                },
                description: {
                    locationName: "description"
                },
                ec2SubnetIds: {
                    shape: "Sd",
                    locationName: "ec2SubnetIds"
                },
                launchProfileId: {
                    locationName: "launchProfileId"
                },
                launchProfileProtocolVersions: {
                    shape: "Sf",
                    locationName: "launchProfileProtocolVersions"
                },
                name: {
                    locationName: "name"
                },
                state: {
                    locationName: "state"
                },
                statusCode: {
                    locationName: "statusCode"
                },
                statusMessage: {
                    locationName: "statusMessage"
                },
                streamConfiguration: {
                    locationName: "streamConfiguration",
                    type: "structure",
                    members: {
                        clipboardMode: {
                            locationName: "clipboardMode"
                        },
                        ec2InstanceTypes: {
                            shape: "Sk",
                            locationName: "ec2InstanceTypes"
                        },
                        maxSessionLengthInMinutes: {
                            locationName: "maxSessionLengthInMinutes",
                            type: "integer"
                        },
                        streamingImageIds: {
                            shape: "Sn",
                            locationName: "streamingImageIds"
                        }
                    }
                },
                studioComponentIds: {
                    shape: "Sp",
                    locationName: "studioComponentIds"
                },
                tags: {
                    shape: "Sq",
                    locationName: "tags"
                },
                updatedAt: {
                    shape: "S8",
                    locationName: "updatedAt"
                },
                updatedBy: {
                    locationName: "updatedBy"
                }
            }
        },
        S12: {
            type: "structure",
            members: {
                arn: {
                    locationName: "arn"
                },
                description: {
                    locationName: "description"
                },
                ec2ImageId: {
                    locationName: "ec2ImageId"
                },
                encryptionConfiguration: {
                    locationName: "encryptionConfiguration",
                    type: "structure",
                    members: {
                        keyArn: {
                            locationName: "keyArn"
                        },
                        keyType: {
                            locationName: "keyType"
                        }
                    },
                    required: [ "keyType" ]
                },
                eulaIds: {
                    shape: "S3",
                    locationName: "eulaIds"
                },
                name: {
                    locationName: "name"
                },
                owner: {
                    locationName: "owner"
                },
                platform: {
                    locationName: "platform"
                },
                state: {
                    locationName: "state"
                },
                statusCode: {
                    locationName: "statusCode"
                },
                statusMessage: {
                    locationName: "statusMessage"
                },
                streamingImageId: {
                    locationName: "streamingImageId"
                },
                tags: {
                    shape: "Sq",
                    locationName: "tags"
                }
            }
        },
        S1c: {
            type: "structure",
            members: {
                arn: {
                    locationName: "arn"
                },
                createdAt: {
                    shape: "S8",
                    locationName: "createdAt"
                },
                createdBy: {
                    locationName: "createdBy"
                },
                ec2InstanceType: {
                    locationName: "ec2InstanceType"
                },
                launchProfileId: {
                    locationName: "launchProfileId"
                },
                sessionId: {
                    locationName: "sessionId"
                },
                state: {
                    locationName: "state"
                },
                statusCode: {
                    locationName: "statusCode"
                },
                statusMessage: {
                    locationName: "statusMessage"
                },
                streamingImageId: {
                    locationName: "streamingImageId"
                },
                tags: {
                    shape: "Sq",
                    locationName: "tags"
                },
                terminateAt: {
                    shape: "S8",
                    locationName: "terminateAt"
                },
                updatedAt: {
                    shape: "S8",
                    locationName: "updatedAt"
                },
                updatedBy: {
                    locationName: "updatedBy"
                }
            }
        },
        S1j: {
            type: "structure",
            members: {
                createdAt: {
                    shape: "S8",
                    locationName: "createdAt"
                },
                createdBy: {
                    locationName: "createdBy"
                },
                expiresAt: {
                    shape: "S8",
                    locationName: "expiresAt"
                },
                state: {
                    locationName: "state"
                },
                statusCode: {
                    locationName: "statusCode"
                },
                streamId: {
                    locationName: "streamId"
                },
                url: {
                    locationName: "url"
                }
            }
        },
        S1o: {
            type: "structure",
            members: {
                keyArn: {
                    locationName: "keyArn"
                },
                keyType: {
                    locationName: "keyType"
                }
            },
            required: [ "keyType" ]
        },
        S1t: {
            type: "structure",
            members: {
                adminRoleArn: {
                    locationName: "adminRoleArn"
                },
                arn: {
                    locationName: "arn"
                },
                createdAt: {
                    shape: "S8",
                    locationName: "createdAt"
                },
                displayName: {
                    locationName: "displayName"
                },
                homeRegion: {
                    locationName: "homeRegion"
                },
                ssoClientId: {
                    locationName: "ssoClientId"
                },
                state: {
                    locationName: "state"
                },
                statusCode: {
                    locationName: "statusCode"
                },
                statusMessage: {
                    locationName: "statusMessage"
                },
                studioEncryptionConfiguration: {
                    shape: "S1o",
                    locationName: "studioEncryptionConfiguration"
                },
                studioId: {
                    locationName: "studioId"
                },
                studioName: {
                    locationName: "studioName"
                },
                studioUrl: {
                    locationName: "studioUrl"
                },
                tags: {
                    shape: "Sq",
                    locationName: "tags"
                },
                updatedAt: {
                    shape: "S8",
                    locationName: "updatedAt"
                },
                userRoleArn: {
                    locationName: "userRoleArn"
                }
            }
        },
        S1y: {
            type: "structure",
            members: {
                activeDirectoryConfiguration: {
                    locationName: "activeDirectoryConfiguration",
                    type: "structure",
                    members: {
                        computerAttributes: {
                            shape: "S20",
                            locationName: "computerAttributes"
                        },
                        directoryId: {
                            locationName: "directoryId"
                        },
                        organizationalUnitDistinguishedName: {
                            locationName: "organizationalUnitDistinguishedName"
                        }
                    }
                },
                computeFarmConfiguration: {
                    locationName: "computeFarmConfiguration",
                    type: "structure",
                    members: {
                        activeDirectoryUser: {
                            locationName: "activeDirectoryUser"
                        },
                        endpoint: {
                            locationName: "endpoint"
                        }
                    }
                },
                licenseServiceConfiguration: {
                    locationName: "licenseServiceConfiguration",
                    type: "structure",
                    members: {
                        endpoint: {
                            locationName: "endpoint"
                        }
                    }
                },
                sharedFileSystemConfiguration: {
                    locationName: "sharedFileSystemConfiguration",
                    type: "structure",
                    members: {
                        endpoint: {
                            locationName: "endpoint"
                        },
                        fileSystemId: {
                            locationName: "fileSystemId"
                        },
                        linuxMountPoint: {
                            locationName: "linuxMountPoint"
                        },
                        shareName: {
                            locationName: "shareName"
                        },
                        windowsMountDrive: {
                            locationName: "windowsMountDrive"
                        }
                    }
                }
            },
            union: true
        },
        S20: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    name: {
                        locationName: "name"
                    },
                    value: {
                        locationName: "value"
                    }
                }
            }
        },
        S2c: {
            type: "list",
            member: {}
        },
        S2e: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    launchProfileProtocolVersion: {
                        locationName: "launchProfileProtocolVersion"
                    },
                    platform: {
                        locationName: "platform"
                    },
                    runContext: {
                        locationName: "runContext"
                    },
                    script: {
                        locationName: "script"
                    }
                }
            }
        },
        S2k: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    key: {
                        locationName: "key"
                    },
                    value: {
                        locationName: "value"
                    }
                }
            }
        },
        S2r: {
            type: "structure",
            members: {
                arn: {
                    locationName: "arn"
                },
                configuration: {
                    shape: "S1y",
                    locationName: "configuration"
                },
                createdAt: {
                    shape: "S8",
                    locationName: "createdAt"
                },
                createdBy: {
                    locationName: "createdBy"
                },
                description: {
                    locationName: "description"
                },
                ec2SecurityGroupIds: {
                    shape: "S2c",
                    locationName: "ec2SecurityGroupIds"
                },
                initializationScripts: {
                    shape: "S2e",
                    locationName: "initializationScripts"
                },
                name: {
                    locationName: "name"
                },
                scriptParameters: {
                    shape: "S2k",
                    locationName: "scriptParameters"
                },
                state: {
                    locationName: "state"
                },
                statusCode: {
                    locationName: "statusCode"
                },
                statusMessage: {
                    locationName: "statusMessage"
                },
                studioComponentId: {
                    locationName: "studioComponentId"
                },
                subtype: {
                    locationName: "subtype"
                },
                tags: {
                    shape: "Sq",
                    locationName: "tags"
                },
                type: {
                    locationName: "type"
                },
                updatedAt: {
                    shape: "S8",
                    locationName: "updatedAt"
                },
                updatedBy: {
                    locationName: "updatedBy"
                }
            }
        },
        S3b: {
            type: "structure",
            members: {
                content: {
                    locationName: "content"
                },
                createdAt: {
                    shape: "S8",
                    locationName: "createdAt"
                },
                eulaId: {
                    locationName: "eulaId"
                },
                name: {
                    locationName: "name"
                },
                updatedAt: {
                    shape: "S8",
                    locationName: "updatedAt"
                }
            }
        },
        S3h: {
            type: "list",
            member: {
                shape: "S12"
            }
        },
        S3l: {
            type: "list",
            member: {}
        },
        S3t: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    script: {
                        locationName: "script"
                    },
                    studioComponentId: {
                        locationName: "studioComponentId"
                    },
                    studioComponentName: {
                        locationName: "studioComponentName"
                    }
                }
            }
        },
        S3x: {
            type: "structure",
            members: {
                identityStoreId: {
                    locationName: "identityStoreId"
                },
                persona: {
                    locationName: "persona"
                },
                principalId: {
                    locationName: "principalId"
                }
            }
        },
        S4b: {
            type: "structure",
            members: {
                identityStoreId: {
                    locationName: "identityStoreId"
                },
                persona: {
                    locationName: "persona"
                },
                principalId: {
                    locationName: "principalId"
                }
            }
        }
    },
    paginators: {
        ListEulaAcceptances: {
            input_token: "nextToken",
            output_token: "nextToken",
            result_key: "eulaAcceptances"
        },
        ListEulas: {
            input_token: "nextToken",
            output_token: "nextToken",
            result_key: "eulas"
        },
        ListLaunchProfileMembers: {
            input_token: "nextToken",
            limit_key: "maxResults",
            output_token: "nextToken",
            result_key: "members"
        },
        ListLaunchProfiles: {
            input_token: "nextToken",
            limit_key: "maxResults",
            output_token: "nextToken",
            result_key: "launchProfiles"
        },
        ListStreamingImages: {
            input_token: "nextToken",
            output_token: "nextToken",
            result_key: "streamingImages"
        },
        ListStreamingSessions: {
            input_token: "nextToken",
            output_token: "nextToken",
            result_key: "sessions"
        },
        ListStudioComponents: {
            input_token: "nextToken",
            limit_key: "maxResults",
            output_token: "nextToken",
            result_key: "studioComponents"
        },
        ListStudioMembers: {
            input_token: "nextToken",
            limit_key: "maxResults",
            output_token: "nextToken",
            result_key: "members"
        },
        ListStudios: {
            input_token: "nextToken",
            output_token: "nextToken",
            result_key: "studios"
        }
    }
};

AWS.apiLoader.services["finspace"] = {};

AWS.Finspace = AWS.Service.defineService("finspace", [ "2021-03-12" ]);

_xamzrequire = function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof _xamzrequire == "function" && _xamzrequire;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f;
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }
        return n[o].exports;
    }
    var i = typeof _xamzrequire == "function" && _xamzrequire;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s;
}({
    96: [ function(require, module, exports) {
        var AWS = require("../core");
        AWS.util.update(AWS.Finspace.prototype, {
            setupRequestListeners: function setupRequestListeners(request) {
                request.addListener("build", this.modifyContentType);
            },
            modifyContentType: function modifyContentType(request) {
                if (request.httpRequest.headers["Content-Type"] === "application/json") {
                    request.httpRequest.headers["Content-Type"] = "application/x-amz-json-1.1";
                }
            }
        });
    }, {
        "../core": 39
    } ]
}, {}, [ 96 ]);

AWS.apiLoader.services["finspace"]["2021-03-12"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2021-03-12",
        endpointPrefix: "finspace",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceAbbreviation: "finspace",
        serviceFullName: "FinSpace User Environment Management service",
        serviceId: "finspace",
        signatureVersion: "v4",
        signingName: "finspace",
        uid: "finspace-2021-03-12"
    },
    operations: {
        CreateEnvironment: {
            http: {
                requestUri: "/environment"
            },
            input: {
                type: "structure",
                required: [ "name" ],
                members: {
                    name: {},
                    description: {},
                    kmsKeyId: {},
                    tags: {
                        shape: "S5"
                    },
                    federationMode: {},
                    federationParameters: {
                        shape: "S9"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    environmentId: {},
                    environmentArn: {},
                    environmentUrl: {}
                }
            }
        },
        DeleteEnvironment: {
            http: {
                method: "DELETE",
                requestUri: "/environment/{environmentId}"
            },
            input: {
                type: "structure",
                required: [ "environmentId" ],
                members: {
                    environmentId: {
                        location: "uri",
                        locationName: "environmentId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        GetEnvironment: {
            http: {
                method: "GET",
                requestUri: "/environment/{environmentId}"
            },
            input: {
                type: "structure",
                required: [ "environmentId" ],
                members: {
                    environmentId: {
                        location: "uri",
                        locationName: "environmentId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    environment: {
                        shape: "Sn"
                    }
                }
            }
        },
        ListEnvironments: {
            http: {
                method: "GET",
                requestUri: "/environment"
            },
            input: {
                type: "structure",
                members: {
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    environments: {
                        type: "list",
                        member: {
                            shape: "Sn"
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListTagsForResource: {
            http: {
                method: "GET",
                requestUri: "/tags/{resourceArn}"
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
                        shape: "S5"
                    }
                }
            }
        },
        TagResource: {
            http: {
                requestUri: "/tags/{resourceArn}"
            },
            input: {
                type: "structure",
                required: [ "resourceArn", "tags" ],
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
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
                requestUri: "/tags/{resourceArn}"
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
            }
        },
        UpdateEnvironment: {
            http: {
                method: "PUT",
                requestUri: "/environment/{environmentId}"
            },
            input: {
                type: "structure",
                required: [ "environmentId" ],
                members: {
                    environmentId: {
                        location: "uri",
                        locationName: "environmentId"
                    },
                    name: {},
                    description: {},
                    federationMode: {},
                    federationParameters: {
                        shape: "S9"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    environment: {
                        shape: "Sn"
                    }
                }
            }
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
                samlMetadataDocument: {},
                samlMetadataURL: {},
                applicationCallBackURL: {},
                federationURN: {},
                federationProviderName: {},
                attributeMap: {
                    type: "map",
                    key: {},
                    value: {}
                }
            }
        },
        Sn: {
            type: "structure",
            members: {
                name: {},
                environmentId: {},
                awsAccountId: {},
                status: {},
                environmentUrl: {},
                description: {},
                environmentArn: {},
                sageMakerStudioDomainUrl: {},
                kmsKeyId: {},
                dedicatedServiceAccountId: {},
                federationMode: {},
                federationParameters: {
                    shape: "S9"
                }
            }
        }
    },
    paginators: {}
};

AWS.apiLoader.services["finspacedata"] = {};

AWS.Finspacedata = AWS.Service.defineService("finspacedata", [ "2020-07-13" ]);

_xamzrequire = function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof _xamzrequire == "function" && _xamzrequire;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f;
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }
        return n[o].exports;
    }
    var i = typeof _xamzrequire == "function" && _xamzrequire;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s;
}({
    97: [ function(require, module, exports) {
        var AWS = require("../core");
        AWS.util.update(AWS.Finspacedata.prototype, {
            setupRequestListeners: function setupRequestListeners(request) {
                request.addListener("build", this.modifyContentType);
            },
            modifyContentType: function modifyContentType(request) {
                if (request.httpRequest.headers["Content-Type"] === "application/json") {
                    request.httpRequest.headers["Content-Type"] = "application/x-amz-json-1.1";
                }
            }
        });
    }, {
        "../core": 39
    } ]
}, {}, [ 97 ]);

AWS.apiLoader.services["finspacedata"]["2020-07-13"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-07-13",
        endpointPrefix: "finspace-api",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceAbbreviation: "FinSpace Data",
        serviceFullName: "FinSpace Public API",
        serviceId: "finspace data",
        signatureVersion: "v4",
        signingName: "finspace-api",
        uid: "finspace-2020-07-13"
    },
    operations: {
        CreateChangeset: {
            http: {
                requestUri: "/datasets/{datasetId}/changesets"
            },
            input: {
                type: "structure",
                required: [ "datasetId", "changeType", "sourceType", "sourceParams" ],
                members: {
                    datasetId: {
                        location: "uri",
                        locationName: "datasetId"
                    },
                    changeType: {},
                    sourceType: {},
                    sourceParams: {
                        shape: "S5"
                    },
                    formatType: {},
                    formatParams: {
                        shape: "S5"
                    },
                    tags: {
                        shape: "S5"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    changeset: {
                        type: "structure",
                        members: {
                            id: {},
                            changesetArn: {},
                            datasetId: {},
                            changeType: {},
                            sourceType: {},
                            sourceParams: {
                                shape: "S5"
                            },
                            formatType: {},
                            formatParams: {
                                shape: "S5"
                            },
                            createTimestamp: {
                                type: "timestamp"
                            },
                            status: {},
                            errorInfo: {
                                type: "structure",
                                members: {
                                    errorMessage: {},
                                    errorCategory: {}
                                }
                            },
                            changesetLabels: {
                                shape: "S5"
                            },
                            updatesChangesetId: {},
                            updatedByChangesetId: {}
                        }
                    }
                }
            }
        },
        GetProgrammaticAccessCredentials: {
            http: {
                method: "GET",
                requestUri: "/credentials/programmatic"
            },
            input: {
                type: "structure",
                required: [ "environmentId" ],
                members: {
                    durationInMinutes: {
                        location: "querystring",
                        locationName: "durationInMinutes",
                        type: "long"
                    },
                    environmentId: {
                        location: "querystring",
                        locationName: "environmentId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    credentials: {
                        type: "structure",
                        members: {
                            accessKeyId: {},
                            secretAccessKey: {},
                            sessionToken: {}
                        }
                    },
                    durationInMinutes: {
                        type: "long"
                    }
                }
            }
        },
        GetWorkingLocation: {
            http: {
                requestUri: "/workingLocationV1"
            },
            input: {
                type: "structure",
                members: {
                    locationType: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    s3Uri: {},
                    s3Path: {},
                    s3Bucket: {}
                }
            }
        }
    },
    shapes: {
        S5: {
            type: "map",
            key: {},
            value: {}
        }
    },
    paginators: {}
};

AWS.apiLoader.services["ssmcontacts"] = {};

AWS.SSMContacts = AWS.Service.defineService("ssmcontacts", [ "2021-05-03" ]);

AWS.apiLoader.services["ssmcontacts"]["2021-05-03"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2021-05-03",
        endpointPrefix: "ssm-contacts",
        jsonVersion: "1.1",
        protocol: "json",
        serviceAbbreviation: "SSM Contacts",
        serviceFullName: "AWS Systems Manager Incident Manager Contacts",
        serviceId: "SSM Contacts",
        signatureVersion: "v4",
        signingName: "ssm-contacts",
        targetPrefix: "SSMContacts",
        uid: "ssm-contacts-2021-05-03"
    },
    operations: {
        AcceptPage: {
            input: {
                type: "structure",
                required: [ "PageId", "AcceptType", "AcceptCode" ],
                members: {
                    PageId: {},
                    ContactChannelId: {},
                    AcceptType: {},
                    Note: {},
                    AcceptCode: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        ActivateContactChannel: {
            input: {
                type: "structure",
                required: [ "ContactChannelId", "ActivationCode" ],
                members: {
                    ContactChannelId: {},
                    ActivationCode: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        CreateContact: {
            input: {
                type: "structure",
                required: [ "Alias", "Type", "Plan" ],
                members: {
                    Alias: {},
                    DisplayName: {},
                    Type: {},
                    Plan: {
                        shape: "Se"
                    },
                    Tags: {
                        shape: "So"
                    },
                    IdempotencyToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "ContactArn" ],
                members: {
                    ContactArn: {}
                }
            }
        },
        CreateContactChannel: {
            input: {
                type: "structure",
                required: [ "ContactId", "Name", "Type", "DeliveryAddress" ],
                members: {
                    ContactId: {},
                    Name: {},
                    Type: {},
                    DeliveryAddress: {
                        shape: "Sx"
                    },
                    DeferActivation: {
                        type: "boolean"
                    },
                    IdempotencyToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "ContactChannelArn" ],
                members: {
                    ContactChannelArn: {}
                }
            }
        },
        DeactivateContactChannel: {
            input: {
                type: "structure",
                required: [ "ContactChannelId" ],
                members: {
                    ContactChannelId: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DeleteContact: {
            input: {
                type: "structure",
                required: [ "ContactId" ],
                members: {
                    ContactId: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DeleteContactChannel: {
            input: {
                type: "structure",
                required: [ "ContactChannelId" ],
                members: {
                    ContactChannelId: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DescribeEngagement: {
            input: {
                type: "structure",
                required: [ "EngagementId" ],
                members: {
                    EngagementId: {}
                }
            },
            output: {
                type: "structure",
                required: [ "ContactArn", "EngagementArn", "Sender", "Subject", "Content" ],
                members: {
                    ContactArn: {},
                    EngagementArn: {},
                    Sender: {},
                    Subject: {},
                    Content: {},
                    PublicSubject: {},
                    PublicContent: {},
                    IncidentId: {},
                    StartTime: {
                        type: "timestamp"
                    },
                    StopTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        DescribePage: {
            input: {
                type: "structure",
                required: [ "PageId" ],
                members: {
                    PageId: {}
                }
            },
            output: {
                type: "structure",
                required: [ "PageArn", "EngagementArn", "ContactArn", "Sender", "Subject", "Content" ],
                members: {
                    PageArn: {},
                    EngagementArn: {},
                    ContactArn: {},
                    Sender: {},
                    Subject: {},
                    Content: {},
                    PublicSubject: {},
                    PublicContent: {},
                    IncidentId: {},
                    SentTime: {
                        type: "timestamp"
                    },
                    ReadTime: {
                        type: "timestamp"
                    },
                    DeliveryTime: {
                        type: "timestamp"
                    }
                }
            }
        },
        GetContact: {
            input: {
                type: "structure",
                required: [ "ContactId" ],
                members: {
                    ContactId: {}
                }
            },
            output: {
                type: "structure",
                required: [ "ContactArn", "Alias", "Type", "Plan" ],
                members: {
                    ContactArn: {},
                    Alias: {},
                    DisplayName: {},
                    Type: {},
                    Plan: {
                        shape: "Se"
                    }
                }
            }
        },
        GetContactChannel: {
            input: {
                type: "structure",
                required: [ "ContactChannelId" ],
                members: {
                    ContactChannelId: {}
                }
            },
            output: {
                type: "structure",
                required: [ "ContactArn", "ContactChannelArn", "Name", "Type", "DeliveryAddress" ],
                members: {
                    ContactArn: {},
                    ContactChannelArn: {},
                    Name: {},
                    Type: {},
                    DeliveryAddress: {
                        shape: "Sx"
                    },
                    ActivationStatus: {}
                }
            }
        },
        GetContactPolicy: {
            input: {
                type: "structure",
                required: [ "ContactArn" ],
                members: {
                    ContactArn: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    ContactArn: {},
                    Policy: {}
                }
            }
        },
        ListContactChannels: {
            input: {
                type: "structure",
                required: [ "ContactId" ],
                members: {
                    ContactId: {},
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "ContactChannels" ],
                members: {
                    NextToken: {},
                    ContactChannels: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "ContactChannelArn", "ContactArn", "Name", "DeliveryAddress", "ActivationStatus" ],
                            members: {
                                ContactChannelArn: {},
                                ContactArn: {},
                                Name: {},
                                Type: {},
                                DeliveryAddress: {
                                    shape: "Sx"
                                },
                                ActivationStatus: {}
                            }
                        }
                    }
                }
            }
        },
        ListContacts: {
            input: {
                type: "structure",
                members: {
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    },
                    AliasPrefix: {},
                    Type: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    NextToken: {},
                    Contacts: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "ContactArn", "Alias", "Type" ],
                            members: {
                                ContactArn: {},
                                Alias: {},
                                DisplayName: {},
                                Type: {}
                            }
                        }
                    }
                }
            }
        },
        ListEngagements: {
            input: {
                type: "structure",
                members: {
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    },
                    IncidentId: {},
                    TimeRangeValue: {
                        type: "structure",
                        members: {
                            StartTime: {
                                type: "timestamp"
                            },
                            EndTime: {
                                type: "timestamp"
                            }
                        }
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "Engagements" ],
                members: {
                    NextToken: {},
                    Engagements: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "EngagementArn", "ContactArn", "Sender" ],
                            members: {
                                EngagementArn: {},
                                ContactArn: {},
                                Sender: {},
                                IncidentId: {},
                                StartTime: {
                                    type: "timestamp"
                                },
                                StopTime: {
                                    type: "timestamp"
                                }
                            }
                        }
                    }
                }
            }
        },
        ListPageReceipts: {
            input: {
                type: "structure",
                required: [ "PageId" ],
                members: {
                    PageId: {},
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    NextToken: {},
                    Receipts: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "ReceiptType", "ReceiptTime" ],
                            members: {
                                ContactChannelArn: {},
                                ReceiptType: {},
                                ReceiptInfo: {},
                                ReceiptTime: {
                                    type: "timestamp"
                                }
                            }
                        }
                    }
                }
            }
        },
        ListPagesByContact: {
            input: {
                type: "structure",
                required: [ "ContactId" ],
                members: {
                    ContactId: {},
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "Pages" ],
                members: {
                    NextToken: {},
                    Pages: {
                        shape: "S2c"
                    }
                }
            }
        },
        ListPagesByEngagement: {
            input: {
                type: "structure",
                required: [ "EngagementId" ],
                members: {
                    EngagementId: {},
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "Pages" ],
                members: {
                    NextToken: {},
                    Pages: {
                        shape: "S2c"
                    }
                }
            }
        },
        ListTagsForResource: {
            input: {
                type: "structure",
                required: [ "ResourceARN" ],
                members: {
                    ResourceARN: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    Tags: {
                        shape: "So"
                    }
                }
            }
        },
        PutContactPolicy: {
            input: {
                type: "structure",
                required: [ "ContactArn", "Policy" ],
                members: {
                    ContactArn: {},
                    Policy: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        SendActivationCode: {
            input: {
                type: "structure",
                required: [ "ContactChannelId" ],
                members: {
                    ContactChannelId: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        StartEngagement: {
            input: {
                type: "structure",
                required: [ "ContactId", "Sender", "Subject", "Content" ],
                members: {
                    ContactId: {},
                    Sender: {},
                    Subject: {},
                    Content: {},
                    PublicSubject: {},
                    PublicContent: {},
                    IncidentId: {},
                    IdempotencyToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "EngagementArn" ],
                members: {
                    EngagementArn: {}
                }
            }
        },
        StopEngagement: {
            input: {
                type: "structure",
                required: [ "EngagementId" ],
                members: {
                    EngagementId: {},
                    Reason: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        TagResource: {
            input: {
                type: "structure",
                required: [ "ResourceARN", "Tags" ],
                members: {
                    ResourceARN: {},
                    Tags: {
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
                members: {}
            }
        },
        UpdateContact: {
            input: {
                type: "structure",
                required: [ "ContactId" ],
                members: {
                    ContactId: {},
                    DisplayName: {},
                    Plan: {
                        shape: "Se"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UpdateContactChannel: {
            input: {
                type: "structure",
                required: [ "ContactChannelId" ],
                members: {
                    ContactChannelId: {},
                    Name: {},
                    DeliveryAddress: {
                        shape: "Sx"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        }
    },
    shapes: {
        Se: {
            type: "structure",
            required: [ "Stages" ],
            members: {
                Stages: {
                    type: "list",
                    member: {
                        type: "structure",
                        required: [ "DurationInMinutes", "Targets" ],
                        members: {
                            DurationInMinutes: {
                                type: "integer"
                            },
                            Targets: {
                                type: "list",
                                member: {
                                    type: "structure",
                                    members: {
                                        ChannelTargetInfo: {
                                            type: "structure",
                                            required: [ "ContactChannelId" ],
                                            members: {
                                                ContactChannelId: {},
                                                RetryIntervalInMinutes: {
                                                    type: "integer"
                                                }
                                            }
                                        },
                                        ContactTargetInfo: {
                                            type: "structure",
                                            required: [ "IsEssential" ],
                                            members: {
                                                ContactId: {},
                                                IsEssential: {
                                                    type: "boolean"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        So: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    Key: {},
                    Value: {}
                }
            }
        },
        Sx: {
            type: "structure",
            members: {
                SimpleAddress: {}
            }
        },
        S2c: {
            type: "list",
            member: {
                type: "structure",
                required: [ "PageArn", "EngagementArn", "ContactArn", "Sender" ],
                members: {
                    PageArn: {},
                    EngagementArn: {},
                    ContactArn: {},
                    Sender: {},
                    IncidentId: {},
                    SentTime: {
                        type: "timestamp"
                    },
                    DeliveryTime: {
                        type: "timestamp"
                    },
                    ReadTime: {
                        type: "timestamp"
                    }
                }
            }
        }
    },
    paginators: {
        ListContactChannels: {
            input_token: "NextToken",
            limit_key: "MaxResults",
            output_token: "NextToken",
            result_key: "ContactChannels"
        },
        ListContacts: {
            input_token: "NextToken",
            limit_key: "MaxResults",
            output_token: "NextToken",
            result_key: "Contacts"
        },
        ListEngagements: {
            input_token: "NextToken",
            limit_key: "MaxResults",
            output_token: "NextToken",
            result_key: "Engagements"
        },
        ListPageReceipts: {
            input_token: "NextToken",
            limit_key: "MaxResults",
            output_token: "NextToken",
            result_key: "Receipts"
        },
        ListPagesByContact: {
            input_token: "NextToken",
            limit_key: "MaxResults",
            output_token: "NextToken",
            result_key: "Pages"
        },
        ListPagesByEngagement: {
            input_token: "NextToken",
            limit_key: "MaxResults",
            output_token: "NextToken",
            result_key: "Pages"
        }
    }
};

AWS.apiLoader.services["ssmincidents"] = {};

AWS.SSMIncidents = AWS.Service.defineService("ssmincidents", [ "2018-05-10" ]);

AWS.apiLoader.services["ssmincidents"]["2018-05-10"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2018-05-10",
        endpointPrefix: "ssm-incidents",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceAbbreviation: "SSM Incidents",
        serviceFullName: "AWS Systems Manager Incident Manager",
        serviceId: "SSM Incidents",
        signatureVersion: "v4",
        signingName: "ssm-incidents",
        uid: "ssm-incidents-2018-05-10"
    },
    operations: {
        CreateReplicationSet: {
            http: {
                requestUri: "/createReplicationSet",
                responseCode: 201
            },
            input: {
                type: "structure",
                required: [ "regions" ],
                members: {
                    clientToken: {
                        idempotencyToken: true
                    },
                    regions: {
                        type: "map",
                        key: {},
                        value: {
                            type: "structure",
                            members: {
                                sseKmsKeyId: {}
                            }
                        }
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "arn" ],
                members: {
                    arn: {}
                }
            }
        },
        CreateResponsePlan: {
            http: {
                requestUri: "/createResponsePlan",
                responseCode: 201
            },
            input: {
                type: "structure",
                required: [ "incidentTemplate", "name" ],
                members: {
                    actions: {
                        shape: "Sa"
                    },
                    chatChannel: {
                        shape: "Sl"
                    },
                    clientToken: {
                        idempotencyToken: true
                    },
                    displayName: {},
                    engagements: {
                        shape: "Sq"
                    },
                    incidentTemplate: {
                        shape: "Ss"
                    },
                    name: {},
                    tags: {
                        shape: "S10"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "arn" ],
                members: {
                    arn: {}
                }
            },
            idempotent: true
        },
        CreateTimelineEvent: {
            http: {
                requestUri: "/createTimelineEvent",
                responseCode: 201
            },
            input: {
                type: "structure",
                required: [ "clientToken", "eventData", "eventTime", "eventType", "incidentRecordArn" ],
                members: {
                    clientToken: {
                        idempotencyToken: true
                    },
                    eventData: {},
                    eventTime: {
                        type: "timestamp"
                    },
                    eventType: {},
                    incidentRecordArn: {}
                }
            },
            output: {
                type: "structure",
                required: [ "eventId", "incidentRecordArn" ],
                members: {
                    eventId: {},
                    incidentRecordArn: {}
                }
            },
            idempotent: true
        },
        DeleteIncidentRecord: {
            http: {
                requestUri: "/deleteIncidentRecord",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "arn" ],
                members: {
                    arn: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        },
        DeleteReplicationSet: {
            http: {
                requestUri: "/deleteReplicationSet",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "arn" ],
                members: {
                    arn: {
                        location: "querystring",
                        locationName: "arn"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DeleteResourcePolicy: {
            http: {
                requestUri: "/deleteResourcePolicy",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "policyId", "resourceArn" ],
                members: {
                    policyId: {},
                    resourceArn: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DeleteResponsePlan: {
            http: {
                requestUri: "/deleteResponsePlan",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "arn" ],
                members: {
                    arn: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        },
        DeleteTimelineEvent: {
            http: {
                requestUri: "/deleteTimelineEvent",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "eventId", "incidentRecordArn" ],
                members: {
                    eventId: {},
                    incidentRecordArn: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        },
        GetIncidentRecord: {
            http: {
                method: "GET",
                requestUri: "/getIncidentRecord",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "arn" ],
                members: {
                    arn: {
                        location: "querystring",
                        locationName: "arn"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "incidentRecord" ],
                members: {
                    incidentRecord: {
                        type: "structure",
                        required: [ "arn", "creationTime", "dedupeString", "impact", "incidentRecordSource", "lastModifiedBy", "lastModifiedTime", "status", "title" ],
                        members: {
                            arn: {},
                            automationExecutions: {
                                type: "list",
                                member: {
                                    type: "structure",
                                    members: {
                                        ssmExecutionArn: {}
                                    },
                                    union: true
                                }
                            },
                            chatChannel: {
                                shape: "Sl"
                            },
                            creationTime: {
                                type: "timestamp"
                            },
                            dedupeString: {},
                            impact: {
                                type: "integer"
                            },
                            incidentRecordSource: {
                                shape: "S1q"
                            },
                            lastModifiedBy: {},
                            lastModifiedTime: {
                                type: "timestamp"
                            },
                            notificationTargets: {
                                shape: "Sv"
                            },
                            resolvedTime: {
                                type: "timestamp"
                            },
                            status: {},
                            summary: {},
                            title: {}
                        }
                    }
                }
            }
        },
        GetReplicationSet: {
            http: {
                method: "GET",
                requestUri: "/getReplicationSet",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "arn" ],
                members: {
                    arn: {
                        location: "querystring",
                        locationName: "arn"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "replicationSet" ],
                members: {
                    replicationSet: {
                        type: "structure",
                        required: [ "createdBy", "createdTime", "deletionProtected", "lastModifiedBy", "lastModifiedTime", "regionMap", "status" ],
                        members: {
                            createdBy: {},
                            createdTime: {
                                type: "timestamp"
                            },
                            deletionProtected: {
                                type: "boolean"
                            },
                            lastModifiedBy: {},
                            lastModifiedTime: {
                                type: "timestamp"
                            },
                            regionMap: {
                                type: "map",
                                key: {},
                                value: {
                                    type: "structure",
                                    required: [ "status", "statusUpdateDateTime" ],
                                    members: {
                                        sseKmsKeyId: {},
                                        status: {},
                                        statusMessage: {},
                                        statusUpdateDateTime: {
                                            type: "timestamp"
                                        }
                                    }
                                }
                            },
                            status: {}
                        }
                    }
                }
            }
        },
        GetResourcePolicies: {
            http: {
                requestUri: "/getResourcePolicies",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "resourceArn" ],
                members: {
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {},
                    resourceArn: {
                        location: "querystring",
                        locationName: "resourceArn"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "resourcePolicies" ],
                members: {
                    nextToken: {},
                    resourcePolicies: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "policyDocument", "policyId", "ramResourceShareRegion" ],
                            members: {
                                policyDocument: {},
                                policyId: {},
                                ramResourceShareRegion: {}
                            }
                        }
                    }
                }
            }
        },
        GetResponsePlan: {
            http: {
                method: "GET",
                requestUri: "/getResponsePlan",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "arn" ],
                members: {
                    arn: {
                        location: "querystring",
                        locationName: "arn"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "arn", "incidentTemplate", "name" ],
                members: {
                    actions: {
                        shape: "Sa"
                    },
                    arn: {},
                    chatChannel: {
                        shape: "Sl"
                    },
                    displayName: {},
                    engagements: {
                        shape: "Sq"
                    },
                    incidentTemplate: {
                        shape: "Ss"
                    },
                    name: {}
                }
            }
        },
        GetTimelineEvent: {
            http: {
                method: "GET",
                requestUri: "/getTimelineEvent",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "eventId", "incidentRecordArn" ],
                members: {
                    eventId: {
                        location: "querystring",
                        locationName: "eventId"
                    },
                    incidentRecordArn: {
                        location: "querystring",
                        locationName: "incidentRecordArn"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "event" ],
                members: {
                    event: {
                        type: "structure",
                        required: [ "eventData", "eventId", "eventTime", "eventType", "eventUpdatedTime", "incidentRecordArn" ],
                        members: {
                            eventData: {},
                            eventId: {},
                            eventTime: {
                                type: "timestamp"
                            },
                            eventType: {},
                            eventUpdatedTime: {
                                type: "timestamp"
                            },
                            incidentRecordArn: {}
                        }
                    }
                }
            }
        },
        ListIncidentRecords: {
            http: {
                requestUri: "/listIncidentRecords",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    filters: {
                        shape: "S2f"
                    },
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                required: [ "incidentRecordSummaries" ],
                members: {
                    incidentRecordSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "arn", "creationTime", "impact", "incidentRecordSource", "status", "title" ],
                            members: {
                                arn: {},
                                creationTime: {
                                    type: "timestamp"
                                },
                                impact: {
                                    type: "integer"
                                },
                                incidentRecordSource: {
                                    shape: "S1q"
                                },
                                resolvedTime: {
                                    type: "timestamp"
                                },
                                status: {},
                                title: {}
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListRelatedItems: {
            http: {
                requestUri: "/listRelatedItems",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "incidentRecordArn" ],
                members: {
                    incidentRecordArn: {},
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                required: [ "relatedItems" ],
                members: {
                    nextToken: {},
                    relatedItems: {
                        shape: "S2t"
                    }
                }
            }
        },
        ListReplicationSets: {
            http: {
                requestUri: "/listReplicationSets",
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
                required: [ "replicationSetArns" ],
                members: {
                    nextToken: {},
                    replicationSetArns: {
                        type: "list",
                        member: {}
                    }
                }
            }
        },
        ListResponsePlans: {
            http: {
                requestUri: "/listResponsePlans",
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
                required: [ "responsePlanSummaries" ],
                members: {
                    nextToken: {},
                    responsePlanSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "arn", "name" ],
                            members: {
                                arn: {},
                                displayName: {},
                                name: {}
                            }
                        }
                    }
                }
            }
        },
        ListTagsForResource: {
            http: {
                method: "GET",
                requestUri: "/tags/{resourceArn}",
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
                required: [ "tags" ],
                members: {
                    tags: {
                        shape: "S10"
                    }
                }
            }
        },
        ListTimelineEvents: {
            http: {
                requestUri: "/listTimelineEvents",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "incidentRecordArn" ],
                members: {
                    filters: {
                        shape: "S2f"
                    },
                    incidentRecordArn: {},
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {},
                    sortBy: {},
                    sortOrder: {}
                }
            },
            output: {
                type: "structure",
                required: [ "eventSummaries" ],
                members: {
                    eventSummaries: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "eventId", "eventTime", "eventType", "eventUpdatedTime", "incidentRecordArn" ],
                            members: {
                                eventId: {},
                                eventTime: {
                                    type: "timestamp"
                                },
                                eventType: {},
                                eventUpdatedTime: {
                                    type: "timestamp"
                                },
                                incidentRecordArn: {}
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        PutResourcePolicy: {
            http: {
                requestUri: "/putResourcePolicy",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "policy", "resourceArn" ],
                members: {
                    policy: {},
                    resourceArn: {}
                }
            },
            output: {
                type: "structure",
                required: [ "policyId" ],
                members: {
                    policyId: {}
                }
            }
        },
        StartIncident: {
            http: {
                requestUri: "/startIncident",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "responsePlanArn" ],
                members: {
                    clientToken: {
                        idempotencyToken: true
                    },
                    impact: {
                        type: "integer"
                    },
                    relatedItems: {
                        shape: "S2t"
                    },
                    responsePlanArn: {},
                    title: {},
                    triggerDetails: {
                        type: "structure",
                        required: [ "source", "timestamp" ],
                        members: {
                            rawData: {},
                            source: {},
                            timestamp: {
                                type: "timestamp"
                            },
                            triggerArn: {}
                        }
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "incidentRecordArn" ],
                members: {
                    incidentRecordArn: {}
                }
            },
            idempotent: true
        },
        TagResource: {
            http: {
                requestUri: "/tags/{resourceArn}",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "resourceArn", "tags" ],
                members: {
                    resourceArn: {
                        location: "uri",
                        locationName: "resourceArn"
                    },
                    tags: {
                        shape: "S10"
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
                requestUri: "/tags/{resourceArn}",
                responseCode: 204
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
        UpdateDeletionProtection: {
            http: {
                requestUri: "/updateDeletionProtection",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "arn", "deletionProtected" ],
                members: {
                    arn: {},
                    clientToken: {
                        idempotencyToken: true
                    },
                    deletionProtected: {
                        type: "boolean"
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UpdateIncidentRecord: {
            http: {
                requestUri: "/updateIncidentRecord",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "arn" ],
                members: {
                    arn: {},
                    chatChannel: {
                        shape: "Sl"
                    },
                    clientToken: {
                        idempotencyToken: true
                    },
                    impact: {
                        type: "integer"
                    },
                    notificationTargets: {
                        shape: "Sv"
                    },
                    status: {},
                    summary: {},
                    title: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        },
        UpdateRelatedItems: {
            http: {
                requestUri: "/updateRelatedItems",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "incidentRecordArn", "relatedItemsUpdate" ],
                members: {
                    clientToken: {
                        idempotencyToken: true
                    },
                    incidentRecordArn: {},
                    relatedItemsUpdate: {
                        type: "structure",
                        members: {
                            itemToAdd: {
                                shape: "S2u"
                            },
                            itemToRemove: {
                                shape: "S2v"
                            }
                        },
                        union: true
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        },
        UpdateReplicationSet: {
            http: {
                requestUri: "/updateReplicationSet",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "actions", "arn" ],
                members: {
                    actions: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                addRegionAction: {
                                    type: "structure",
                                    required: [ "regionName" ],
                                    members: {
                                        regionName: {},
                                        sseKmsKeyId: {}
                                    }
                                },
                                deleteRegionAction: {
                                    type: "structure",
                                    required: [ "regionName" ],
                                    members: {
                                        regionName: {}
                                    }
                                }
                            },
                            union: true
                        }
                    },
                    arn: {},
                    clientToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        UpdateResponsePlan: {
            http: {
                requestUri: "/updateResponsePlan",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "arn" ],
                members: {
                    actions: {
                        shape: "Sa"
                    },
                    arn: {},
                    chatChannel: {
                        shape: "Sl"
                    },
                    clientToken: {
                        idempotencyToken: true
                    },
                    displayName: {},
                    engagements: {
                        shape: "Sq"
                    },
                    incidentTemplateDedupeString: {},
                    incidentTemplateImpact: {
                        type: "integer"
                    },
                    incidentTemplateNotificationTargets: {
                        shape: "Sv"
                    },
                    incidentTemplateSummary: {},
                    incidentTemplateTitle: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        },
        UpdateTimelineEvent: {
            http: {
                requestUri: "/updateTimelineEvent",
                responseCode: 204
            },
            input: {
                type: "structure",
                required: [ "clientToken", "eventId", "incidentRecordArn" ],
                members: {
                    clientToken: {
                        idempotencyToken: true
                    },
                    eventData: {},
                    eventId: {},
                    eventTime: {
                        type: "timestamp"
                    },
                    eventType: {},
                    incidentRecordArn: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            },
            idempotent: true
        }
    },
    shapes: {
        Sa: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    ssmAutomation: {
                        type: "structure",
                        required: [ "documentName", "roleArn" ],
                        members: {
                            documentName: {},
                            documentVersion: {},
                            parameters: {
                                type: "map",
                                key: {},
                                value: {
                                    type: "list",
                                    member: {}
                                }
                            },
                            roleArn: {},
                            targetAccount: {}
                        }
                    }
                },
                union: true
            }
        },
        Sl: {
            type: "structure",
            members: {
                chatbotSns: {
                    type: "list",
                    member: {}
                },
                empty: {
                    type: "structure",
                    members: {}
                }
            },
            union: true
        },
        Sq: {
            type: "list",
            member: {}
        },
        Ss: {
            type: "structure",
            required: [ "impact", "title" ],
            members: {
                dedupeString: {},
                impact: {
                    type: "integer"
                },
                notificationTargets: {
                    shape: "Sv"
                },
                summary: {},
                title: {}
            }
        },
        Sv: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    snsTopicArn: {}
                },
                union: true
            }
        },
        S10: {
            type: "map",
            key: {},
            value: {}
        },
        S1q: {
            type: "structure",
            required: [ "createdBy", "source" ],
            members: {
                createdBy: {},
                invokedBy: {},
                resourceArn: {},
                source: {}
            }
        },
        S2f: {
            type: "list",
            member: {
                type: "structure",
                required: [ "condition", "key" ],
                members: {
                    condition: {
                        type: "structure",
                        members: {
                            after: {
                                type: "timestamp"
                            },
                            before: {
                                type: "timestamp"
                            },
                            equals: {
                                type: "structure",
                                members: {
                                    integerValues: {
                                        type: "list",
                                        member: {
                                            type: "integer"
                                        }
                                    },
                                    stringValues: {
                                        type: "list",
                                        member: {}
                                    }
                                },
                                union: true
                            }
                        },
                        union: true
                    },
                    key: {}
                }
            }
        },
        S2t: {
            type: "list",
            member: {
                shape: "S2u"
            }
        },
        S2u: {
            type: "structure",
            required: [ "identifier" ],
            members: {
                identifier: {
                    shape: "S2v"
                },
                title: {}
            }
        },
        S2v: {
            type: "structure",
            required: [ "type", "value" ],
            members: {
                type: {},
                value: {
                    type: "structure",
                    members: {
                        arn: {},
                        metricDefinition: {},
                        url: {}
                    },
                    union: true
                }
            }
        }
    },
    paginators: {
        GetResourcePolicies: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "resourcePolicies"
        },
        ListIncidentRecords: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "incidentRecordSummaries"
        },
        ListRelatedItems: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "relatedItems"
        },
        ListReplicationSets: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "replicationSetArns"
        },
        ListResponsePlans: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "responsePlanSummaries"
        },
        ListTimelineEvents: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "eventSummaries"
        }
    },
    waiters: {
        WaitForReplicationSetActive: {
            description: "Wait for a replication set to become ACTIVE",
            delay: 30,
            maxAttempts: 5,
            operation: "GetReplicationSet",
            acceptors: [ {
                matcher: "path",
                argument: "replicationSet.status",
                state: "success",
                expected: "ACTIVE"
            }, {
                matcher: "path",
                argument: "replicationSet.status",
                state: "retry",
                expected: "CREATING"
            }, {
                matcher: "path",
                argument: "replicationSet.status",
                state: "retry",
                expected: "UPDATING"
            }, {
                matcher: "path",
                argument: "replicationSet.status",
                state: "failure",
                expected: "FAILED"
            } ]
        },
        WaitForReplicationSetDeleted: {
            description: "Wait for a replication set to be deleted",
            delay: 30,
            maxAttempts: 5,
            operation: "GetReplicationSet",
            acceptors: [ {
                matcher: "error",
                state: "success",
                expected: "ResourceNotFoundException"
            }, {
                matcher: "path",
                argument: "replicationSet.status",
                state: "retry",
                expected: "DELETING"
            }, {
                matcher: "path",
                argument: "replicationSet.status",
                state: "failure",
                expected: "FAILED"
            } ]
        }
    }
};

AWS.apiLoader.services["applicationcostprofiler"] = {};

AWS.ApplicationCostProfiler = AWS.Service.defineService("applicationcostprofiler", [ "2020-09-10" ]);

AWS.apiLoader.services["applicationcostprofiler"]["2020-09-10"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-09-10",
        endpointPrefix: "application-cost-profiler",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceFullName: "AWS Application Cost Profiler",
        serviceId: "ApplicationCostProfiler",
        signatureVersion: "v4",
        signingName: "application-cost-profiler",
        uid: "AWSApplicationCostProfiler-2020-09-10"
    },
    operations: {
        DeleteReportDefinition: {
            http: {
                method: "DELETE",
                requestUri: "/reportDefinition/{reportId}"
            },
            input: {
                type: "structure",
                required: [ "reportId" ],
                members: {
                    reportId: {
                        location: "uri",
                        locationName: "reportId"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    reportId: {}
                }
            }
        },
        GetReportDefinition: {
            http: {
                method: "GET",
                requestUri: "/reportDefinition/{reportId}"
            },
            input: {
                type: "structure",
                required: [ "reportId" ],
                members: {
                    reportId: {
                        location: "uri",
                        locationName: "reportId"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "reportId", "reportDescription", "reportFrequency", "format", "destinationS3Location", "createdAt", "lastUpdated" ],
                members: {
                    reportId: {},
                    reportDescription: {},
                    reportFrequency: {},
                    format: {},
                    destinationS3Location: {
                        shape: "S9"
                    },
                    createdAt: {
                        type: "timestamp"
                    },
                    lastUpdated: {
                        type: "timestamp"
                    }
                }
            }
        },
        ImportApplicationUsage: {
            http: {
                requestUri: "/importApplicationUsage"
            },
            input: {
                type: "structure",
                required: [ "sourceS3Location" ],
                members: {
                    sourceS3Location: {
                        type: "structure",
                        required: [ "bucket", "key" ],
                        members: {
                            bucket: {},
                            key: {},
                            region: {}
                        }
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "importId" ],
                members: {
                    importId: {}
                }
            }
        },
        ListReportDefinitions: {
            http: {
                method: "GET",
                requestUri: "/reportDefinition"
            },
            input: {
                type: "structure",
                members: {
                    nextToken: {
                        location: "querystring",
                        locationName: "nextToken"
                    },
                    maxResults: {
                        location: "querystring",
                        locationName: "maxResults",
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    reportDefinitions: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                reportId: {},
                                reportDescription: {},
                                reportFrequency: {},
                                format: {},
                                destinationS3Location: {
                                    shape: "S9"
                                },
                                createdAt: {
                                    type: "timestamp"
                                },
                                lastUpdatedAt: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        PutReportDefinition: {
            http: {
                requestUri: "/reportDefinition"
            },
            input: {
                type: "structure",
                required: [ "reportId", "reportDescription", "reportFrequency", "format", "destinationS3Location" ],
                members: {
                    reportId: {},
                    reportDescription: {},
                    reportFrequency: {},
                    format: {},
                    destinationS3Location: {
                        shape: "S9"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    reportId: {}
                }
            }
        },
        UpdateReportDefinition: {
            http: {
                method: "PUT",
                requestUri: "/reportDefinition/{reportId}"
            },
            input: {
                type: "structure",
                required: [ "reportId", "reportDescription", "reportFrequency", "format", "destinationS3Location" ],
                members: {
                    reportId: {
                        location: "uri",
                        locationName: "reportId"
                    },
                    reportDescription: {},
                    reportFrequency: {},
                    format: {},
                    destinationS3Location: {
                        shape: "S9"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    reportId: {}
                }
            }
        }
    },
    shapes: {
        S9: {
            type: "structure",
            required: [ "bucket", "prefix" ],
            members: {
                bucket: {},
                prefix: {}
            }
        }
    },
    paginators: {
        ListReportDefinitions: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "reportDefinitions"
        }
    }
};

AWS.apiLoader.services["apprunner"] = {};

AWS.AppRunner = AWS.Service.defineService("apprunner", [ "2020-05-15" ]);

AWS.apiLoader.services["apprunner"]["2020-05-15"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-05-15",
        endpointPrefix: "apprunner",
        jsonVersion: "1.0",
        protocol: "json",
        serviceFullName: "AWS App Runner",
        serviceId: "AppRunner",
        signatureVersion: "v4",
        signingName: "apprunner",
        targetPrefix: "AppRunner",
        uid: "apprunner-2020-05-15"
    },
    operations: {
        AssociateCustomDomain: {
            input: {
                type: "structure",
                required: [ "ServiceArn", "DomainName" ],
                members: {
                    ServiceArn: {},
                    DomainName: {},
                    EnableWWWSubdomain: {
                        type: "boolean"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "DNSTarget", "ServiceArn", "CustomDomain" ],
                members: {
                    DNSTarget: {},
                    ServiceArn: {},
                    CustomDomain: {
                        shape: "S7"
                    }
                }
            }
        },
        CreateAutoScalingConfiguration: {
            input: {
                type: "structure",
                required: [ "AutoScalingConfigurationName" ],
                members: {
                    AutoScalingConfigurationName: {},
                    MaxConcurrency: {
                        type: "integer"
                    },
                    MinSize: {
                        type: "integer"
                    },
                    MaxSize: {
                        type: "integer"
                    },
                    Tags: {
                        shape: "Sh"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "AutoScalingConfiguration" ],
                members: {
                    AutoScalingConfiguration: {
                        shape: "Sm"
                    }
                }
            }
        },
        CreateConnection: {
            input: {
                type: "structure",
                required: [ "ConnectionName", "ProviderType" ],
                members: {
                    ConnectionName: {},
                    ProviderType: {},
                    Tags: {
                        shape: "Sh"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "Connection" ],
                members: {
                    Connection: {
                        shape: "Sv"
                    }
                }
            }
        },
        CreateService: {
            input: {
                type: "structure",
                required: [ "ServiceName", "SourceConfiguration" ],
                members: {
                    ServiceName: {},
                    SourceConfiguration: {
                        shape: "Sz"
                    },
                    InstanceConfiguration: {
                        shape: "S1i"
                    },
                    Tags: {
                        shape: "Sh"
                    },
                    EncryptionConfiguration: {
                        shape: "S1l"
                    },
                    HealthCheckConfiguration: {
                        shape: "S1n"
                    },
                    AutoScalingConfigurationArn: {}
                }
            },
            output: {
                type: "structure",
                required: [ "Service", "OperationId" ],
                members: {
                    Service: {
                        shape: "S1u"
                    },
                    OperationId: {}
                }
            }
        },
        DeleteAutoScalingConfiguration: {
            input: {
                type: "structure",
                required: [ "AutoScalingConfigurationArn" ],
                members: {
                    AutoScalingConfigurationArn: {}
                }
            },
            output: {
                type: "structure",
                required: [ "AutoScalingConfiguration" ],
                members: {
                    AutoScalingConfiguration: {
                        shape: "Sm"
                    }
                }
            }
        },
        DeleteConnection: {
            input: {
                type: "structure",
                required: [ "ConnectionArn" ],
                members: {
                    ConnectionArn: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    Connection: {
                        shape: "Sv"
                    }
                }
            }
        },
        DeleteService: {
            input: {
                type: "structure",
                required: [ "ServiceArn" ],
                members: {
                    ServiceArn: {}
                }
            },
            output: {
                type: "structure",
                required: [ "Service", "OperationId" ],
                members: {
                    Service: {
                        shape: "S1u"
                    },
                    OperationId: {}
                }
            }
        },
        DescribeAutoScalingConfiguration: {
            input: {
                type: "structure",
                required: [ "AutoScalingConfigurationArn" ],
                members: {
                    AutoScalingConfigurationArn: {}
                }
            },
            output: {
                type: "structure",
                required: [ "AutoScalingConfiguration" ],
                members: {
                    AutoScalingConfiguration: {
                        shape: "Sm"
                    }
                }
            }
        },
        DescribeCustomDomains: {
            input: {
                type: "structure",
                required: [ "ServiceArn" ],
                members: {
                    ServiceArn: {},
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "DNSTarget", "ServiceArn", "CustomDomains" ],
                members: {
                    DNSTarget: {},
                    ServiceArn: {},
                    CustomDomains: {
                        type: "list",
                        member: {
                            shape: "S7"
                        }
                    },
                    NextToken: {}
                }
            }
        },
        DescribeService: {
            input: {
                type: "structure",
                required: [ "ServiceArn" ],
                members: {
                    ServiceArn: {}
                }
            },
            output: {
                type: "structure",
                required: [ "Service" ],
                members: {
                    Service: {
                        shape: "S1u"
                    }
                }
            }
        },
        DisassociateCustomDomain: {
            input: {
                type: "structure",
                required: [ "ServiceArn", "DomainName" ],
                members: {
                    ServiceArn: {},
                    DomainName: {}
                }
            },
            output: {
                type: "structure",
                required: [ "DNSTarget", "ServiceArn", "CustomDomain" ],
                members: {
                    DNSTarget: {},
                    ServiceArn: {},
                    CustomDomain: {
                        shape: "S7"
                    }
                }
            }
        },
        ListAutoScalingConfigurations: {
            input: {
                type: "structure",
                members: {
                    AutoScalingConfigurationName: {},
                    LatestOnly: {
                        type: "boolean"
                    },
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                required: [ "AutoScalingConfigurationSummaryList" ],
                members: {
                    AutoScalingConfigurationSummaryList: {
                        type: "list",
                        member: {
                            shape: "S1x"
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListConnections: {
            input: {
                type: "structure",
                members: {
                    ConnectionName: {},
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                required: [ "ConnectionSummaryList" ],
                members: {
                    ConnectionSummaryList: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                ConnectionName: {},
                                ConnectionArn: {},
                                ProviderType: {},
                                Status: {},
                                CreatedAt: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListOperations: {
            input: {
                type: "structure",
                required: [ "ServiceArn" ],
                members: {
                    ServiceArn: {},
                    NextToken: {},
                    MaxResults: {
                        type: "integer"
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    OperationSummaryList: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Id: {},
                                Type: {},
                                Status: {},
                                TargetArn: {},
                                StartedAt: {
                                    type: "timestamp"
                                },
                                EndedAt: {
                                    type: "timestamp"
                                },
                                UpdatedAt: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListServices: {
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
                required: [ "ServiceSummaryList" ],
                members: {
                    ServiceSummaryList: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                ServiceName: {},
                                ServiceId: {},
                                ServiceArn: {},
                                ServiceUrl: {},
                                CreatedAt: {
                                    type: "timestamp"
                                },
                                UpdatedAt: {
                                    type: "timestamp"
                                },
                                Status: {}
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
                    Tags: {
                        shape: "Sh"
                    }
                }
            }
        },
        PauseService: {
            input: {
                type: "structure",
                required: [ "ServiceArn" ],
                members: {
                    ServiceArn: {}
                }
            },
            output: {
                type: "structure",
                required: [ "Service" ],
                members: {
                    Service: {
                        shape: "S1u"
                    },
                    OperationId: {}
                }
            }
        },
        ResumeService: {
            input: {
                type: "structure",
                required: [ "ServiceArn" ],
                members: {
                    ServiceArn: {}
                }
            },
            output: {
                type: "structure",
                required: [ "Service" ],
                members: {
                    Service: {
                        shape: "S1u"
                    },
                    OperationId: {}
                }
            }
        },
        StartDeployment: {
            input: {
                type: "structure",
                required: [ "ServiceArn" ],
                members: {
                    ServiceArn: {}
                }
            },
            output: {
                type: "structure",
                required: [ "OperationId" ],
                members: {
                    OperationId: {}
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
                        shape: "Sh"
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
        UpdateService: {
            input: {
                type: "structure",
                required: [ "ServiceArn" ],
                members: {
                    ServiceArn: {},
                    SourceConfiguration: {
                        shape: "Sz"
                    },
                    InstanceConfiguration: {
                        shape: "S1i"
                    },
                    AutoScalingConfigurationArn: {},
                    HealthCheckConfiguration: {
                        shape: "S1n"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "Service", "OperationId" ],
                members: {
                    Service: {
                        shape: "S1u"
                    },
                    OperationId: {}
                }
            }
        }
    },
    shapes: {
        S7: {
            type: "structure",
            required: [ "DomainName", "EnableWWWSubdomain", "Status" ],
            members: {
                DomainName: {},
                EnableWWWSubdomain: {
                    type: "boolean"
                },
                CertificateValidationRecords: {
                    type: "list",
                    member: {
                        type: "structure",
                        members: {
                            Name: {},
                            Type: {},
                            Value: {},
                            Status: {}
                        }
                    }
                },
                Status: {}
            }
        },
        Sh: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    Key: {},
                    Value: {}
                }
            }
        },
        Sm: {
            type: "structure",
            members: {
                AutoScalingConfigurationArn: {},
                AutoScalingConfigurationName: {},
                AutoScalingConfigurationRevision: {
                    type: "integer"
                },
                Latest: {
                    type: "boolean"
                },
                Status: {},
                MaxConcurrency: {
                    type: "integer"
                },
                MinSize: {
                    type: "integer"
                },
                MaxSize: {
                    type: "integer"
                },
                CreatedAt: {
                    type: "timestamp"
                },
                DeletedAt: {
                    type: "timestamp"
                }
            }
        },
        Sv: {
            type: "structure",
            members: {
                ConnectionName: {},
                ConnectionArn: {},
                ProviderType: {},
                Status: {},
                CreatedAt: {
                    type: "timestamp"
                }
            }
        },
        Sz: {
            type: "structure",
            members: {
                CodeRepository: {
                    type: "structure",
                    required: [ "RepositoryUrl", "SourceCodeVersion" ],
                    members: {
                        RepositoryUrl: {},
                        SourceCodeVersion: {
                            type: "structure",
                            required: [ "Type", "Value" ],
                            members: {
                                Type: {},
                                Value: {}
                            }
                        },
                        CodeConfiguration: {
                            type: "structure",
                            required: [ "ConfigurationSource" ],
                            members: {
                                ConfigurationSource: {},
                                CodeConfigurationValues: {
                                    type: "structure",
                                    required: [ "Runtime" ],
                                    members: {
                                        Runtime: {},
                                        BuildCommand: {
                                            type: "string",
                                            sensitive: true
                                        },
                                        StartCommand: {
                                            type: "string",
                                            sensitive: true
                                        },
                                        Port: {},
                                        RuntimeEnvironmentVariables: {
                                            shape: "S19"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                ImageRepository: {
                    type: "structure",
                    required: [ "ImageIdentifier", "ImageRepositoryType" ],
                    members: {
                        ImageIdentifier: {},
                        ImageConfiguration: {
                            type: "structure",
                            members: {
                                RuntimeEnvironmentVariables: {
                                    shape: "S19"
                                },
                                StartCommand: {},
                                Port: {}
                            }
                        },
                        ImageRepositoryType: {}
                    }
                },
                AutoDeploymentsEnabled: {
                    type: "boolean"
                },
                AuthenticationConfiguration: {
                    type: "structure",
                    members: {
                        ConnectionArn: {},
                        AccessRoleArn: {}
                    }
                }
            }
        },
        S19: {
            type: "map",
            key: {
                type: "string",
                sensitive: true
            },
            value: {
                type: "string",
                sensitive: true
            }
        },
        S1i: {
            type: "structure",
            members: {
                Cpu: {},
                Memory: {},
                InstanceRoleArn: {}
            }
        },
        S1l: {
            type: "structure",
            required: [ "KmsKey" ],
            members: {
                KmsKey: {}
            }
        },
        S1n: {
            type: "structure",
            members: {
                Protocol: {},
                Path: {},
                Interval: {
                    type: "integer"
                },
                Timeout: {
                    type: "integer"
                },
                HealthyThreshold: {
                    type: "integer"
                },
                UnhealthyThreshold: {
                    type: "integer"
                }
            }
        },
        S1u: {
            type: "structure",
            required: [ "ServiceName", "ServiceId", "ServiceArn", "ServiceUrl", "CreatedAt", "UpdatedAt", "Status", "SourceConfiguration", "InstanceConfiguration", "AutoScalingConfigurationSummary" ],
            members: {
                ServiceName: {},
                ServiceId: {},
                ServiceArn: {},
                ServiceUrl: {},
                CreatedAt: {
                    type: "timestamp"
                },
                UpdatedAt: {
                    type: "timestamp"
                },
                DeletedAt: {
                    type: "timestamp"
                },
                Status: {},
                SourceConfiguration: {
                    shape: "Sz"
                },
                InstanceConfiguration: {
                    shape: "S1i"
                },
                EncryptionConfiguration: {
                    shape: "S1l"
                },
                HealthCheckConfiguration: {
                    shape: "S1n"
                },
                AutoScalingConfigurationSummary: {
                    shape: "S1x"
                }
            }
        },
        S1x: {
            type: "structure",
            members: {
                AutoScalingConfigurationArn: {},
                AutoScalingConfigurationName: {},
                AutoScalingConfigurationRevision: {
                    type: "integer"
                }
            }
        }
    },
    paginators: {
        DescribeCustomDomains: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListAutoScalingConfigurations: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListConnections: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListOperations: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        },
        ListServices: {
            input_token: "NextToken",
            output_token: "NextToken",
            limit_key: "MaxResults"
        }
    }
};