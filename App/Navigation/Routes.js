import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AuthProvider } from './Context'
import StackNav from './StackNav'
export default function Routes() {
  return (
    <AuthProvider>
        <StackNav/>
    </AuthProvider>
  )
}

const styles = StyleSheet.create({})