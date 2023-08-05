export default interface SignUpStagesProps {
  position: number;
  onPress: (position: number) => void;
  onChange?: (fieldName: string, value: any) => void;
}
