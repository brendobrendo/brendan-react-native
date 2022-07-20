import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.showModal} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/aspdotnet.png')} />
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Your course goal!' 
                    onChangeText={goalInputHandler}
                    value={enteredGoalText} />
                    <View style={styles.buttonContainer}>
                        <View>
                            <Button 
                                title="Add Goal"
                                style={styles.button}
                                onPress={addGoalHandler}
                            />
                        </View>
                        <View>
                            <Button
                                title="Cancel"
                                style={styles.button}
                                onPress={props.onCancel}
                            />
                        </View>
                    </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 16,
        borderBottomColor: "#cccccc",
        backgroundColor: '#311b6b',
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row",
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8,
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
    },
    button: {
        width: '40%',
        marginHorizontal: 8
    }
});

export default GoalInput;