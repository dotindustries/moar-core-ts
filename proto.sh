protoc \
  -I ../../moar/ \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --plugin=protoc-gen-twirp_ts=./node_modules/.bin/protoc-gen-twirp_ts \
  --ts_opt=client_none \
  --ts_opt long_type_string \
  --ts_opt=generate_dependencies \
  --ts_out=./src/generated \
  --twirp_ts_out=./src/generated \
  --twirp_ts_opt="client_only" \
  ../../moar/*.proto
