class ReadHoldingRegistersResponseBody {

  static fromBuffer (buffer) {
    let byteCount = buffer.readUInt8(0)
    let payload = buffer.slice(1)
    let values = []
    for (let i = 0; i < byteCount; i += 2) {
      values.push(payload.readUInt16BE(i))
    }

    return new ReadHoldingRegistersResponseBody(byteCount, values, payload)
  }

  constructor (byteCount, values, payload) {
    this._byteCount = byteCount
    this._values = values
    this._payload = payload
  }

  get fc () {
    return 0x03
  }

  get byteCount () {
    return this._byteCount
  }

  get values () {
    return this._values
  }

  get payload () {
    return this._payload
  }

}

module.exports = ReadHoldingRegistersResponseBody