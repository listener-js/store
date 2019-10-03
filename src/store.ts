import {
  ListenerBindings,
  ListenerEvent,
} from "@listener-js/listener"

export class Store {
  public state: object = {}

  public delete(lid: string[], id: string[]): void {
    const [parent, state] = this.parentState(id)
    if (parent) {
      delete parent[id[0]]
      this.state = state
    }
  }

  public get(lid: string[], id: string[]): any {
    return [...id].reverse().reduce((memo, id): any => {
      return memo && memo[id]
    }, this.state)
  }

  public merge(
    lid: string[],
    id: string[],
    value: any
  ): void {
    const [parent, state] = this.parentState(id)
    if (parent) {
      Object.assign(parent[id[0]], value)
      this.state = state
    }
  }

  public set(
    lid: string[],
    id: string[],
    value: any
  ): void {
    const [parent, state] = this.parentState(id)
    if (parent) {
      parent[id[0]] = value
      this.state = state
    }
  }

  private listenerBindings(
    lid: string[],
    { instance }: ListenerEvent
  ): ListenerBindings {
    return [
      [
        [`${instance.id}.set`, "**"],
        `${instance.id}.storeEmit`,
      ],
    ]
  }

  private parentState(
    id: string[]
  ): [object | undefined, object] {
    const state = { ...this.state }
    return [
      id
        .slice(1)
        .reverse()
        .reduce((memo, id): object => {
          if (memo && typeof memo === "object") {
            const exists = memo[id] !== undefined
            const obj = typeof memo[id] === "object"
            memo[id] = obj
              ? { ...memo[id] }
              : memo[id] || {}
            return !exists || obj ? memo[id] : undefined
          }
        }, state),
      state,
    ]
  }

  private store(
    lid: string[],
    value: any
  ): Promise<any> | void {
    return
  }

  private storeEmit(
    lid: string[],
    id: string[],
    value: any
  ): Promise<any> | void {
    return this.store(id, value)
  }
}

export default new Store()
