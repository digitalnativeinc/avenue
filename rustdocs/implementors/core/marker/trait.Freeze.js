(function() {var implementors = {};
implementors["fc_consensus"] = [{"text":"impl&lt;B, I, C&gt; Freeze for FrontierBlockImport&lt;B, I, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]}];
implementors["fc_rpc"] = [{"text":"impl&lt;B, C, P, CT, BE, H&gt; Freeze for EthApi&lt;B, C, P, CT, BE, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CT: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;B, BE, C, H&gt; Freeze for NetApi&lt;B, BE, C, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;B, C&gt; Freeze for Web3Api&lt;B, C&gt;","synthetic":true,"types":[]},{"text":"impl&lt;B, P, C, BE, H&gt; Freeze for EthPubSubApi&lt;B, P, C, BE, H&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for HexEncodedIdProvider","synthetic":true,"types":[]},{"text":"impl Freeze for EthDevSigner","synthetic":true,"types":[]}];
implementors["fc_rpc_core"] = [{"text":"impl Freeze for AccountInfo","synthetic":true,"types":[]},{"text":"impl Freeze for ExtAccountInfo","synthetic":true,"types":[]},{"text":"impl Freeze for EthAccount","synthetic":true,"types":[]},{"text":"impl Freeze for StorageProof","synthetic":true,"types":[]},{"text":"impl Freeze for RecoveredAccount","synthetic":true,"types":[]},{"text":"impl Freeze for Bytes","synthetic":true,"types":[]},{"text":"impl Freeze for Block","synthetic":true,"types":[]},{"text":"impl Freeze for Header","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Rich&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for CallRequest","synthetic":true,"types":[]},{"text":"impl Freeze for Filter","synthetic":true,"types":[]},{"text":"impl Freeze for FilteredParams","synthetic":true,"types":[]},{"text":"impl Freeze for Index","synthetic":true,"types":[]},{"text":"impl Freeze for Log","synthetic":true,"types":[]},{"text":"impl Freeze for Receipt","synthetic":true,"types":[]},{"text":"impl Freeze for SyncInfo","synthetic":true,"types":[]},{"text":"impl Freeze for Peers","synthetic":true,"types":[]},{"text":"impl Freeze for PeerInfo","synthetic":true,"types":[]},{"text":"impl Freeze for PeerNetworkInfo","synthetic":true,"types":[]},{"text":"impl Freeze for PeerProtocolsInfo","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionStats","synthetic":true,"types":[]},{"text":"impl Freeze for ChainStatus","synthetic":true,"types":[]},{"text":"impl Freeze for EthProtocolInfo","synthetic":true,"types":[]},{"text":"impl Freeze for PipProtocolInfo","synthetic":true,"types":[]},{"text":"impl Freeze for Transaction","synthetic":true,"types":[]},{"text":"impl Freeze for RichRawTransaction","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionRequest","synthetic":true,"types":[]},{"text":"impl Freeze for Work","synthetic":true,"types":[]},{"text":"impl Freeze for BlockTransactions","synthetic":true,"types":[]},{"text":"impl Freeze for BlockNumber","synthetic":true,"types":[]},{"text":"impl Freeze for FilterChanges","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for VariadicValue&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for SyncStatus","synthetic":true,"types":[]},{"text":"impl Freeze for LocalTransactionStatus","synthetic":true,"types":[]},{"text":"impl Freeze for PubSubSyncStatus","synthetic":true,"types":[]},{"text":"impl Freeze for Result","synthetic":true,"types":[]},{"text":"impl Freeze for Kind","synthetic":true,"types":[]},{"text":"impl Freeze for Params","synthetic":true,"types":[]}];
implementors["fp_consensus"] = [{"text":"impl Freeze for ConsensusLog","synthetic":true,"types":[]}];
implementors["fp_evm"] = [{"text":"impl Freeze for Vicinity","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ExecutionInfo&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for CallOrCreateInfo","synthetic":true,"types":[]}];
implementors["fp_rpc"] = [{"text":"impl Freeze for TransactionStatus","synthetic":true,"types":[]}];
implementors["frontier_template_node"] = [{"text":"impl Freeze for Executor","synthetic":true,"types":[]},{"text":"impl Freeze for MockTimestampInherentDataProvider","synthetic":true,"types":[]},{"text":"impl Freeze for ConsensusResult","synthetic":true,"types":[]},{"text":"impl Freeze for RunCmd","synthetic":true,"types":[]},{"text":"impl Freeze for Cli","synthetic":true,"types":[]},{"text":"impl Freeze for Sealing","synthetic":true,"types":[]},{"text":"impl Freeze for Subcommand","synthetic":true,"types":[]},{"text":"impl&lt;C, F, P&gt; Freeze for LightDeps&lt;C, F, P&gt;","synthetic":true,"types":[]},{"text":"impl&lt;C, P&gt; Freeze for FullDeps&lt;C, P&gt;","synthetic":true,"types":[]}];
implementors["frontier_template_runtime"] = [{"text":"impl Freeze for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Freeze for MaximumBlockWeight","synthetic":true,"types":[]},{"text":"impl Freeze for AvailableBlockRatio","synthetic":true,"types":[]},{"text":"impl Freeze for MaximumExtrinsicWeight","synthetic":true,"types":[]},{"text":"impl Freeze for MaximumBlockLength","synthetic":true,"types":[]},{"text":"impl Freeze for Version","synthetic":true,"types":[]},{"text":"impl Freeze for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for MaxLocks","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Freeze for FixedGasPrice","synthetic":true,"types":[]},{"text":"impl Freeze for ChainId","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Freeze for EthereumFindAuthor&lt;F&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Runtime","synthetic":true,"types":[]},{"text":"impl Freeze for Origin","synthetic":true,"types":[]},{"text":"impl Freeze for PalletInfo","synthetic":true,"types":[]},{"text":"impl Freeze for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionConverter","synthetic":true,"types":[]},{"text":"impl Freeze for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block, C&gt; !Freeze for RuntimeApiImpl&lt;Block, C&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Event","synthetic":true,"types":[]},{"text":"impl Freeze for OriginCaller","synthetic":true,"types":[]},{"text":"impl Freeze for Call","synthetic":true,"types":[]},{"text":"impl Freeze for SessionKeys","synthetic":true,"types":[]}];
implementors["frontier_template_test_client"] = [{"text":"impl Freeze for LocalExecutor","synthetic":true,"types":[]},{"text":"impl Freeze for GenesisParameters","synthetic":true,"types":[]}];
implementors["pallet_ethereum"] = [{"text":"impl Freeze for GenesisConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Module&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for ReturnValue","synthetic":true,"types":[]},{"text":"impl Freeze for Event","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Error&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Call&lt;T&gt;","synthetic":true,"types":[]}];
implementors["pallet_evm"] = [{"text":"impl Freeze for EnsureAddressSame","synthetic":true,"types":[]},{"text":"impl&lt;AccountId&gt; Freeze for EnsureAddressRoot&lt;AccountId&gt;","synthetic":true,"types":[]},{"text":"impl&lt;AccountId&gt; Freeze for EnsureAddressNever&lt;AccountId&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for EnsureAddressTruncated","synthetic":true,"types":[]},{"text":"impl Freeze for IdentityAddressMapping","synthetic":true,"types":[]},{"text":"impl&lt;H&gt; Freeze for HashedAddressMapping&lt;H&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for SystemChainId","synthetic":true,"types":[]},{"text":"impl Freeze for GenesisAccount","synthetic":true,"types":[]},{"text":"impl Freeze for GenesisConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Module&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;AccountId&gt; Freeze for RawEvent&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Error&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Currency as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Runner&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'vicinity, T&gt; Freeze for Backend&lt;'vicinity, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Runner&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'vicinity, 'config, T&gt; Freeze for Handler&lt;'vicinity, 'config, T&gt;","synthetic":true,"types":[]}];
implementors["pallet_evm_precompile_blake2"] = [{"text":"impl Freeze for Blake2F","synthetic":true,"types":[]}];
implementors["pallet_evm_precompile_bn128"] = [{"text":"impl Freeze for Bn128Add","synthetic":true,"types":[]},{"text":"impl Freeze for Bn128Mul","synthetic":true,"types":[]},{"text":"impl Freeze for Bn128Pairing","synthetic":true,"types":[]}];
implementors["pallet_evm_precompile_ed25519"] = [{"text":"impl Freeze for Ed25519Verify","synthetic":true,"types":[]}];
implementors["pallet_evm_precompile_modexp"] = [{"text":"impl Freeze for Modexp","synthetic":true,"types":[]}];
implementors["pallet_evm_precompile_simple"] = [{"text":"impl Freeze for Identity","synthetic":true,"types":[]},{"text":"impl Freeze for ECRecover","synthetic":true,"types":[]},{"text":"impl Freeze for Ripemd160","synthetic":true,"types":[]},{"text":"impl Freeze for Sha256","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()