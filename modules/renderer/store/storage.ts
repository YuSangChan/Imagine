/**
 * store / restore options using localStorage
 */

import log from 'electron-log'
import { IDefaultOptions } from './reducer'

interface IStorageContent {
  defaultOptions: IDefaultOptions,
}

const key = 'options'

export const getOptions = () => {
  try {
    return JSON.parse(localStorage.getItem(key)!) as IStorageContent
  } catch (e) {
    log.error(`Failed to get options from localStorage, ${e}`)
  }
}

export const saveOptions = (options: IStorageContent) => {
  try {
    localStorage.setItem(key, JSON.stringify(options))
  } catch (e) {
    log.error(`Failed to set options to localStorage, ${e}`)
  }
}
