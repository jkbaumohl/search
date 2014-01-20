

function fbaModelServices(url, auth, auth_cb) {

    var _url = url;
    var deprecationWarningSent = false;
    
    function deprecationWarning() {
        if (!deprecationWarningSent) {
            deprecationWarningSent = true;
            if (!window.console) return;
            console.log(
                "DEPRECATION WARNING: '*_async' method names will be removed",
                "in a future version. Please use the identical methods without",
                "the'_async' suffix.");
        }
    }

    var _auth = auth ? auth : { 'token' : '', 'user_id' : ''};
    var _auth_cb = auth_cb;


    this.get_models = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.get_models",
        [input], 1, _callback, _errorCallback);
};

    this.get_models_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.get_models", [input], 1, _callback, _error_callback);
    };

    this.get_fbas = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.get_fbas",
        [input], 1, _callback, _errorCallback);
};

    this.get_fbas_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.get_fbas", [input], 1, _callback, _error_callback);
    };

    this.get_gapfills = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.get_gapfills",
        [input], 1, _callback, _errorCallback);
};

    this.get_gapfills_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.get_gapfills", [input], 1, _callback, _error_callback);
    };

    this.get_gapgens = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.get_gapgens",
        [input], 1, _callback, _errorCallback);
};

    this.get_gapgens_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.get_gapgens", [input], 1, _callback, _error_callback);
    };

    this.get_reactions = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.get_reactions",
        [input], 1, _callback, _errorCallback);
};

    this.get_reactions_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.get_reactions", [input], 1, _callback, _error_callback);
    };

    this.get_compounds = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.get_compounds",
        [input], 1, _callback, _errorCallback);
};

    this.get_compounds_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.get_compounds", [input], 1, _callback, _error_callback);
    };

    this.get_alias = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.get_alias",
        [input], 1, _callback, _errorCallback);
};

    this.get_alias_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.get_alias", [input], 1, _callback, _error_callback);
    };

    this.get_aliassets = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.get_aliassets",
        [input], 1, _callback, _errorCallback);
};

    this.get_aliassets_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.get_aliassets", [input], 1, _callback, _error_callback);
    };

    this.get_media = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.get_media",
        [input], 1, _callback, _errorCallback);
};

    this.get_media_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.get_media", [input], 1, _callback, _error_callback);
    };

    this.get_biochemistry = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.get_biochemistry",
        [input], 1, _callback, _errorCallback);
};

    this.get_biochemistry_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.get_biochemistry", [input], 1, _callback, _error_callback);
    };

    this.get_ETCDiagram = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.get_ETCDiagram",
        [input], 1, _callback, _errorCallback);
};

    this.get_ETCDiagram_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.get_ETCDiagram", [input], 1, _callback, _error_callback);
    };

    this.import_probanno = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.import_probanno",
        [input], 1, _callback, _errorCallback);
};

    this.import_probanno_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.import_probanno", [input], 1, _callback, _error_callback);
    };

    this.genome_object_to_workspace = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.genome_object_to_workspace",
        [input], 1, _callback, _errorCallback);
};

    this.genome_object_to_workspace_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.genome_object_to_workspace", [input], 1, _callback, _error_callback);
    };

    this.genome_to_workspace = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.genome_to_workspace",
        [input], 1, _callback, _errorCallback);
};

    this.genome_to_workspace_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.genome_to_workspace", [input], 1, _callback, _error_callback);
    };

    this.add_feature_translation = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.add_feature_translation",
        [input], 1, _callback, _errorCallback);
};

    this.add_feature_translation_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.add_feature_translation", [input], 1, _callback, _error_callback);
    };

    this.genome_to_fbamodel = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.genome_to_fbamodel",
        [input], 1, _callback, _errorCallback);
};

    this.genome_to_fbamodel_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.genome_to_fbamodel", [input], 1, _callback, _error_callback);
    };

    this.import_fbamodel = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.import_fbamodel",
        [input], 1, _callback, _errorCallback);
};

    this.import_fbamodel_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.import_fbamodel", [input], 1, _callback, _error_callback);
    };

    this.export_fbamodel = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.export_fbamodel",
        [input], 1, _callback, _errorCallback);
};

    this.export_fbamodel_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.export_fbamodel", [input], 1, _callback, _error_callback);
    };

    this.export_object = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.export_object",
        [input], 1, _callback, _errorCallback);
};

    this.export_object_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.export_object", [input], 1, _callback, _error_callback);
    };

    this.export_genome = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.export_genome",
        [input], 1, _callback, _errorCallback);
};

    this.export_genome_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.export_genome", [input], 1, _callback, _error_callback);
    };

    this.adjust_model_reaction = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.adjust_model_reaction",
        [input], 1, _callback, _errorCallback);
};

    this.adjust_model_reaction_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.adjust_model_reaction", [input], 1, _callback, _error_callback);
    };

    this.adjust_biomass_reaction = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.adjust_biomass_reaction",
        [input], 1, _callback, _errorCallback);
};

    this.adjust_biomass_reaction_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.adjust_biomass_reaction", [input], 1, _callback, _error_callback);
    };

    this.addmedia = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.addmedia",
        [input], 1, _callback, _errorCallback);
};

    this.addmedia_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.addmedia", [input], 1, _callback, _error_callback);
    };

    this.export_media = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.export_media",
        [input], 1, _callback, _errorCallback);
};

    this.export_media_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.export_media", [input], 1, _callback, _error_callback);
    };

    this.runfba = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.runfba",
        [input], 1, _callback, _errorCallback);
};

    this.runfba_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.runfba", [input], 1, _callback, _error_callback);
    };

    this.export_fba = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.export_fba",
        [input], 1, _callback, _errorCallback);
};

    this.export_fba_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.export_fba", [input], 1, _callback, _error_callback);
    };

    this.import_phenotypes = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.import_phenotypes",
        [input], 1, _callback, _errorCallback);
};

    this.import_phenotypes_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.import_phenotypes", [input], 1, _callback, _error_callback);
    };

    this.simulate_phenotypes = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.simulate_phenotypes",
        [input], 1, _callback, _errorCallback);
};

    this.simulate_phenotypes_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.simulate_phenotypes", [input], 1, _callback, _error_callback);
    };

    this.export_phenotypeSimulationSet = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.export_phenotypeSimulationSet",
        [input], 1, _callback, _errorCallback);
};

    this.export_phenotypeSimulationSet_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.export_phenotypeSimulationSet", [input], 1, _callback, _error_callback);
    };

    this.integrate_reconciliation_solutions = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.integrate_reconciliation_solutions",
        [input], 1, _callback, _errorCallback);
};

    this.integrate_reconciliation_solutions_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.integrate_reconciliation_solutions", [input], 1, _callback, _error_callback);
    };

    this.queue_runfba = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.queue_runfba",
        [input], 1, _callback, _errorCallback);
};

    this.queue_runfba_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.queue_runfba", [input], 1, _callback, _error_callback);
    };

    this.queue_gapfill_model = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.queue_gapfill_model",
        [input], 1, _callback, _errorCallback);
};

    this.queue_gapfill_model_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.queue_gapfill_model", [input], 1, _callback, _error_callback);
    };

    this.queue_gapgen_model = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.queue_gapgen_model",
        [input], 1, _callback, _errorCallback);
};

    this.queue_gapgen_model_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.queue_gapgen_model", [input], 1, _callback, _error_callback);
    };

    this.queue_wildtype_phenotype_reconciliation = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.queue_wildtype_phenotype_reconciliation",
        [input], 1, _callback, _errorCallback);
};

    this.queue_wildtype_phenotype_reconciliation_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.queue_wildtype_phenotype_reconciliation", [input], 1, _callback, _error_callback);
    };

    this.queue_reconciliation_sensitivity_analysis = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.queue_reconciliation_sensitivity_analysis",
        [input], 1, _callback, _errorCallback);
};

    this.queue_reconciliation_sensitivity_analysis_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.queue_reconciliation_sensitivity_analysis", [input], 1, _callback, _error_callback);
    };

    this.queue_combine_wildtype_phenotype_reconciliation = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.queue_combine_wildtype_phenotype_reconciliation",
        [input], 1, _callback, _errorCallback);
};

    this.queue_combine_wildtype_phenotype_reconciliation_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.queue_combine_wildtype_phenotype_reconciliation", [input], 1, _callback, _error_callback);
    };

    this.jobs_done = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.jobs_done",
        [input], 1, _callback, _errorCallback);
};

    this.jobs_done_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.jobs_done", [input], 1, _callback, _error_callback);
    };

    this.run_job = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.run_job",
        [input], 1, _callback, _errorCallback);
};

    this.run_job_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.run_job", [input], 1, _callback, _error_callback);
    };

    this.set_cofactors = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.set_cofactors",
        [input], 1, _callback, _errorCallback);
};

    this.set_cofactors_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.set_cofactors", [input], 1, _callback, _error_callback);
    };

    this.find_reaction_synonyms = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.find_reaction_synonyms",
        [input], 1, _callback, _errorCallback);
};

    this.find_reaction_synonyms_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.find_reaction_synonyms", [input], 1, _callback, _error_callback);
    };

    this.role_to_reactions = function (params, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.role_to_reactions",
        [params], 1, _callback, _errorCallback);
};

    this.role_to_reactions_async = function (params, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.role_to_reactions", [params], 1, _callback, _error_callback);
    };

    this.fasta_to_contigs = function (params, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.fasta_to_contigs",
        [params], 1, _callback, _errorCallback);
};

    this.fasta_to_contigs_async = function (params, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.fasta_to_contigs", [params], 1, _callback, _error_callback);
    };

    this.contigs_to_genome = function (params, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.contigs_to_genome",
        [params], 1, _callback, _errorCallback);
};

    this.contigs_to_genome_async = function (params, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.contigs_to_genome", [params], 1, _callback, _error_callback);
    };

    this.probanno_to_genome = function (params, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.probanno_to_genome",
        [params], 1, _callback, _errorCallback);
};

    this.probanno_to_genome_async = function (params, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.probanno_to_genome", [params], 1, _callback, _error_callback);
    };

    this.get_mapping = function (params, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.get_mapping",
        [params], 1, _callback, _errorCallback);
};

    this.get_mapping_async = function (params, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.get_mapping", [params], 1, _callback, _error_callback);
    };

    this.adjust_mapping_role = function (params, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.adjust_mapping_role",
        [params], 1, _callback, _errorCallback);
};

    this.adjust_mapping_role_async = function (params, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.adjust_mapping_role", [params], 1, _callback, _error_callback);
    };

    this.adjust_mapping_complex = function (params, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.adjust_mapping_complex",
        [params], 1, _callback, _errorCallback);
};

    this.adjust_mapping_complex_async = function (params, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.adjust_mapping_complex", [params], 1, _callback, _error_callback);
    };

    this.adjust_mapping_subsystem = function (params, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.adjust_mapping_subsystem",
        [params], 1, _callback, _errorCallback);
};

    this.adjust_mapping_subsystem_async = function (params, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.adjust_mapping_subsystem", [params], 1, _callback, _error_callback);
    };

    this.get_template_model = function (params, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.get_template_model",
        [params], 1, _callback, _errorCallback);
};

    this.get_template_model_async = function (params, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.get_template_model", [params], 1, _callback, _error_callback);
    };

    this.import_template_fbamodel = function (input, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.import_template_fbamodel",
        [input], 1, _callback, _errorCallback);
};

    this.import_template_fbamodel_async = function (input, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.import_template_fbamodel", [input], 1, _callback, _error_callback);
    };

    this.adjust_template_reaction = function (params, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.adjust_template_reaction",
        [params], 1, _callback, _errorCallback);
};

    this.adjust_template_reaction_async = function (params, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.adjust_template_reaction", [params], 1, _callback, _error_callback);
    };

    this.adjust_template_biomass = function (params, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.adjust_template_biomass",
        [params], 1, _callback, _errorCallback);
};

    this.adjust_template_biomass_async = function (params, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.adjust_template_biomass", [params], 1, _callback, _error_callback);
    };

    this.add_stimuli = function (params, _callback, _errorCallback) {
    return json_call_ajax("fbaModelServices.add_stimuli",
        [params], 1, _callback, _errorCallback);
};

    this.add_stimuli_async = function (params, _callback, _error_callback) {
        deprecationWarning();
        return json_call_ajax("fbaModelServices.add_stimuli", [params], 1, _callback, _error_callback);
    };
 

    /*
     * JSON call using jQuery method.
     */
    function json_call_ajax(method, params, numRets, callback, errorCallback) {
        var deferred = $.Deferred();

        if (typeof callback === 'function') {
           deferred.done(callback);
        }

        if (typeof errorCallback === 'function') {
           deferred.fail(errorCallback);
        }

        var rpc = {
            params : params,
            method : method,
            version: "1.1",
            id: String(Math.random()).slice(2),
        };
        
        var beforeSend = null;
        var token = (_auth_cb && typeof _auth_cb === 'function') ? _auth_cb()
            : (_auth.token ? _auth.token : null);
        if (token != null) {
            beforeSend = function (xhr) {
                xhr.setRequestHeader("Authorization", token);
            }
        }

        jQuery.ajax({
            url: _url,
            dataType: "text",
            type: 'POST',
            processData: false,
            data: JSON.stringify(rpc),
            beforeSend: beforeSend,
            success: function (data, status, xhr) {
                var result;
                try {
                    var resp = JSON.parse(data);
                    result = (numRets === 1 ? resp.result[0] : resp.result);
                } catch (err) {
                    deferred.reject({
                        status: 503,
                        error: err,
                        url: _url,
                        resp: data
                    });
                    return;
                }
                deferred.resolve(result);
            },
            error: function (xhr, textStatus, errorThrown) {
                var error;
                if (xhr.responseText) {
                    try {
                        var resp = JSON.parse(xhr.responseText);
                        error = resp.error;
                    } catch (err) { // Not JSON
                        error = "Unknown error - " + xhr.responseText;
                    }
                } else {
                    error = "Unknown Error";
                }
                deferred.reject({
                    status: 500,
                    error: error
                });
            }
        });
        return deferred.promise();
    }
}


