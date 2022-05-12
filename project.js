const medicine = ["bleedingControl", "cpr", "aed", "heimlichManeuver"]

function CFR() {
    const cfrProvider = ["oxygen", "aspirin"," epinephrine-autoInjector", "narcan", "cervicalCollars", "patientAssessment"," vitals", "bls", "operateUnderPhysicianGuidance"]
    console.log(cfrProvider + medicine)

    function EMT() {
        const emtProvider = ["patientTransport", "Epinephrine-SyringeNeedle", "albuterol", "bloodGlucoseMonitoring"]
        console.log(emtProvider + CFR)

        function AdvancedEmt() {
            const advancedEmtProvider = ["ivInsertion", "ivFluids", "advancedAirways"]

            function paramedic() {
                const paramedicProvider = ["intubation", "advancedPharmacology", "electricalTherapy", "cardiacMonitoring"]
            }
        }
    }
}

function cna() {
    const cnaProvider = ["vitals", "takeingECG", "bloodGlucoseMonitoring"]

    function nurse() {
        const nurseProvider = ["ivInsertion", "bloodWork", "mediationAdministration", "triage", "patientAssessment"]

        function physicianAssistant() {
            const physicianAssistantProvider = ["diagnose", "treat", "medicationPrescription", "intubation"]

            function doctor() {
                const doctorProvider = ["practiceMedicineAlone", "surgery"]
            }
        }
    }
}


