import { defineStore } from 'pinia'
import type MatlabFile from "@/interfaces/IExpectedFileContent"

export const useImportStore = defineStore('import', {
  state: () => {
    return { fileContent: [] as MatlabFile[] }
  },
})