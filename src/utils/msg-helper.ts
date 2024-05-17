import { Address, Cell, beginCell } from "@ton/ton"
import { COLLECTION_SMART_CONTRACT_ADDRESS, COMPUTE_FEE, MIN_TONS_FOR_IMAGE, MIN_TONS_FOR_STORAGE, OWNERS_FEE, TRANSFER_GAS } from "../constants"

type msgRes = {
    address: string,
    amount: string,
    payload: string
}

const computeAmount = () => {
    const nftDeployAmount = MIN_TONS_FOR_IMAGE + MIN_TONS_FOR_STORAGE + TRANSFER_GAS
    const linkDeployAmount = MIN_TONS_FOR_STORAGE + TRANSFER_GAS
    const result = linkDeployAmount + nftDeployAmount + COMPUTE_FEE + OWNERS_FEE

    return BigInt(result).toString()
}

const getCollectionAddress = (address: string) => Address.parse(address).toRawString()

const getPayload = (color: string) => {
    const format = ".json"
    // // const data: Cell = beginCell().storeBuffer(Buffer.from(color + format, 'ascii')).endCell()
    // const body = beginCell()
    //     .storeUint(1, 32)// op code
    //     .storeUint(1, 64)// query id
    //     .storeCoins(0)// no money needed
    //     // .storeRef(data)// metadata
    //     .endCell()

    // return body.toBoc().toString('base64');
    return format
}

export const getMSG = (color: string): msgRes => {
    const address = "address"
    return {
        // address: getCollectionAddress(COLLECTION_SMART_CONTRACT_ADDRESS),
        address,
        amount: computeAmount(),
        payload: getPayload(color)
    }
}

