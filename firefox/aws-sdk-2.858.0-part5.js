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
    99: [ function(require, module, exports) {
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
}, {}, [ 99 ]);

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
                        shape: "S1n"
                    },
                    dialogCodeHook: {
                        shape: "S1q"
                    },
                    fulfillmentCodeHook: {
                        shape: "S1r"
                    },
                    intentConfirmationSetting: {
                        shape: "S1s"
                    },
                    intentClosingSetting: {
                        shape: "S2e"
                    },
                    inputContexts: {
                        shape: "S2f"
                    },
                    outputContexts: {
                        shape: "S2h"
                    },
                    kendraConfiguration: {
                        shape: "S2l"
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
                        shape: "S1n"
                    },
                    dialogCodeHook: {
                        shape: "S1q"
                    },
                    fulfillmentCodeHook: {
                        shape: "S1r"
                    },
                    intentConfirmationSetting: {
                        shape: "S1s"
                    },
                    intentClosingSetting: {
                        shape: "S2e"
                    },
                    inputContexts: {
                        shape: "S2f"
                    },
                    outputContexts: {
                        shape: "S2h"
                    },
                    kendraConfiguration: {
                        shape: "S2l"
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
                        shape: "S2r"
                    },
                    obfuscationSetting: {
                        shape: "S31"
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
                        shape: "S2r"
                    },
                    obfuscationSetting: {
                        shape: "S31"
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
                        shape: "S35"
                    },
                    valueSelectionSetting: {
                        shape: "S3a"
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
                        shape: "S35"
                    },
                    valueSelectionSetting: {
                        shape: "S3a"
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
                        shape: "S41"
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
                        shape: "S41"
                    },
                    creationDateTime: {
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
                        shape: "S1n"
                    },
                    dialogCodeHook: {
                        shape: "S1q"
                    },
                    fulfillmentCodeHook: {
                        shape: "S1r"
                    },
                    slotPriorities: {
                        shape: "S4a"
                    },
                    intentConfirmationSetting: {
                        shape: "S1s"
                    },
                    intentClosingSetting: {
                        shape: "S2e"
                    },
                    inputContexts: {
                        shape: "S2f"
                    },
                    outputContexts: {
                        shape: "S2h"
                    },
                    kendraConfiguration: {
                        shape: "S2l"
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
                        shape: "S2r"
                    },
                    obfuscationSetting: {
                        shape: "S31"
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
                        shape: "S35"
                    },
                    valueSelectionSetting: {
                        shape: "S3a"
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
                                    shape: "S4u"
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
                                    shape: "S4u"
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
                                    shape: "S4u"
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
                                    shape: "S2f"
                                },
                                outputContexts: {
                                    shape: "S2h"
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
                                    shape: "S4u"
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
                                    shape: "S4u"
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
                                    shape: "S1t"
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
                        shape: "S41"
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
                        shape: "S1n"
                    },
                    dialogCodeHook: {
                        shape: "S1q"
                    },
                    fulfillmentCodeHook: {
                        shape: "S1r"
                    },
                    slotPriorities: {
                        shape: "S4a"
                    },
                    intentConfirmationSetting: {
                        shape: "S1s"
                    },
                    intentClosingSetting: {
                        shape: "S2e"
                    },
                    inputContexts: {
                        shape: "S2f"
                    },
                    outputContexts: {
                        shape: "S2h"
                    },
                    kendraConfiguration: {
                        shape: "S2l"
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
                        shape: "S1n"
                    },
                    dialogCodeHook: {
                        shape: "S1q"
                    },
                    fulfillmentCodeHook: {
                        shape: "S1r"
                    },
                    slotPriorities: {
                        shape: "S4a"
                    },
                    intentConfirmationSetting: {
                        shape: "S1s"
                    },
                    intentClosingSetting: {
                        shape: "S2e"
                    },
                    inputContexts: {
                        shape: "S2f"
                    },
                    outputContexts: {
                        shape: "S2h"
                    },
                    kendraConfiguration: {
                        shape: "S2l"
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
                        shape: "S2r"
                    },
                    obfuscationSetting: {
                        shape: "S31"
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
                        shape: "S2r"
                    },
                    obfuscationSetting: {
                        shape: "S31"
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
                        shape: "S35"
                    },
                    valueSelectionSetting: {
                        shape: "S3a"
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
                        shape: "S35"
                    },
                    valueSelectionSetting: {
                        shape: "S3a"
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
        S1n: {
            type: "list",
            member: {
                type: "structure",
                required: [ "utterance" ],
                members: {
                    utterance: {}
                }
            }
        },
        S1q: {
            type: "structure",
            required: [ "enabled" ],
            members: {
                enabled: {
                    type: "boolean"
                }
            }
        },
        S1r: {
            type: "structure",
            required: [ "enabled" ],
            members: {
                enabled: {
                    type: "boolean"
                }
            }
        },
        S1s: {
            type: "structure",
            required: [ "promptSpecification", "declinationResponse" ],
            members: {
                promptSpecification: {
                    shape: "S1t"
                },
                declinationResponse: {
                    shape: "S2d"
                }
            }
        },
        S1t: {
            type: "structure",
            required: [ "messageGroups", "maxRetries" ],
            members: {
                messageGroups: {
                    shape: "S1u"
                },
                maxRetries: {
                    type: "integer"
                },
                allowInterrupt: {
                    type: "boolean"
                }
            }
        },
        S1u: {
            type: "list",
            member: {
                type: "structure",
                required: [ "message" ],
                members: {
                    message: {
                        shape: "S1w"
                    },
                    variations: {
                        type: "list",
                        member: {
                            shape: "S1w"
                        }
                    }
                }
            }
        },
        S1w: {
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
        S2d: {
            type: "structure",
            required: [ "messageGroups" ],
            members: {
                messageGroups: {
                    shape: "S1u"
                },
                allowInterrupt: {
                    type: "boolean"
                }
            }
        },
        S2e: {
            type: "structure",
            required: [ "closingResponse" ],
            members: {
                closingResponse: {
                    shape: "S2d"
                }
            }
        },
        S2f: {
            type: "list",
            member: {
                type: "structure",
                required: [ "name" ],
                members: {
                    name: {}
                }
            }
        },
        S2h: {
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
        S2l: {
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
        S2r: {
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
                    shape: "S1t"
                },
                sampleUtterances: {
                    shape: "S1n"
                },
                waitAndContinueSpecification: {
                    type: "structure",
                    required: [ "waitingResponse", "continueResponse" ],
                    members: {
                        waitingResponse: {
                            shape: "S2d"
                        },
                        continueResponse: {
                            shape: "S2d"
                        },
                        stillWaitingResponse: {
                            type: "structure",
                            required: [ "messageGroups", "frequencyInSeconds", "timeoutInSeconds" ],
                            members: {
                                messageGroups: {
                                    shape: "S1u"
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
        S31: {
            type: "structure",
            required: [ "obfuscationSettingType" ],
            members: {
                obfuscationSettingType: {}
            }
        },
        S35: {
            type: "list",
            member: {
                type: "structure",
                members: {
                    sampleValue: {
                        shape: "S37"
                    },
                    synonyms: {
                        type: "list",
                        member: {
                            shape: "S37"
                        }
                    }
                }
            }
        },
        S37: {
            type: "structure",
            required: [ "value" ],
            members: {
                value: {}
            }
        },
        S3a: {
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
        S41: {
            type: "list",
            member: {}
        },
        S4a: {
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
        S4u: {
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