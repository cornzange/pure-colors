import { Address, Cell, beginCell } from "@ton/ton"
import { COLLECTION_SMART_CONTRACT_ADDRESS, COMPUTE_FEE, MIN_TONS_FOR_IMAGE, MIN_TONS_FOR_STORAGE, OWNERS_FEE, TRANSFER_GAS } from "../constants"
import { Buffer } from "buffer"

type msgRes = {
    address: string,
    amount: string,
    payload: string
}

const computeAmount = () => {
    const nftDeployAmount = MIN_TONS_FOR_STORAGE + TRANSFER_GAS
    const linkDeployAmount = MIN_TONS_FOR_STORAGE + TRANSFER_GAS
    const result = linkDeployAmount + nftDeployAmount + COMPUTE_FEE + OWNERS_FEE

    return BigInt(result).toString()
}

const getCollectionAddress = (address: string) => Address.parse(address).toString()

const getPayload = (color: string, ownerAddress: Address) => {
    const data: Cell = beginCell().storeBuffer(Buffer.from(color.slice(1), 'ascii')).endCell()
    const addr: Cell = beginCell().storeAddress(ownerAddress).endCell()
    const body = beginCell()
        .storeUint(1, 32)// op code
        .storeUint(1, 64)// query id
        .storeCoins(0)// no money needed
        .storeRef(data)// metadata
        .storeRef(addr)// address
        .endCell()

    return body.toBoc().toString('base64');
}

export const getMSG = (color: string, ownerAddress: Address): msgRes => {
    return {
        address: getCollectionAddress(COLLECTION_SMART_CONTRACT_ADDRESS),
        amount: computeAmount(),
        payload: getPayload(color, ownerAddress)
    }
}

