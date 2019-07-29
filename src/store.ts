export class Store {
  public static listeners = ["delete", "get", "merge", "set"]
  public static state: object = {}

  public static delete(
    eid: string[], id: string[]
  ): void {
    const [parent, state] = this.parentState(id)
    if (parent) {
      delete parent[id[id.length - 1]]
      this.state = state
    }
  }

  public static get(
    eid: string[], id: string[]
  ): any {
    return id.reduce((memo, id): any => {
      return memo && memo[id]
    }, this.state)
  }

  public static merge(
    eid: string[], id: string[], value: any
  ): void {
    const [parent, state] = this.parentState(id)
    if (parent) {
      Object.assign(parent[id[id.length - 1]], value)
      this.state = state
    }
  }

  public static set(
    eid: string[], id: string[], value: any
  ): void {
    const [parent, state] = this.parentState(id)
    if (parent) {
      parent[id[id.length - 1]] = value
      this.state = state
    }
  }

  private static parentState(
    id: string[]
  ): [object | undefined, object] {
    const state = { ...this.state }
    return [
      id.slice(0, -1).reduce(
        (memo, id): object => {
          if (memo && typeof memo === "object") {
            const exists = memo[id] !== undefined
            const obj = typeof memo[id] === "object"
            memo[id] = obj ?
              { ...memo[id] } :
              (memo[id] || {})
            return !exists || obj ? memo[id] : undefined
          }
        },
        state
      ),
      state
    ]
  }
}
