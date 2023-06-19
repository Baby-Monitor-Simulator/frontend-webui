import { defineStore } from 'pinia'
import type MatlabFile from "../interfaces/IExpectedFileContent"
import earlyDecelsMAP from "../templates/exports/json/early/earlyDecelsMAP.json"
import earlyDecelsFHR from "../templates/exports/json/early/earlyDecelsFetalHeartRate.json"
import earlyDecelsO2 from "../templates/exports/json/early/earlyDecelsO2.json"
import earlyDecelsUT from "../templates/exports/json/early/earlyDecelsUterineContraction.json"

export const useImportStore = defineStore('import', {

  state: () => {
    return {
      graphData: [] as MatlabFile[],
      fetalHeartRate: [] as MatlabFile[],
      fetalBloodPressure: [] as MatlabFile[],
      uterineContractions: [] as any, // type inferring messing up with large JSON no idea why
      fetalBlood: [] as MatlabFile[],
    }
  },
  actions: {
    clearAll() {
      this.graphData = []
      this.fetalHeartRate = []
      this.fetalBloodPressure = []
      this.uterineContractions = []
      this.fetalBlood = []
    },
    fillGraph(scenario: any) {
      switch (scenario.value) {
        case "Early Decels":
          this.fetalBloodPressure = earlyDecelsMAP
          this.fetalHeartRate = earlyDecelsFHR
          this.uterineContractions = earlyDecelsUT
          this.fetalBlood = earlyDecelsO2
      } 
    },
  }
})