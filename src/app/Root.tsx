// src/app/Root.tsx
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Root() {
    return (
        <View style={styles.container}>
            <Text>Hello World!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});