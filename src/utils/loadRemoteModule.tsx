const loadRemoteModule = async (moduleName: string) => {
  try {
    const remoteComponent = await import(`${moduleName}`);
    return remoteComponent;
  } catch (error) {
    console.error("Failed to load remote module:", error);
    return () => <div>Failed remoteComponent</div>; // Fallback component
  }
};
export default loadRemoteModule;
