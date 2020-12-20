

AWS.apiLoader.services["devopsguru"] = {};

AWS.DevOpsGuru = AWS.Service.defineService("devopsguru", [ "2020-12-01" ]);

AWS.apiLoader.services["devopsguru"]["2020-12-01"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2020-12-01",
        endpointPrefix: "devops-guru",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceFullName: "Amazon DevOps Guru",
        serviceId: "DevOps Guru",
        signatureVersion: "v4",
        signingName: "devops-guru",
        uid: "devops-guru-2020-12-01"
    },
    operations: {
        AddNotificationChannel: {
            http: {
                method: "PUT",
                requestUri: "/channels",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "Config" ],
                members: {
                    Config: {
                        shape: "S2"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "Id" ],
                members: {
                    Id: {}
                }
            }
        },
        DescribeAccountHealth: {
            http: {
                method: "GET",
                requestUri: "/accounts/health",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {}
            },
            output: {
                type: "structure",
                required: [ "OpenReactiveInsights", "OpenProactiveInsights", "MetricsAnalyzed" ],
                members: {
                    OpenReactiveInsights: {
                        type: "integer"
                    },
                    OpenProactiveInsights: {
                        type: "integer"
                    },
                    MetricsAnalyzed: {
                        type: "integer"
                    }
                }
            }
        },
        DescribeAccountOverview: {
            http: {
                requestUri: "/accounts/overview",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "FromTime" ],
                members: {
                    FromTime: {
                        type: "timestamp"
                    },
                    ToTime: {
                        type: "timestamp"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "ReactiveInsights", "ProactiveInsights", "MeanTimeToRecoverInMilliseconds" ],
                members: {
                    ReactiveInsights: {
                        type: "integer"
                    },
                    ProactiveInsights: {
                        type: "integer"
                    },
                    MeanTimeToRecoverInMilliseconds: {
                        type: "long"
                    }
                }
            }
        },
        DescribeAnomaly: {
            http: {
                method: "GET",
                requestUri: "/anomalies/{Id}",
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
                    ProactiveAnomaly: {
                        type: "structure",
                        members: {
                            Id: {},
                            Severity: {},
                            Status: {},
                            UpdateTime: {
                                type: "timestamp"
                            },
                            AnomalyTimeRange: {
                                shape: "So"
                            },
                            PredictionTimeRange: {
                                shape: "Sp"
                            },
                            SourceDetails: {
                                shape: "Sq"
                            },
                            AssociatedInsightId: {},
                            ResourceCollection: {
                                shape: "S13"
                            },
                            Limit: {
                                type: "double"
                            }
                        }
                    },
                    ReactiveAnomaly: {
                        type: "structure",
                        members: {
                            Id: {},
                            Severity: {},
                            Status: {},
                            AnomalyTimeRange: {
                                shape: "So"
                            },
                            SourceDetails: {
                                shape: "Sq"
                            },
                            AssociatedInsightId: {},
                            ResourceCollection: {
                                shape: "S13"
                            }
                        }
                    }
                }
            }
        },
        DescribeInsight: {
            http: {
                method: "GET",
                requestUri: "/insights/{Id}",
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
                    ProactiveInsight: {
                        type: "structure",
                        members: {
                            Id: {},
                            Name: {},
                            Severity: {},
                            Status: {},
                            InsightTimeRange: {
                                shape: "S1f"
                            },
                            PredictionTimeRange: {
                                shape: "Sp"
                            },
                            ResourceCollection: {
                                shape: "S13"
                            },
                            SsmOpsItemId: {}
                        }
                    },
                    ReactiveInsight: {
                        type: "structure",
                        members: {
                            Id: {},
                            Name: {},
                            Severity: {},
                            Status: {},
                            InsightTimeRange: {
                                shape: "S1f"
                            },
                            ResourceCollection: {
                                shape: "S13"
                            },
                            SsmOpsItemId: {}
                        }
                    }
                }
            }
        },
        DescribeResourceCollectionHealth: {
            http: {
                method: "GET",
                requestUri: "/accounts/health/resource-collection/{ResourceCollectionType}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "ResourceCollectionType" ],
                members: {
                    ResourceCollectionType: {
                        location: "uri",
                        locationName: "ResourceCollectionType"
                    },
                    NextToken: {
                        location: "querystring",
                        locationName: "NextToken"
                    }
                }
            },
            output: {
                type: "structure",
                required: [ "CloudFormation" ],
                members: {
                    CloudFormation: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                StackName: {},
                                Insight: {
                                    type: "structure",
                                    members: {
                                        OpenProactiveInsights: {
                                            type: "integer"
                                        },
                                        OpenReactiveInsights: {
                                            type: "integer"
                                        },
                                        MeanTimeToRecoverInMilliseconds: {
                                            type: "long"
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
        DescribeServiceIntegration: {
            http: {
                method: "GET",
                requestUri: "/service-integrations",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {}
            },
            output: {
                type: "structure",
                members: {
                    ServiceIntegration: {
                        type: "structure",
                        members: {
                            OpsCenter: {
                                type: "structure",
                                members: {
                                    OptInStatus: {}
                                }
                            }
                        }
                    }
                }
            }
        },
        GetResourceCollection: {
            http: {
                method: "GET",
                requestUri: "/resource-collections/{ResourceCollectionType}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "ResourceCollectionType" ],
                members: {
                    ResourceCollectionType: {
                        location: "uri",
                        locationName: "ResourceCollectionType"
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
                    ResourceCollection: {
                        type: "structure",
                        members: {
                            CloudFormation: {
                                type: "structure",
                                members: {
                                    StackNames: {
                                        shape: "S15"
                                    }
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListAnomaliesForInsight: {
            http: {
                requestUri: "/anomalies/insight/{InsightId}",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "InsightId" ],
                members: {
                    InsightId: {
                        location: "uri",
                        locationName: "InsightId"
                    },
                    StartTimeRange: {
                        shape: "S1z"
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
                    ProactiveAnomalies: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Id: {},
                                Severity: {},
                                Status: {},
                                UpdateTime: {
                                    type: "timestamp"
                                },
                                AnomalyTimeRange: {
                                    shape: "So"
                                },
                                PredictionTimeRange: {
                                    shape: "Sp"
                                },
                                SourceDetails: {
                                    shape: "Sq"
                                },
                                AssociatedInsightId: {},
                                ResourceCollection: {
                                    shape: "S13"
                                },
                                Limit: {
                                    type: "double"
                                }
                            }
                        }
                    },
                    ReactiveAnomalies: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Id: {},
                                Severity: {},
                                Status: {},
                                AnomalyTimeRange: {
                                    shape: "So"
                                },
                                SourceDetails: {
                                    shape: "Sq"
                                },
                                AssociatedInsightId: {},
                                ResourceCollection: {
                                    shape: "S13"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListEvents: {
            http: {
                requestUri: "/events",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "Filters" ],
                members: {
                    Filters: {
                        type: "structure",
                        members: {
                            InsightId: {},
                            EventTimeRange: {
                                type: "structure",
                                required: [ "FromTime", "ToTime" ],
                                members: {
                                    FromTime: {
                                        type: "timestamp"
                                    },
                                    ToTime: {
                                        type: "timestamp"
                                    }
                                }
                            },
                            EventClass: {},
                            EventSource: {},
                            DataSource: {},
                            ResourceCollection: {
                                shape: "S13"
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
                required: [ "Events" ],
                members: {
                    Events: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                ResourceCollection: {
                                    shape: "S13"
                                },
                                Id: {},
                                Time: {
                                    type: "timestamp"
                                },
                                EventSource: {},
                                Name: {},
                                DataSource: {},
                                EventClass: {},
                                Resources: {
                                    type: "list",
                                    member: {
                                        type: "structure",
                                        members: {
                                            Type: {},
                                            Name: {},
                                            Arn: {}
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
        ListInsights: {
            http: {
                requestUri: "/insights",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "StatusFilter" ],
                members: {
                    StatusFilter: {
                        type: "structure",
                        members: {
                            Ongoing: {
                                type: "structure",
                                required: [ "Type" ],
                                members: {
                                    Type: {}
                                }
                            },
                            Closed: {
                                type: "structure",
                                required: [ "Type", "EndTimeRange" ],
                                members: {
                                    Type: {},
                                    EndTimeRange: {
                                        type: "structure",
                                        members: {
                                            FromTime: {
                                                type: "timestamp"
                                            },
                                            ToTime: {
                                                type: "timestamp"
                                            }
                                        }
                                    }
                                }
                            },
                            Any: {
                                type: "structure",
                                required: [ "Type", "StartTimeRange" ],
                                members: {
                                    Type: {},
                                    StartTimeRange: {
                                        shape: "S1z"
                                    }
                                }
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
                    ProactiveInsights: {
                        shape: "S2w"
                    },
                    ReactiveInsights: {
                        shape: "S2y"
                    },
                    NextToken: {}
                }
            }
        },
        ListNotificationChannels: {
            http: {
                requestUri: "/channels",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    Channels: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Id: {},
                                Config: {
                                    shape: "S2"
                                }
                            }
                        }
                    },
                    NextToken: {}
                }
            }
        },
        ListRecommendations: {
            http: {
                requestUri: "/recommendations",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "InsightId" ],
                members: {
                    InsightId: {},
                    NextToken: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    Recommendations: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                Description: {},
                                Link: {},
                                Name: {},
                                Reason: {},
                                RelatedEvents: {
                                    type: "list",
                                    member: {
                                        type: "structure",
                                        members: {
                                            Name: {},
                                            Resources: {
                                                type: "list",
                                                member: {
                                                    type: "structure",
                                                    members: {
                                                        Name: {},
                                                        Type: {}
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                RelatedAnomalies: {
                                    type: "list",
                                    member: {
                                        type: "structure",
                                        members: {
                                            Resources: {
                                                type: "list",
                                                member: {
                                                    type: "structure",
                                                    members: {
                                                        Name: {},
                                                        Type: {}
                                                    }
                                                }
                                            },
                                            SourceDetails: {
                                                type: "list",
                                                member: {
                                                    type: "structure",
                                                    members: {
                                                        CloudWatchMetrics: {
                                                            type: "list",
                                                            member: {
                                                                type: "structure",
                                                                members: {
                                                                    MetricName: {},
                                                                    Namespace: {}
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
                    NextToken: {}
                }
            }
        },
        PutFeedback: {
            http: {
                method: "PUT",
                requestUri: "/feedback",
                responseCode: 200
            },
            input: {
                type: "structure",
                members: {
                    InsightFeedback: {
                        type: "structure",
                        members: {
                            Id: {},
                            Feedback: {}
                        }
                    }
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        RemoveNotificationChannel: {
            http: {
                method: "DELETE",
                requestUri: "/channels/{Id}",
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
                members: {}
            }
        },
        SearchInsights: {
            http: {
                requestUri: "/insights/search",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "StartTimeRange", "Type" ],
                members: {
                    StartTimeRange: {
                        shape: "S1z"
                    },
                    Filters: {
                        type: "structure",
                        members: {
                            Severities: {
                                type: "list",
                                member: {}
                            },
                            Statuses: {
                                type: "list",
                                member: {}
                            },
                            ResourceCollection: {
                                shape: "S13"
                            }
                        }
                    },
                    MaxResults: {
                        type: "integer"
                    },
                    NextToken: {},
                    Type: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    ProactiveInsights: {
                        shape: "S2w"
                    },
                    ReactiveInsights: {
                        shape: "S2y"
                    },
                    NextToken: {}
                }
            }
        },
        UpdateResourceCollection: {
            http: {
                method: "PUT",
                requestUri: "/resource-collections",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "Action", "ResourceCollection" ],
                members: {
                    Action: {},
                    ResourceCollection: {
                        type: "structure",
                        members: {
                            CloudFormation: {
                                type: "structure",
                                members: {
                                    StackNames: {
                                        type: "list",
                                        member: {}
                                    }
                                }
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
        UpdateServiceIntegration: {
            http: {
                method: "PUT",
                requestUri: "/service-integrations",
                responseCode: 200
            },
            input: {
                type: "structure",
                required: [ "ServiceIntegration" ],
                members: {
                    ServiceIntegration: {
                        type: "structure",
                        members: {
                            OpsCenter: {
                                type: "structure",
                                members: {
                                    OptInStatus: {}
                                }
                            }
                        }
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
            required: [ "Sns" ],
            members: {
                Sns: {
                    type: "structure",
                    members: {
                        TopicArn: {}
                    }
                }
            }
        },
        So: {
            type: "structure",
            required: [ "StartTime" ],
            members: {
                StartTime: {
                    type: "timestamp"
                },
                EndTime: {
                    type: "timestamp"
                }
            }
        },
        Sp: {
            type: "structure",
            required: [ "StartTime" ],
            members: {
                StartTime: {
                    type: "timestamp"
                },
                EndTime: {
                    type: "timestamp"
                }
            }
        },
        Sq: {
            type: "structure",
            members: {
                CloudWatchMetrics: {
                    type: "list",
                    member: {
                        type: "structure",
                        members: {
                            MetricName: {},
                            Namespace: {},
                            Dimensions: {
                                type: "list",
                                member: {
                                    type: "structure",
                                    members: {
                                        Name: {},
                                        Value: {}
                                    }
                                }
                            },
                            Stat: {},
                            Unit: {},
                            Period: {
                                type: "integer"
                            }
                        }
                    }
                }
            }
        },
        S13: {
            type: "structure",
            members: {
                CloudFormation: {
                    type: "structure",
                    members: {
                        StackNames: {
                            shape: "S15"
                        }
                    }
                }
            }
        },
        S15: {
            type: "list",
            member: {}
        },
        S1f: {
            type: "structure",
            required: [ "StartTime" ],
            members: {
                StartTime: {
                    type: "timestamp"
                },
                EndTime: {
                    type: "timestamp"
                }
            }
        },
        S1z: {
            type: "structure",
            members: {
                FromTime: {
                    type: "timestamp"
                },
                ToTime: {
                    type: "timestamp"
                }
            }
        },
        S2w: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    Id: {},
                    Name: {},
                    Severity: {},
                    Status: {},
                    InsightTimeRange: {
                        shape: "S1f"
                    },
                    PredictionTimeRange: {
                        shape: "Sp"
                    },
                    ResourceCollection: {
                        shape: "S13"
                    }
                }
            }
        },
        S2y: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    Id: {},
                    Name: {},
                    Severity: {},
                    Status: {},
                    InsightTimeRange: {
                        shape: "S1f"
                    },
                    ResourceCollection: {
                        shape: "S13"
                    }
                }
            }
        }
    },
    paginators: {
        DescribeResourceCollectionHealth: {
            input_token: "NextToken",
            output_token: "NextToken",
            result_key: [ "CloudFormation" ]
        },
        GetResourceCollection: {
            input_token: "NextToken",
            non_aggregate_keys: [ "ResourceCollection" ],
            output_token: "NextToken",
            result_key: [ "ResourceCollection.CloudFormation.StackNames" ]
        },
        ListAnomaliesForInsight: {
            input_token: "NextToken",
            limit_key: "MaxResults",
            output_token: "NextToken",
            result_key: [ "ReactiveAnomalies", "ProactiveAnomalies" ]
        },
        ListEvents: {
            input_token: "NextToken",
            limit_key: "MaxResults",
            output_token: "NextToken",
            result_key: "Events"
        },
        ListInsights: {
            input_token: "NextToken",
            limit_key: "MaxResults",
            output_token: "NextToken",
            result_key: [ "ProactiveInsights", "ReactiveInsights" ]
        },
        ListNotificationChannels: {
            input_token: "NextToken",
            output_token: "NextToken",
            result_key: "Channels"
        },
        ListRecommendations: {
            input_token: "NextToken",
            output_token: "NextToken",
            result_key: "Recommendations"
        },
        SearchInsights: {
            input_token: "NextToken",
            limit_key: "MaxResults",
            output_token: "NextToken",
            result_key: [ "ProactiveInsights", "ReactiveInsights" ]
        }
    }
};

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
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    repository: {
                        shape: "S17"
                    },
                    catalogData: {
                        shape: "S1b"
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
                        shape: "S17"
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
                            shape: "S17"
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
                        shape: "S2k"
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
                        shape: "S1b"
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
                        shape: "S2k"
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
                        shape: "S1b"
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
        S17: {
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
        S1b: {
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
        S2k: {
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
                    Description: {
                        shape: "Sh"
                    },
                    ClientToken: {
                        idempotencyToken: true,
                        location: "header",
                        locationName: "X-Amzn-Client-Token"
                    },
                    OutputConfig: {
                        shape: "Sp"
                    },
                    KmsKeyId: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    ModelMetadata: {
                        shape: "Sv"
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
                        shape: "Sy"
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
                        shape: "Sh"
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
                        locationName: "content-type"
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
                            shape: "Sv"
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
                            shape: "Sy"
                        }
                    },
                    NextToken: {}
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
        Sh: {
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
                    shape: "Sn"
                },
                OutputConfig: {
                    shape: "Sp"
                },
                EvaluationManifest: {
                    shape: "Ss"
                },
                EvaluationResult: {
                    shape: "Ss"
                },
                EvaluationEndTimestamp: {
                    type: "timestamp"
                },
                KmsKeyId: {}
            }
        },
        Sn: {
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
        Sp: {
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
        Ss: {
            type: "structure",
            required: [ "Bucket", "Key" ],
            members: {
                Bucket: {},
                Key: {}
            }
        },
        Sv: {
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
                    shape: "Sn"
                }
            }
        },
        Sy: {
            type: "structure",
            members: {
                ProjectArn: {},
                ProjectName: {},
                CreationTimestamp: {
                    type: "timestamp"
                }
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
                    Tags: {
                        shape: "Sb"
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
                    CreatedAt: {
                        type: "timestamp"
                    },
                    LastUpdatedAt: {
                        type: "timestamp"
                    },
                    Tags: {
                        shape: "Sb"
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
                        shape: "Sk"
                    },
                    ShippingAddress: {
                        shape: "Sk"
                    },
                    MailingAddress: {
                        shape: "Sk"
                    },
                    BillingAddress: {
                        shape: "Sk"
                    },
                    Attributes: {
                        shape: "Sl"
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
                required: [ "DomainName" ],
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
                    CreatedAt: {
                        type: "timestamp"
                    },
                    LastUpdatedAt: {
                        type: "timestamp"
                    },
                    Tags: {
                        shape: "Sb"
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
                required: [ "DomainName" ],
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
                        shape: "Sb"
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
                        shape: "S1b"
                    },
                    Keys: {
                        shape: "S1e"
                    },
                    CreatedAt: {
                        type: "timestamp"
                    },
                    LastUpdatedAt: {
                        type: "timestamp"
                    },
                    Tags: {
                        shape: "Sb"
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
                        shape: "S1b"
                    },
                    Keys: {
                        shape: "S1e"
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
                        shape: "S1q"
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
                                    shape: "Sb"
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
                        shape: "S1q"
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
                                    shape: "Sb"
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
                        shape: "Sb"
                    }
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
                required: [ "DomainName", "Uri", "ObjectTypeName" ],
                members: {
                    DomainName: {
                        location: "uri",
                        locationName: "DomainName"
                    },
                    Uri: {},
                    ObjectTypeName: {},
                    Tags: {
                        shape: "Sb"
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
                        shape: "Sb"
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
                        shape: "S1b"
                    },
                    Keys: {
                        shape: "S1e"
                    },
                    Tags: {
                        shape: "Sb"
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
                        shape: "S1b"
                    },
                    Keys: {
                        shape: "S1e"
                    },
                    CreatedAt: {
                        type: "timestamp"
                    },
                    LastUpdatedAt: {
                        type: "timestamp"
                    },
                    Tags: {
                        shape: "Sb"
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
                                    shape: "Sk"
                                },
                                ShippingAddress: {
                                    shape: "Sk"
                                },
                                MailingAddress: {
                                    shape: "Sk"
                                },
                                BillingAddress: {
                                    shape: "Sk"
                                },
                                Attributes: {
                                    shape: "Sl"
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
                        shape: "Sb"
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
                    Tags: {
                        shape: "Sb"
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
                    CreatedAt: {
                        type: "timestamp"
                    },
                    LastUpdatedAt: {
                        type: "timestamp"
                    },
                    Tags: {
                        shape: "Sb"
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
                        shape: "S2y"
                    },
                    ShippingAddress: {
                        shape: "S2y"
                    },
                    MailingAddress: {
                        shape: "S2y"
                    },
                    BillingAddress: {
                        shape: "S2y"
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
            type: "map",
            key: {},
            value: {}
        },
        Sk: {
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
        Sl: {
            type: "map",
            key: {},
            value: {}
        },
        S1b: {
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
        S1e: {
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
        S1q: {
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
                        shape: "Sb"
                    }
                }
            }
        },
        S2y: {
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
                            members: {
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
                type: "structure",
                members: {
                    roleType: {},
                    roleArn: {}
                }
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
                lastUpdatedBy: {}
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
                        location: "querystring",
                        locationName: "createdBefore",
                        type: "timestamp"
                    },
                    createdAfter: {
                        location: "querystring",
                        locationName: "createdAfter",
                        type: "timestamp"
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
                        location: "querystring",
                        locationName: "createdBefore",
                        type: "timestamp"
                    },
                    createdAfter: {
                        location: "querystring",
                        locationName: "createdAfter",
                        type: "timestamp"
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
                        location: "querystring",
                        locationName: "createdAfter",
                        type: "timestamp"
                    },
                    createdBefore: {
                        location: "querystring",
                        locationName: "createdBefore",
                        type: "timestamp"
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
                    type: "timestamp"
                },
                createdBy: {},
                finishedAt: {
                    type: "timestamp"
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
                    type: "timestamp"
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
                    type: "timestamp"
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
                                shape: "Sp"
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
        StartFHIRImportJob: {
            input: {
                type: "structure",
                required: [ "InputDataConfig", "DatastoreId", "DataAccessRoleArn", "ClientToken" ],
                members: {
                    JobName: {},
                    InputDataConfig: {
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
        ListTestCases: {
            http: {
                method: "GET",
                requestUri: "/testCases"
            },
            input: {
                type: "structure",
                members: {
                    intendedForQualification: {
                        location: "querystring",
                        locationName: "intendedForQualification",
                        type: "boolean"
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
                    categories: {
                        type: "list",
                        member: {
                            type: "structure",
                            members: {
                                name: {},
                                tests: {
                                    type: "list",
                                    member: {
                                        type: "structure",
                                        members: {
                                            name: {},
                                            configuration: {
                                                shape: "S1p"
                                            },
                                            test: {
                                                type: "structure",
                                                members: {
                                                    id: {},
                                                    testCaseVersion: {}
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    rootGroupConfiguration: {
                        shape: "S1p"
                    },
                    groupConfiguration: {
                        shape: "S1p"
                    },
                    nextToken: {}
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
                secondaryDevice: {
                    shape: "S5"
                },
                selectedTestList: {
                    type: "list",
                    member: {}
                }
            }
        },
        S1p: {
            type: "map",
            key: {},
            value: {}
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
        },
        ListTestCases: {
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
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Sidewalk: {
                        shape: "S2"
                    }
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
                        shape: "Sn"
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
                        shape: "Sv"
                    },
                    Tags: {
                        shape: "Sn"
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
                        shape: "Sn"
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
                        shape: "S1t"
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
                        shape: "S2f"
                    },
                    Tags: {
                        shape: "Sn"
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
                        shape: "S2q"
                    },
                    ClientRequestToken: {
                        idempotencyToken: true
                    }
                }
            },
            output: {
                type: "structure",
                members: {
                    Id: {}
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
                        shape: "Sv"
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
                        shape: "S3u"
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
                        shape: "S1t"
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
                        shape: "S2f"
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
                    IotCertificateId: {}
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
                                shape: "S2v"
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
                    LastUplinkReceivedAt: {}
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
                        shape: "S2q"
                    }
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
                            shape: "S3u"
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
                        shape: "Sn"
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
                                        AmazonId: {}
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
                                            shape: "S2v"
                                        },
                                        UpdateVersion: {
                                            shape: "S2v"
                                        }
                                    }
                                }
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
                                    shape: "S2f"
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
                                    }
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
                        shape: "Sn"
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
                    Description: {}
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
        Sn: {
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
        Sv: {
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
        S1t: {
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
        S2f: {
            type: "structure",
            members: {
                GatewayEui: {},
                RfRegion: {}
            }
        },
        S2q: {
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
                            shape: "S2v"
                        },
                        UpdateVersion: {
                            shape: "S2v"
                        }
                    }
                }
            }
        },
        S2v: {
            type: "structure",
            members: {
                PackageVersion: {},
                Model: {},
                Station: {}
            }
        },
        S3u: {
            type: "structure",
            members: {
                AmazonId: {},
                AppServerPrivateKey: {
                    shape: "S4"
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
                    PricingPlan: {}
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
                required: [ "CollectionArn", "CollectionName", "CreateTime", "Description", "UpdateTime" ],
                members: {
                    CollectionArn: {},
                    CollectionName: {},
                    CreateTime: {
                        shape: "Sj"
                    },
                    Description: {},
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
                required: [ "Configuration", "CreateTime", "DataSource", "Description", "MapArn", "MapName", "UpdateTime" ],
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
                required: [ "CreateTime", "DataSource", "DataSourceConfiguration", "Description", "IndexArn", "IndexName", "UpdateTime" ],
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
                required: [ "CreateTime", "Description", "TrackerArn", "TrackerName", "UpdateTime" ],
                members: {
                    CreateTime: {
                        shape: "Sj"
                    },
                    Description: {},
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
                            required: [ "CollectionName", "CreateTime", "Description", "UpdateTime" ],
                            members: {
                                CollectionName: {},
                                CreateTime: {
                                    shape: "Sj"
                                },
                                Description: {},
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
                            required: [ "CreateTime", "DataSource", "Description", "MapName", "UpdateTime" ],
                            members: {
                                CreateTime: {
                                    shape: "Sj"
                                },
                                DataSource: {},
                                Description: {},
                                MapName: {},
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
                            required: [ "CreateTime", "DataSource", "Description", "IndexName", "UpdateTime" ],
                            members: {
                                CreateTime: {
                                    shape: "Sj"
                                },
                                DataSource: {},
                                Description: {},
                                IndexName: {},
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
                            required: [ "CreateTime", "Description", "TrackerName", "UpdateTime" ],
                            members: {
                                CreateTime: {
                                    shape: "Sj"
                                },
                                Description: {},
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
                        shape: "S15"
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
                        shape: "S1k"
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
                                shape: "S2a"
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
                        shape: "S2a"
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
                                    shape: "S1a"
                                },
                                SelectedChoices: {
                                    shape: "S1f"
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
                                    shape: "S1r"
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
                                    shape: "S34"
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
                            shape: "S34"
                        }
                    },
                    NextToken: {}
                }
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
                        shape: "S1f"
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
                        shape: "S15"
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
                        shape: "S1k"
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
                        shape: "S2a"
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
        S15: {
            type: "structure",
            members: {
                QuestionId: {},
                PillarId: {},
                QuestionTitle: {},
                QuestionDescription: {},
                ImprovementPlanUrl: {},
                HelpfulResourceUrl: {},
                Choices: {
                    shape: "S1a"
                },
                SelectedChoices: {
                    shape: "S1f"
                },
                IsApplicable: {
                    type: "boolean"
                },
                Risk: {},
                Notes: {}
            }
        },
        S1a: {
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
        S1f: {
            type: "list",
            member: {}
        },
        S1k: {
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
                                shape: "S1r"
                            }
                        }
                    }
                },
                UpdatedAt: {
                    type: "timestamp"
                },
                Notes: {},
                RiskCounts: {
                    shape: "S1r"
                },
                NextToken: {}
            }
        },
        S1r: {
            type: "map",
            key: {},
            value: {
                type: "integer"
            }
        },
        S2a: {
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
                    shape: "S1r"
                },
                PillarPriorities: {
                    shape: "Sk"
                },
                Lenses: {
                    shape: "Sq"
                },
                Owner: {},
                ShareInvitationId: {}
            }
        },
        S34: {
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
                    shape: "S1r"
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