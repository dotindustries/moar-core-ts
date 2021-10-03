
import {MoarClient} from '#client'

/**
 * Creates a new MoarClient
 *
 * @example
 *
 *   const client = makeClient()
 *
 */
export function makeClient(serviceAddress?: string): MoarClient {
  return new MoarClient(serviceAddress)
}
