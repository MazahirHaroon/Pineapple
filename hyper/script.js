/**
 * A patient visiting a doctor for prescription
 * @param {com.phoenix.VisitDoctor} rd - the health record to be inserted
 * @transaction
 */
function visitDoctor(rd) {
  rd.record.diagnosis = rd.newDiagnosis;
  rd.record.prescription = rd.newPrescription;
  if (rd.newBillAmt > 1000) {
    rd.record.polOwner = "False";
  }
  return getAssetRegistry("com.phoenix.HospitalRecord").then(function(
    assetRegistry
  ) {
    return assetRegistry.update(rd.record);
  });
}
