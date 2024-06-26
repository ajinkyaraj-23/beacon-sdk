/**
 * @publicapi
 * @category Tezos
 */
export enum TezosOperationType {
  ORIGINATION = 'origination',
  DELEGATION = 'delegation',
  REVEAL = 'reveal',
  TRANSACTION = 'transaction',
  ACTIVATE_ACCOUNT = 'activate_account',
  ENDORSEMENT = 'endorsement',
  SEED_NONCE_REVELATION = 'seed_nonce_revelation',
  DOUBLE_ENDORSEMENT_EVIDENCE = 'double_endorsement_evidence',
  DOUBLE_BAKING_EVIDENCE = 'double_baking_evidence',
  PROPOSALS = 'proposals',
  BALLOT = 'ballot',
  ATTESTATION = 'attestation',
  PREATTESTATION = 'preattestation',
  PREENDORSEMENT = 'preendorsement',
  SET_DEPOSITS_LIMIT = 'set_deposits_limit',
  DOUBLE_PREATTESTATION_EVIDENCE = 'double_preattestation_evidence',
  DOUBLE_PREENDORSEMENT_EVIDENCE = 'double_preendorsement_evidence',
  ATTESTATION_WITH_SLOT = 'attestation_with_slot',
  ENDORSEMENT_WITH_SLOT = 'endorsement_with_slot',
  DOUBLE_ATTESTATION_EVIDENCE = 'double_attestation_evidence',
  FAILING_NOOP = 'failing_noop',
  REGISTER_GLOBAL_CONSTANT = 'register_global_constant',
  TRANSFER_TICKET = 'transfer_ticket',
  INCREASE_PAID_STORAGE = 'increase_paid_storage',
  UPDATE_CONSENSUS_KEY = 'update_consensus_key',
  DRAIN_DELEGATE = 'drain_delegate',
  VDF_REVELATION = 'vdf_revelation',
  EVENT = 'event',
  TICKET_UPDATES = 'ticket_updates',
  SMART_ROLLUP_ORIGINATE = 'smart_rollup_originate',
  SMART_ROLLUP_ADD_MESSAGES = 'smart_rollup_add_messages',
  SMART_ROLLUP_EXECUTE_OUTBOX_MESSAGE = 'smart_rollup_execute_outbox_message',
  SMART_ROLLUP_PUBLISH = 'smart_rollup_publish',
  SMART_ROLLUP_CEMENT = 'smart_rollup_cement',
  SMART_ROLLUP_RECOVER_BOND = 'smart_rollup_recover_bond',
  SMART_ROLLUP_REFUTE = 'smart_rollup_refute',
  SMART_ROLLUP_TIMEOUT = 'smart_rollup_timeout',
  DAL_PUBLISH_COMMITMENT = 'dal_publish_commitment'
}
