import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

interface Props {
  schemeName: string;
  details: string;
  benefits: string;
  eligibility: string;
  appProcess: string;
  docsRequired: string;
  faqs: object[];
}

const data = [
  { id: 'schemeInfo', title: 'Details', content: '${details}' },
  { id: 'schemeBenefits', title: 'Benefits', content: '${benefits}' },
  { id: 'schemeEligibility', title: 'Eligibility', content: '${eligibility}' },
  { id: 'schemeProcess', title: 'Application Process', content: '${appProcess}' },
  { id: 'schemeDocsRequired', title: 'Documents Required', content: '${docsRequired}' },
  { id: 'schemeFaqs', title: 'FaQs', content: '${faqs}' },
];

const AccordionItem = ({ item }: { item: typeof data[0] }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <View style={styles.accordionItem}>
      <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
        <Text style={styles.accordionTitle}>{item.title}</Text>
      </TouchableOpacity>
      {isExpanded && <Text style={styles.accordionContent}>{item.content}</Text>}
    </View>
  );
};

const SchemeView: React.FC<Props> = ({ schemeName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Scheme: {schemeName}</Text>
      </View>
      <Image
        source={{ uri: './assests/images/img_scheme_kisan_yojana.png' }}
        style={styles.image}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AccordionItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    backgroundColor: '#007BFF',
    padding: 16,
    alignItems: 'center',
  },
  headerText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 16,
  },
  accordionItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 8,
  },
  accordionTitle: {
    padding: 16,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  accordionContent: {
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
});

export default SchemeView;
