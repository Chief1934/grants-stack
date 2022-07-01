/** ProgramImplementation contract ABI in Human Readable ABI Format  */

const programImplementation = [
  "event Initialized(uint8)",
  "event MetadataUpdated(tuple(uint256,string),tuple(uint256,string))",
  "event RoleAdminChanged(bytes32 indexed,bytes32 indexed,bytes32 indexed)",
  "event RoleGranted(bytes32 indexed,address indexed,address indexed)",
  "event RoleRevoked(bytes32 indexed,address indexed,address indexed)",
  "function DEFAULT_ADMIN_ROLE() view returns (bytes32)",
  "function PROGRAM_OPERATOR_ROLE() view returns (bytes32)",
  "function getRoleAdmin(bytes32) view returns (bytes32)",
  "function getRoleMember(bytes32,uint256) view returns (address)",
  "function getRoleMemberCount(bytes32) view returns (uint256)",
  "function grantRole(bytes32,address)",
  "function hasRole(bytes32,address) view returns (bool)",
  "function initialize(tuple(uint256,string),address,address[])",
  "function metaPtr() view returns (uint256, string)",
  "function renounceRole(bytes32,address)",
  "function revokeRole(bytes32,address)",
  "function supportsInterface(bytes4) view returns (bool)",
  "function updateMetaPtr(tuple(uint256,string))"
]

export default programImplementation