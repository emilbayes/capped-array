class CappedArray extends Array {
  constructor (size) {
    super()
    this.size = size
    this.deleted = 0
  }

  push (...elms) {
    super.push(...elms)
    this.deleted = super.splice(0, Math.max(0, this.length - this.size)).length
    return this.length
  }

  unshift (...elms) {
    super.unshift(...elms)
    this.deleted = super.splice(this.size - this.length, Math.max(0, this.length - this.size)).length
    return this.length
  }

  pop () {
    const elm = super.pop()
    this.deleted = elm === undefined ? 0 : 1
    return elm
  }

  shift () {
    const elm = super.shift()
    this.deleted = elm === undefined ? 0 : 1
    return elm
  }
}

module.exports = CappedArray
